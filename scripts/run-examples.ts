/**
 * bun run examples  →  runs every src/examples/*.py (in a temp folder, so
 * q10's CSV/JSON files don't land in the repo) and checks the 10-line limit.
 */
import { mkdtempSync, readdirSync, readFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';

const dir = resolve(import.meta.dir, '../src/examples');
const cwd = mkdtempSync(join(tmpdir(), 'midterm-'));

for (const name of readdirSync(dir).filter((f) => f.endsWith('.py')).sort()) {
  const path = join(dir, name);
  const lines = readFileSync(path, 'utf8').trimEnd().split('\n').length;
  const flag = lines > 10 ? `  ✗ ${lines} lines (max 10)` : `  (${lines} lines)`;
  console.log(`\n=== ${name}${flag}`);
  const proc = Bun.spawnSync(['python3', path], { cwd, stdout: 'inherit', stderr: 'inherit' });
  if (proc.exitCode !== 0) console.log(`  ✗ exited with ${proc.exitCode}`);
}
