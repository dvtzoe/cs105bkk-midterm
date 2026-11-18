<!--
  @component
  Question heading: a big accent number + the question text.
  <SlideTitle n={3}>What is a class, and what is an object?</SlideTitle>
-->
<script lang="ts">
  import type { Snippet } from 'svelte';

  let { n, children }: { n?: number; children: Snippet } = $props();
</script>

<header>
  {#if n !== undefined}<span class="n">{String(n).padStart(2, '0')}</span>{/if}
  <h1>{@render children()}</h1>
</header>

<style>
  header {
    display: flex;
    align-items: baseline;
    gap: 32px;
    padding-bottom: 24px;
    border-bottom: 2px solid var(--border);
  }
  .n {
    font-size: var(--text-xl);
    font-weight: 700;
    color: var(--steel);
  }
  h1 {
    margin: 0;
    font-size: var(--text-lg);
    font-weight: 700;
    line-height: 1.2;
    color: var(--fg-strong);
  }
</style>
