import { createHighlighterCore, type HighlighterCore } from 'shiki/core';
import { createJavaScriptRegexEngine } from 'shiki/engine/javascript';
import python from 'shiki/langs/python.mjs';
import mapleDark from './theme/maple-dark.json';

/** Theme name used everywhere: the real Maple Dark VS Code theme. */
export const THEME = 'maple-dark';

let highlighter: HighlighterCore | undefined;

/** Load once before the app mounts, so <Code> can highlight synchronously. */
export async function loadHighlighter(): Promise<HighlighterCore> {
  highlighter ??= await createHighlighterCore({
    themes: [{ ...(mapleDark as object), name: THEME, type: 'dark' }],
    langs: [python],
    engine: createJavaScriptRegexEngine(),
  });
  return highlighter;
}

/** Highlight `code`. Lines listed in `marked` (1-based) get the class `marked`. */
export function highlight(code: string, lang = 'python', marked: number[] = []): string {
  if (!highlighter) throw new Error('loadHighlighter() must run before highlight()');
  return highlighter.codeToHtml(code, {
    lang,
    theme: THEME,
    transformers: [
      {
        line(node, line) {
          if (marked.includes(line)) this.addClassToHast(node, 'marked');
        },
      },
    ],
  });
}
