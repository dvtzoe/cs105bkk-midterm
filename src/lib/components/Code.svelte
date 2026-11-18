<!--
  @component
  Syntax-highlighted code (Shiki + the real Maple Dark theme) in an editor window.

  <Code src={example} file="aliasing.py" mark={[2, 3]} />

  - `src`       the code (tip: `import ex from '../examples/q01.py?raw'`)
  - `mark`      1-based line numbers to emphasise
  - `maxLines`  the brief allows at most 10; over the limit shows a red badge
  - `size`      the largest font size; text shrinks automatically so the
                longest line always fits the window (also in the PDF)
-->
<script lang="ts">
  import { highlight } from '$lib/highlight';
  import Window from './Window.svelte';

  let {
    src,
    file,
    lang = 'python',
    mark = [],
    maxLines = 10,
    lineNumbers = true,
    size,
  }: {
    src: string;
    file?: string;
    lang?: string;
    mark?: number[];
    maxLines?: number;
    lineNumbers?: boolean;
    /** max font size, e.g. "26px" (defaults to --code-size) */
    size?: string;
  } = $props();

  const code = $derived(src.replace(/\s+$/, ''));
  const lines = $derived(code.split('\n').length);
  const cols = $derived(Math.max(...code.split('\n').map((l) => l.length)));
  const html = $derived(highlight(code, lang, mark));
  const tooLong = $derived(lines > maxLines);

  $effect(() => {
    if (tooLong) console.warn(`<Code ${file ?? ''}> has ${lines} lines (max ${maxLines})`);
  });
</script>

<Window title={file}>
  {#snippet actions()}
    <span class="count" class:over={tooLong}>{lines}/{maxLines} lines</span>
  {/snippet}
  <div
    class="code"
    class:numbers={lineNumbers}
    class:has-marks={mark.length > 0}
    style:--code-size={size}
    style:--cols={cols}
  >
    {@html html}
  </div>
</Window>

<style>
  .count {
    align-self: center;
    font-size: 18px;
    color: var(--fg-muted);
  }
  .count:not(.over) {
    visibility: hidden; /* only shown when the 10-line limit is broken */
  }
  .count.over {
    padding: 2px 12px;
    color: var(--bg);
    background: var(--red);
    border-radius: 6px;
  }

  /*
   * Auto-fit: Maple Mono is monospace (each glyph is 0.6em wide), so the
   * widest line is cols × 0.6em plus the line-number gutter (2.8em).
   * Container query units let this work on hidden slides and in print.
   */
  .code {
    --gutter: 0;
    --pad: 32px;
    container-type: inline-size;
  }
  .code.numbers {
    --gutter: 2.8;
  }
  .code :global(pre) {
    margin: 0;
    padding: 24px 0;
    font-size: min(
      var(--code-size),
      calc((100cqi - 2 * var(--pad) - 4px) / (var(--cols) * 0.6 + var(--gutter)))
    );
    line-height: 1.55;
    background: transparent !important;
    counter-reset: line;
  }
  .code :global(code) {
    display: block;
  }
  .code :global(.line) {
    display: inline-block;
    width: 100%;
    padding: 0 var(--pad);
  }
  .numbers :global(.line)::before {
    counter-increment: line;
    content: counter(line);
    display: inline-block;
    width: 1.6em;
    margin-right: 1.2em;
    text-align: right;
    color: var(--fg-muted);
    opacity: 0.6;
  }
  .has-marks :global(.line:not(.marked)) {
    opacity: 0.45;
  }
  .code :global(.line.marked) {
    background: color-mix(in srgb, var(--selection) 70%, transparent);
    box-shadow: inset 4px 0 0 var(--steel);
  }
</style>
