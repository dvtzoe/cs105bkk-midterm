<!--
  @component
  A small boxed aside: a gotcha, a tip, a one-line summary.
  <Callout tone="warn">Never use a list as a default argument.</Callout>
-->
<script lang="ts">
  import type { Snippet } from 'svelte';

  type Tone = 'info' | 'tip' | 'warn';
  const tones: Record<Tone, { color: string; icon: string }> = {
    info: { color: 'var(--sky)', icon: 'i' },
    tip: { color: 'var(--green)', icon: '✓' },
    warn: { color: 'var(--sand)', icon: '!' },
  };

  let { tone = 'info', children }: { tone?: Tone; children: Snippet } = $props();
  const t = $derived(tones[tone]);
</script>

<aside style:--accent={t.color}>
  <span class="icon">{t.icon}</span>
  <div>{@render children()}</div>
</aside>

<style>
  aside {
    display: flex;
    gap: 20px;
    align-items: flex-start;
    padding: 18px 24px;
    font-size: var(--text-sm);
    background: var(--bg-raised);
    border: 1px solid var(--border);
    border-left: 4px solid var(--accent);
    border-radius: var(--radius);
  }
  .icon {
    flex: none;
    display: grid;
    place-items: center;
    width: 1.4em;
    height: 1.4em;
    font-weight: 700;
    color: var(--bg);
    background: var(--accent);
    border-radius: 50%;
  }
</style>
