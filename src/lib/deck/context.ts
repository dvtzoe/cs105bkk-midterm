import { getContext, setContext } from 'svelte';

export interface DeckContext {
  /** Called once by each <Slide> during init; returns its 0-based index. */
  register(): number;
  /** Index of the slide currently on screen. */
  readonly current: number;
}

const KEY = Symbol('deck');

export const setDeck = (deck: DeckContext) => setContext(KEY, deck);

export function getDeck(): DeckContext {
  const deck = getContext<DeckContext | undefined>(KEY);
  if (!deck) throw new Error('<Slide> must be placed inside <Deck>');
  return deck;
}
