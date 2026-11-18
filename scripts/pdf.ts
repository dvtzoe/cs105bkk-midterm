/**
 * bun run pdf  →  builds the deck, serves dist/, prints every slide to slides.pdf
 *
 * Uses your system Chromium. Override with CHROMIUM=/path/to/chrome bun run pdf
 */
import { chromium } from 'playwright-core';
import { existsSync } from 'node:fs';
import { join, resolve } from 'node:path';

const root = resolve(import.meta.dir, '..');
const dist = join(root, 'dist');
const out = join(root, process.argv[2] ?? 'slides.pdf');

const candidates = [
  process.env.CHROMIUM,
  '/usr/bin/chromium',
  '/usr/bin/chromium-browser',
  '/usr/bin/google-chrome',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
].filter(Boolean) as string[];
const executablePath = candidates.find((p) => existsSync(p));
if (!executablePath) throw new Error('No Chromium found. Set CHROMIUM=/path/to/chrome');

// Tiny static server for dist/
const server = Bun.serve({
  port: 0,
  async fetch(req) {
    const path = new URL(req.url).pathname;
    const file = Bun.file(join(dist, path === '/' ? 'index.html' : path));
    return (await file.exists()) ? new Response(file) : new Response('Not found', { status: 404 });
  },
});

const browser = await chromium.launch({ executablePath });
try {
  const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
  page.on('console', (m) => m.type() === 'warning' && console.warn('[page]', m.text()));
  await page.goto(server.url.href);
  await page.waitForFunction(() => window.__deckReady === true, null, { timeout: 30_000 });
  await page.emulateMedia({ media: 'print' });
  const slides = await page.locator('[data-slide]').count();
  await page.pdf({ path: out, width: '1920px', height: '1080px', printBackground: true, preferCSSPageSize: true });
  console.log(`✓ ${slides} slides → ${out}`);
} finally {
  await browser.close();
  server.stop();
}
