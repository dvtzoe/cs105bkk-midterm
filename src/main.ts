import { mount } from 'svelte';
import './app.css';
import App from './App.svelte';
import { loadHighlighter } from '$lib/highlight';

declare global {
  interface Window {
    /** Set when fonts + highlighting are done; the PDF script waits for it. */
    __deckReady?: boolean;
  }
}

await loadHighlighter();
const app = mount(App, { target: document.getElementById('app')! });
await document.fonts.ready;
window.__deckReady = true;

export default app;
