<!--
  @component
  Side-by-side layout. `cols` is any CSS grid-template-columns value.
  <Columns cols="1fr 1.3fr">{left}{right}</Columns>  (children = the cells)
-->
<script lang="ts">
  import type { Snippet } from 'svelte';

  let {
    cols = '1fr 1fr',
    gap = 'calc(var(--gap) * 1.5)',
    align = 'start',
    children,
  }: { cols?: string; gap?: string; align?: 'start' | 'center' | 'end' | 'stretch'; children: Snippet } =
    $props();
</script>

<div style:grid-template-columns={cols} style:gap style:align-items={align}>
  {@render children()}
</div>

<style>
  div {
    display: grid;
    flex: 1;
    min-height: 0;
  }
  div > :global(*) {
    min-width: 0;
  }
</style>
