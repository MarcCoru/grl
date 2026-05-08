# Draggable Figure Elements

This folder contains small Vue 3 components for individual Slidev figure elements. They are intentionally not full diagrams, pipelines, or learning loops. Use them as draggable building blocks and compose figures manually inside Markdown slides.

Slidev auto-loads components from `components/`, so these can be used directly in slides. Slidev stores `v-drag` positions in the slide frontmatter.

## Examples

```md
<TensorBox v-drag="'input-tensor'" label="Input Tensor" shape="[H × W × C]" />
<TensorBox v-drag="'target'" label="Ground Truth" shape="[C]" icon="✅" variant="target" />

<ModelBlock
  v-drag="'encoder'"
  title="CNN Encoder"
  subtitle="feature extractor"
  :chips="['Conv', 'ReLU', 'Pool']"
/>
<ModelBlock v-drag="'fm'" title="Foundation Model" subtitle="pre-trained backbone" icon="🌍" variant="foundation" />

<ArrowLabel v-drag="'arrow1'" label="embed" />
<ArrowLabel v-drag="'arrow2'" direction="down" dashed label="loss" />

<IconCard v-drag="'sar'" icon="📡" title="SAR" caption="Radar imagery" />
<IconCard v-drag="'yield'" icon="🌾" title="Yield prediction" caption="Downstream task" />

<FormulaBox v-drag="'formula'" label="Location encoder" formula="z = fθ(lat, lon, t)" />

<LatentVector v-drag="'z'" label="z" :length="12" caption="512-dimensional embedding" />

<DataTile v-drag="'s2'" icon="🛰️" title="Sentinel-2" subtitle="13 bands" badge="raster" />
<DataTile v-drag="'era5'" icon="🌦️" title="ERA5" subtitle="weather reanalysis" badge="time series" />

<BadgeLabel v-drag="'label1'" text="pre-trained" variant="accent" />
<BadgeLabel v-drag="'shape-label'" text="[H × W × C]" mono />

<ConnectorDot v-drag="'node-a'" label="x" />
<ConnectorDot v-drag="'node-z'" label="z" variant="accent" />
```

## Notes

- Components avoid absolute positioning so they work well with `v-drag`.
- Components use scoped CSS and no external assets or dependencies.
- Icons are plain text or emoji and can be overridden with props.
- `FormulaBox` displays plain text. Full LaTeX math should usually be written directly in Slidev Markdown so Slidev/KaTeX can render it properly.
- Combine these elements manually on slides to build the exact figure layout you want.

