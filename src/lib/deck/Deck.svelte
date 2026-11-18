<!--
  @component
  The slide engine. Put <Slide>s (or slide files) inside it, in order.

  Keys:  → / Space / PageDown  next      ← / PageUp  previous
         Home / End            first/last   F         fullscreen
  The URL hash (#3) remembers the current slide.
  Printing (Ctrl+P or `bun run pdf`) outputs every slide as one 1920×1080 page.
-->
<script lang="ts">
  import { onMount, type Snippet } from 'svelte';
  import { setDeck } from './context';

  let {
    children,
    width = 1920,
    height = 1080,
  }: { children: Snippet; width?: number; height?: number } = $props();

  // Slides register synchronously while they initialise, so this is
  // a plain counter rather than reactive state.
  let total = 0;
  let current = $state(readHash());

  setDeck({
    register: () => total++,
    get current() {
      return current;
    },
  });

  function readHash(): number {
    const n = Number.parseInt(location.hash.slice(1), 10);
    return Number.isFinite(n) && n > 0 ? n - 1 : 0;
  }

  function go(index: number) {
    current = Math.max(0, Math.min(total - 1, index));
    history.replaceState(null, '', `#${current + 1}`);
  }

  function onkeydown(e: KeyboardEvent) {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    switch (e.key) {
      case 'ArrowRight':
      case 'ArrowDown':
      case 'PageDown':
      case ' ':
        go(current + 1);
        break;
      case 'ArrowLeft':
      case 'ArrowUp':
      case 'PageUp':
        go(current - 1);
        break;
      case 'Home':
        go(0);
        break;
      case 'End':
        go(total - 1);
        break;
      case 'f':
        if (document.fullscreenElement) document.exitFullscreen();
        else document.documentElement.requestFullscreen();
        break;
      default:
        return;
    }
    e.preventDefault();
  }

  onMount(() => go(current)); // clamp a stale hash once we know `total`

  let innerWidth = $state(window.innerWidth);
  let innerHeight = $state(window.innerHeight);
  const scale = $derived(Math.min(innerWidth / width, innerHeight / height));
</script>

<svelte:window bind:innerWidth bind:innerHeight {onkeydown} onhashchange={() => go(readHash())} />

<div class="viewport">
  <div class="stage" style:width="{width}px" style:height="{height}px" style:--scale={scale}>
    {@render children()}
  </div>
</div>

<style>
  .viewport {
    position: fixed;
    inset: 0;
    overflow: hidden;
    background: var(--bg-deep);
  }

  .stage {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(var(--scale));
    box-shadow: 0 0 0 1px var(--border);
  }

  @media print {
    .viewport {
      position: static;
      display: block;
      overflow: visible;
    }
    .stage {
      position: static;
      transform: none;
      box-shadow: none;
      height: auto !important;
    }
  }
</style>
