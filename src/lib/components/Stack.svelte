<!--
  @component
  Vertical layout with a consistent gap. Nest inside <Columns> cells
  or use directly in a <Slide>.
-->
<script lang="ts">
  import type { Snippet } from 'svelte';

  let {
    gap = 'var(--gap)',
    justify = 'start',
    children,
  }: { gap?: string; justify?: 'start' | 'center' | 'end' | 'space-between'; children: Snippet } =
    $props();
</script>

<div style:gap style:justify-content={justify}>{@render children()}</div>

<style>
  div {
    display: flex;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
  }
</style>
