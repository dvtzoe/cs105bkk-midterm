<!--
  @component
  What the program prints, in a terminal-style panel.
  <Output text={"[1, 2, 3, 4]\nTrue"} />
-->
<script lang="ts">
  import Window from './Window.svelte';

  let { text, title = 'output' }: { text: string; title?: string } = $props();
</script>

<Window {title} accent="var(--green)">
  <pre>{text.replace(/\s+$/, '')}</pre>
</Window>

<style>
  pre {
    margin: 0;
    padding: 20px 32px;
    font-size: 26px;
    line-height: 1.5;
    color: var(--green);
    white-space: pre-wrap;
  }
</style>
