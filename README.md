# CS105BKK midterm slides

> [!WARNING]
> AI GENERATED

Svelte 5 + Vite + Bun. Maple Dark theme, Maple Mono font (ligatures on).

```sh
bun install
bun run dev        # present: → / Space next, ← back, Home/End, F fullscreen
bun run pdf        # → slides.pdf (one 1920×1080 page per slide, for Classroom)
bun run examples   # run every Python example + check the 10-line limit
bun run check      # type-check
```

`bun run pdf` uses system Chromium; set `CHROMIUM=/path/to/chrome` if it isn't found.

## Layout

```
src/
  App.svelte            slide order
  slides/NN-*.svelte    one file per slide
  examples/qNN_*.py     the Python shown on each slide (imported with ?raw)
  app.css               design tokens (Maple Dark colors, sizes, font)
  lib/
    deck/               Deck + Slide (navigation, scaling, print)
    components/         the building blocks below
    theme/maple-dark.json   the VS Code theme, used by Shiki (MIT, subframe7536)
```

## Components (`import { … } from '$lib'`)

| Component | Use |
|---|---|
| `<Slide center?>` | one 1920×1080 slide; children stack vertically |
| `<SlideTitle n={3}>…</SlideTitle>` | numbered question heading |
| `<Definition>` / `<UseCase>` | labelled prose blocks (blue / green) |
| `<Section label accent>` | generic labelled block (base of the two above) |
| `<Code src file mark={[2,3]} size maxLines>` | highlighted code; auto-shrinks to fit; red badge if > 10 lines |
| `<Output text title>` | terminal-style output panel |
| `<Callout tone="info\|tip\|warn">` | small boxed aside |
| `<Window title>` | editor-window frame for anything |
| `<Columns cols="1fr 1.2fr">` / `<Stack gap>` | layout |

New slide: copy a file in `src/slides/`, add its `.py` to `src/examples/`, and list it in `App.svelte`.
