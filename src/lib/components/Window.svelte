<!--
  @component
  Editor-style frame (tab bar + body), in Maple Dark's chrome colors.
  Used by <Code> and <Output>; usable on its own for anything.
-->
<script lang="ts">
  import type { Snippet } from 'svelte';

  let {
    title,
    accent = 'var(--steel)',
    children,
    actions,
  }: {
    title?: string;
    accent?: string;
    children: Snippet;
    /** optional content on the right side of the tab bar */
    actions?: Snippet;
  } = $props();
</script>

<div class="window" style:--accent={accent}>
  <div class="bar">
    <span class="dots"><i></i><i></i><i></i></span>
    {#if title}<span class="tab">{title}</span>{/if}
    <span class="spacer"></span>
    {@render actions?.()}
  </div>
  <div class="body">{@render children()}</div>
</div>

<style>
  .window {
    display: flex;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
    background: var(--bg);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    overflow: hidden;
  }
  .bar {
    display: flex;
    align-items: stretch;
    gap: 16px;
    padding: 0 20px;
    font-size: 22px;
    background: var(--bg-deep);
    border-bottom: 1px solid var(--border);
  }
  .dots {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .dots i {
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: var(--border);
  }
  .tab {
    padding: 12px 22px;
    color: var(--fg);
    background: var(--bg-raised);
    border-top: 3px solid var(--accent);
  }
  .spacer {
    flex: 1;
  }
  .body {
    flex: 1;
    min-height: 0;
  }
</style>
