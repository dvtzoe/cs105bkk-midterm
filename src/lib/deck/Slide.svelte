<!--
  @component
  One slide (1920×1080). Everything inside is laid out as a vertical flex
  column with the deck's padding. Only the current slide is shown on screen;
  all slides are shown when printing.
-->
<script lang="ts">
  import type { Snippet } from 'svelte';
  import { getDeck } from './context';

  let {
    children,
    center = false,
    class: className = '',
  }: {
    children: Snippet;
    /** Center content vertically and horizontally (title / closing slides). */
    center?: boolean;
    class?: string;
  } = $props();

  const deck = getDeck();
  const index = deck.register();
  const active = $derived(deck.current === index);
</script>

<section class="slide {className}" class:active class:center data-slide={index + 1}>
  {@render children()}
</section>

<style>
  .slide {
    position: absolute;
    inset: 0;
    display: none;
    flex-direction: column;
    gap: var(--gap);
    padding: var(--pad-y) var(--pad-x);
    background: var(--bg);
    overflow: hidden;
    font-size: var(--text-md);
    line-height: 1.45;
  }
  .slide.active {
    display: flex;
  }
  .center {
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  @media print {
    .slide {
      position: relative;
      display: flex;
      width: 1920px;
      height: 1080px;
      break-after: page;
    }
  }
</style>
