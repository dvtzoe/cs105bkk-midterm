<!--
  @component
  A labelled block of prose. Base for <Definition> and <UseCase>.
  <Section label="Why it matters" accent="var(--peach)">…</Section>
-->
<script lang="ts">
  import type { Snippet } from 'svelte';

  let {
    label,
    accent = 'var(--blue)',
    children,
  }: { label: string; accent?: string; children: Snippet } = $props();
</script>

<section style:--accent={accent}>
  <h2># {label}</h2>
  <div class="body">{@render children()}</div>
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding-left: 28px;
    border-left: 4px solid var(--accent);
  }
  h2 {
    margin: 0;
    font-size: var(--text-sm);
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--accent);
  }
  .body {
    font-size: var(--text-md);
    color: var(--fg);
  }
  .body :global(p) {
    margin: 0 0 0.5em;
  }
  .body :global(p:last-child),
  .body :global(ul:last-child) {
    margin-bottom: 0;
  }
  .body :global(ul) {
    margin: 0;
    padding-left: 1.2em;
  }
</style>
