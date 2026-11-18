<!-- @component The "Definition" block (blue). -->
<script lang="ts">
  import type { Snippet } from 'svelte';
  import Section from './Section.svelte';

  let { label = 'Definition', children }: { label?: string; children: Snippet } = $props();
</script>

<Section {label} accent="var(--blue)">{@render children()}</Section>
