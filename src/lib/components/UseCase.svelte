<!-- @component The "Use case" block (green). -->
<script lang="ts">
  import type { Snippet } from 'svelte';
  import Section from './Section.svelte';

  let { label = 'Use case', children }: { label?: string; children: Snippet } = $props();
</script>

<Section {label} accent="var(--green)">{@render children()}</Section>
