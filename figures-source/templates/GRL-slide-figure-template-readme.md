# GRL Slide Figure Template

This folder contains an Adobe Illustrator-compatible SVG source template for figures in the **Geospatial Representation Learning** Slidev course.

The template is intentionally SVG, not `.ai`. Open it in Illustrator, edit it, and then save your own Illustrator source file as `.ai` or `.ait` if you want a native working file.

## Files

- `GRL-slide-figure-template.svg`: editable 1600 × 900 px figure template.
- `GRL-slidev-colors.css`: color tokens extracted from the Slidev deck.

## Open In Illustrator

1. Open Adobe Illustrator.
2. Choose **File → Open...**.
3. Select `figures-source/templates/GRL-slide-figure-template.svg`.
4. In the Layers panel, keep or rename the imported groups:
   - `background`
   - `safe-margin`
   - `style-samples`
   - `figure-content`
   - `labels`
   - `export-notes`

Illustrator usually preserves SVG group `id` values as object or layer names. If it flattens the import, use the named groups as a guide and rebuild top-level layers manually.

## Save As `.ai` Or `.ait`

After opening the SVG:

1. Choose **File → Save As...**.
2. Select **Adobe Illustrator (`.ai`)** for a reusable source file.
3. Select **Illustrator Template (`.ait`)** if you want Illustrator to create a fresh untitled document from the template each time.
4. Keep a source copy under `figures-source/` and export web-ready SVGs separately.

Do not commit manually edited binary `.ai` files unless the repository policy allows large proprietary source files.

## Recommended Style

The Slidev deck uses:

- Canvas: white `#ffffff`.
- Main text: `#222222`.
- Muted text: `#5f625f`.
- Rule/border gray: `#d7d9d8`.
- Bonn blue: `#00457c`.
- Bonn yellow: `#f2c300`.
- Font stack: `Arial, Helvetica, sans-serif`.
- Radius: mostly `4px` in deck CSS; figure components use roughly `8-12px` at this 1600 px artboard scale.
- Shadows: restrained blue-tinted shadows, equivalent to low-opacity `#00457c`.

Use the safe-margin guide for slide composition. Hide `safe-margin`, `style-samples`, and `export-notes` before exporting a final figure unless those elements are intentionally part of the graphic.

## Export SVG For Slidev

Recommended Illustrator export settings:

- Format: **SVG**.
- Styling: **Presentation Attributes** or **Internal CSS**.
- Font: **SVG text** while iterating, so labels remain searchable/editable.
- Images: not applicable; avoid raster images in these templates.
- Object IDs: **Layer Names**.
- Decimal places: `2` or `3`.
- Minify: off for source exports, optional for final web exports.
- Responsive: on is usually fine for Slidev `<img>` use.

Check the exported SVG in a browser before using it in slides.

## Slidev Workflow

Recommended workflow:

1. Design from the source template in Illustrator.
2. Save the editable source as `.ai`, `.ait`, or source `.svg` under `figures-source/...`.
3. Export a clean SVG for presentation use.
4. Put the exported SVG under `public/figures/...`.
5. Embed it in Slidev:

```html
<img
  src="/figures/my-figure.svg"
  class="w-full rounded-xl border shadow"
  alt="Short description of the figure"
/>
```

For lecture-local assets, a relative path beside `slides.md` also works:

```html
<img src="./figure-name.svg" class="w-full h-[360px] object-contain" alt="Short description" />
```

## Staged Exports For `v-click`

For click-by-click animations, create staged SVG exports from the same Illustrator source:

1. Put each reveal step on its own Illustrator layer or group.
2. Export one SVG per state:
   - `representation-step-01.svg`
   - `representation-step-02.svg`
   - `representation-step-03.svg`
3. In Slidev, stack or sequence them with `v-click`.

Example:

```html
<img src="/figures/representation-step-01.svg" class="w-full" alt="Input geospatial data" />
<img v-click src="/figures/representation-step-02.svg" class="w-full" alt="Encoded representation" />
<img v-click src="/figures/representation-step-03.svg" class="w-full" alt="Downstream application" />
```

If the figure must occupy the same position across clicks, place the images in a fixed-size container and absolutely position each stage.

## Notes

- Avoid external fonts. The deck uses Arial/Helvetica.
- Avoid dark backgrounds unless a specific slide requires one.
- Keep labels short and high contrast.
- Keep source SVG readable and editable; do not minify source files.
