---
addons:
  - "../"
defaults:
  layout: bonn-content
layout: bonn-cover
subhead: Illustration Workbench
home: ../
---

# Editable Geospatial Figure Components

## Drag, arrange, and modify reusable Slidev building blocks

---
dragPos:
  palette-input: 82,196,150,94
  palette-model: 289,181,178,108
  palette-vector: 532,194,170,82
  palette-arrow: 250,286,104,38
  palette-data: 82,352,146,84
  palette-icon: 292,350,160,70
  palette-formula: 534,340,174,86
  palette-badge: 494,280,98,28
  palette-node-a: 704,272,26,26
  palette-node-b: 746,272,26,26
---

# Component Palette

Each element on this slide is draggable. Edit the component files in `components/figures/` to change their shape, style, props, or behavior.

<TensorBox v-drag="'palette-input'" label="Input Tensor" shape="[T x H x W x C]" icon="▦" variant="input" caption="multispectral sequence" />

<ModelBlock v-drag="'palette-model'" title="Encoder Block" subtitle="fθ(x)" icon="◈" variant="encoder" :chips="['Conv', 'Norm', 'Pool']" />

<LatentVector v-drag="'palette-vector'" label="Embedding z" :length="12" caption="compact representation" variant="latent" />

<ArrowLabel v-drag="'palette-arrow'" label="maps to" />

<DataTile v-drag="'palette-data'" icon="S2" title="Sentinel-2" subtitle="optical raster" badge="raster" />

<IconCard v-drag="'palette-icon'" icon="☉" title="Location" caption="lat, lon, time" compact />

<FormulaBox v-drag="'palette-formula'" label="Function" formula="z = fθ(x, t)" caption="plain text formula" />

<BadgeLabel v-drag="'palette-badge'" text="editable" variant="accent" />

<ConnectorDot v-drag="'palette-node-a'" label="a" />

<ConnectorDot v-drag="'palette-node-b'" label="b" variant="accent" />

---
dragPos:
  pipe-s2: 76,185,128,76
  pipe-era5: 76,292,128,76
  pipe-stack: 260,220,150,90
  pipe-arrow-1: 438,242,92,34
  pipe-encoder: 548,205,176,112
  pipe-arrow-2: 740,242,92,34
  pipe-z: 840,218,150,80
  pipe-label: 294,344,150,30
---

# Pipeline Assembly

Use this slide as a template for model-flow illustrations. Rearrange the blocks, duplicate components, or replace labels directly in Markdown.

<DataTile v-drag="'pipe-s2'" icon="S2" title="Sentinel-2" subtitle="13 bands" badge="image" />

<DataTile v-drag="'pipe-era5'" icon="E5" title="ERA5" subtitle="weather context" badge="time" />

<TensorBox v-drag="'pipe-stack'" label="Fused Input" shape="[T x H x W x C]" icon="▣" variant="input" caption="aligned tensors" />

<ArrowLabel v-drag="'pipe-arrow-1'" label="encode" />

<ModelBlock v-drag="'pipe-encoder'" title="Geo Encoder" subtitle="shared backbone" icon="◎" variant="foundation" :chips="['spatial', 'temporal', 'spectral']" />

<ArrowLabel v-drag="'pipe-arrow-2'" label="embed" />

<LatentVector v-drag="'pipe-z'" label="z" :length="10" caption="task-ready features" variant="latent" />

<BadgeLabel v-drag="'pipe-label'" text="manual composition" variant="accent" />

---
dragPos:
  compare-classic: 95,166,196,124
  compare-deep: 380,166,196,124
  compare-foundation: 666,166,196,124
  compare-arrow-a: 304,208,72,34
  compare-arrow-b: 590,208,72,34
  compare-note-a: 122,344,150,64
  compare-note-b: 404,344,175,59
  compare-note-c: 690,344,150,64
---

# Architecture Comparison

This slide is a starting point for side-by-side conceptual figures.

<ModelBlock v-drag="'compare-classic'" title="Classical ML" subtitle="features + estimator" icon="F" variant="classifier" :chips="['indices', 'texture', 'RF']" />

<ArrowLabel v-drag="'compare-arrow-a'" label="scales" />

<ModelBlock v-drag="'compare-deep'" title="Deep Model" subtitle="learned features" icon="D" variant="encoder" :chips="['CNN', 'ViT', 'RNN']" />

<ArrowLabel v-drag="'compare-arrow-b'" label="pretrains" />

<ModelBlock v-drag="'compare-foundation'" title="Foundation Model" subtitle="general geospatial backbone" icon="G" variant="foundation" :chips="['large data', 'SSL', 'transfer']" />

<FormulaBox v-drag="'compare-note-a'" label="Manual" formula="x -> φ(x) -> y" />

<FormulaBox v-drag="'compare-note-b'" label="Learned" formula="x -> fθ(x) -> y" />

<FormulaBox v-drag="'compare-note-c'" label="Reusable" formula="x -> z -> tasks" />

---
dragPos:
  vit-input-title: 102,86,160,54
  vit-output-title: 604,86,170,54
  vit-input-image: 38,208,136,136
  vit-input-caption: 28,388,180,92
  vit-patch: 202,225,145,104
  vit-arrow-a: 176,252,52,34
  vit-arrow-b: 350,252,56,34
  vit-in-tokens: 392,176,44,215
  vit-in-caption: 346,406,140,60
  vit-transformer: 458,156,168,240
  vit-out-tokens: 644,176,44,215
  vit-out-caption: 612,406,145,60
  vit-arrow-c: 690,252,56,34
  vit-mlp: 718,228,112,112
  vit-arrow-d: 820,252,40,34
  vit-output-image: 850,216,118,118
  vit-output-caption: 838,388,112,108
---

<!-- Vision Transformer Patch Pipeline -->

<div v-drag="'vit-input-title'" class="text-center text-[#035172] text-[1.08rem] leading-[1.05]">Input "Tokens"<br>i.e., vectors</div>

<div v-drag="'vit-output-title'" class="text-center text-[#035172] text-[1.08rem] leading-[1.05]">Output "Tokens"<br>i.e., vectors</div>

<PatchImageGrid v-drag="'vit-input-image'" :rows="4" :cols="4" mode="input" />

<div v-drag="'vit-input-caption'" class="text-[#035172] leading-[1.12]">
  <div class="text-[1.08rem] font-800">3D input Image</div>
  <div class="text-[0.86rem]">[H x W x D] split into<br>N Patches [P x P x D]</div>
</div>

<TrapezoidBlock v-drag="'vit-patch'" caption="(convolutional)" :label="'patch\nembedding'" variant="green" />

<ArrowLabel v-drag="'vit-arrow-a'" label="" />

<ArrowLabel v-drag="'vit-arrow-b'" label="" />

<GrlTokenStack v-drag="'vit-in-tokens'" :count="6" :active="1" variant="input" />

<div v-drag="'vit-in-caption'" class="text-center text-[#035172] leading-[1.1]">
  <div class="text-[1.05rem] font-800">Input tokens</div>
  <div class="text-[0.82rem]">[P² x D<sub>model</sub>]</div>
</div>

<TransformerBlock v-drag="'vit-transformer'" :label="'Vision\nTransformer\nModel'" />

<GrlTokenStack v-drag="'vit-out-tokens'" :count="6" :active="1" variant="output" />

<div v-drag="'vit-out-caption'" class="text-center text-[#035172] leading-[1.1]">
  <div class="text-[1.05rem] font-800">Output tokens</div>
  <div class="text-[0.82rem]">[P² x D<sub>model</sub>]</div>
</div>

<ArrowLabel v-drag="'vit-arrow-c'" label="" />

<TrapezoidBlock v-drag="'vit-mlp'" :label="'MLP\nclassifier\nhead'" variant="blue" direction="left" />

<ArrowLabel v-drag="'vit-arrow-d'" label="" />

<PatchImageGrid v-drag="'vit-output-image'" :rows="4" :cols="4" mode="output" />

<div v-drag="'vit-output-caption'" class="text-center text-[#035172] text-[1.05rem] font-800 leading-[1.08]">Output<br>Image<br>or<br>Class<br>Probabilities</div>

---
dragPos:
  qkv-left-title: 20,70,160,54
  qkv-right-title: 790,62,170,54
  qkv-left-stack: 104,156,44,218
  qkv-left-caption: 24,416,180,60
  qkv-frame: 178,105,675,362
  qkv-input-label: 265,148,150,56
  qkv-input-matrix: 266,222,105,202
  qkv-trainable: 452,134,120,64
  qkv-linear-k: 420,196,215,50
  qkv-linear-q: 420,284,215,50
  qkv-linear-v: 420,372,215,50
  qkv-k-label: 656,134,170,32
  qkv-k: 656,196,170,72
  qkv-q-label: 656,266,180,32
  qkv-q: 657,292,170,72
  qkv-v-label: 656,370,180,32
  qkv-v: 656,395,170,58
  qkv-right-stack: 880,156,44,218
  qkv-right-caption: 836,416,140,60
---

<!-- Attention Projection: Keys, Queries, Values -->

<div v-drag="'qkv-left-title'" class="text-center text-[#035172] text-[1.02rem] leading-[1.05]">Input "Tokens"<br>i.e., vectors</div>

<div v-drag="'qkv-right-title'" class="text-center text-[#035172] text-[1.02rem] leading-[1.05]">Output "Tokens"<br>i.e., vectors</div>

<GrlTokenStack v-drag="'qkv-left-stack'" :count="6" :active="1" variant="input" />

<div v-drag="'qkv-left-caption'" class="text-center text-[#035172] leading-[1.1]">
  <div class="text-[1rem] font-800">Input tokens</div>
  <div class="text-[0.78rem]">[P² x D<sub>model</sub>]</div>
</div>

<RoundedFrame v-drag="'qkv-frame'" />

<div v-drag="'qkv-input-label'" class="text-center text-[#035172] font-800 leading-[1.2]">
  <div>Input</div>
  <div>X [P² x D<sub>model</sub>]</div>
</div>

<GrlTokenMatrix v-drag="'qkv-input-matrix'" :rows="6" :cols="3" variant="input" numbered="left" />

<div v-drag="'qkv-trainable'" class="text-center text-[#035172] text-[0.82rem] font-800 leading-[1.15]">trainable<br>weights</div>

<LinearProjection v-drag="'qkv-linear-k'" label="Linear W_K" variant="key" />

<LinearProjection v-drag="'qkv-linear-q'" label="Linear W_Q" variant="query" />

<LinearProjection v-drag="'qkv-linear-v'" label="Linear W_V" variant="value" />

<div v-drag="'qkv-k-label'" class="text-[#035172] text-[0.82rem] font-800">Keys K<sup>T</sup> [D<sub>m</sub> x P²]</div>

<GrlTokenMatrix v-drag="'qkv-k'" :rows="3" :cols="6" variant="key" numbered="top" />

<div v-drag="'qkv-q-label'" class="text-[#035172] text-[0.82rem] font-800">Queries Q<sup>T</sup> [D<sub>m</sub> x P²]</div>

<GrlTokenMatrix v-drag="'qkv-q'" :rows="3" :cols="6" variant="query" numbered="top" />

<div v-drag="'qkv-v-label'" class="text-[#035172] text-[0.82rem] font-800">Values V<sup>T</sup> [D<sub>m</sub> x P²]</div>

<GrlTokenMatrix v-drag="'qkv-v'" :rows="3" :cols="6" variant="value" numbered="top" />

<GrlTokenStack v-drag="'qkv-right-stack'" :count="6" :active="1" variant="output" />

<div v-drag="'qkv-right-caption'" class="text-center text-[#035172] leading-[1.1]">
  <div class="text-[1rem] font-800">Output tokens</div>
  <div class="text-[0.78rem]">[P² x D<sub>model</sub>]</div>
</div>

---
dragPos:
  att-left-title: 20,70,160,54
  att-right-title: 790,64,170,54
  att-left-stack: 104,164,44,218
  att-left-caption: 24,424,180,60
  att-frame: 178,110,710,318
  att-k-label: 220,124,165,30
  att-k: 219,145,170,72
  att-q-label: 220,228,175,30
  att-q: 221,252,170,72
  att-v-label: 221,327,175,30
  att-v: 222,347,170,72
  att-formula: 442,142,292,70
  att-q-small: 430,208,94,146
  att-score: 525,209,182,146
  att-score-text: 558,337,120,74
  att-out-matrix: 526,440,170,72
  att-conn-title: 724,236,170,52
  att-conn: 718,261,160,100
  att-right-stack: 886,174,44,218
  att-right-caption: 790,424,180,60
---

<!-- Attention Scores And Token Connections -->

<div v-drag="'att-left-title'" class="text-center text-[#035172] text-[1.02rem] leading-[1.05]">Input "Tokens"<br>i.e., vectors</div>

<div v-drag="'att-right-title'" class="text-center text-[#035172] text-[1.02rem] leading-[1.05]">Output "Tokens"<br>i.e., vectors</div>

<GrlTokenStack v-drag="'att-left-stack'" :count="6" :active="0" variant="input" />

<div v-drag="'att-left-caption'" class="text-center text-[#035172] leading-[1.1]">
  <div class="text-[1rem] font-800">Input tokens</div>
  <div class="text-[0.78rem]">[P² x D<sub>model</sub>]</div>
</div>

<RoundedFrame v-drag="'att-frame'" />

<div v-drag="'att-k-label'" class="text-[#035172] text-[0.78rem] font-800">Keys K<sup>T</sup> [D<sub>m</sub> x P²]</div>

<GrlTokenMatrix v-drag="'att-k'" :rows="3" :cols="6" variant="key" numbered="top" />

<div v-drag="'att-q-label'" class="text-[#035172] text-[0.78rem] font-800">Queries Q<sup>T</sup> [D<sub>m</sub> x P²]</div>

<GrlTokenMatrix v-drag="'att-q'" :rows="3" :cols="6" variant="query" numbered="top" />

<div v-drag="'att-v-label'" class="text-[#035172] text-[0.78rem] font-800">Values V<sup>T</sup> [D<sub>m</sub> x P²]</div>

<GrlTokenMatrix v-drag="'att-v'" :rows="3" :cols="6" variant="value" numbered="top" />

<div v-drag="'att-formula'" class="text-[#035172] text-[1.08rem] font-800">Attention(Q, K, V): σ ( QK<sup>T</sup> / √D<sub>m</sub> ) V</div>

<GrlTokenMatrix v-drag="'att-q-small'" :rows="6" :cols="3" variant="query" numbered="left" />

<GrlTokenMatrix v-drag="'att-score'" :rows="6" :cols="6" variant="attention" numbered="none" :highlightRow="1" />

<div v-drag="'att-score-text'" class="text-center text-white text-[1rem] leading-[1.05]">attention<br>scores<br>[P² x P²]</div>

<GrlTokenMatrix v-drag="'att-out-matrix'" :rows="3" :cols="6" variant="output" numbered="top" />

<div v-drag="'att-conn-title'" class="text-[#035172] text-[0.7rem] font-800 leading-[1.15]">connection between<br>input/output tokens</div>

<ConnectionDiagram v-drag="'att-conn'" :count="6" />

<GrlTokenStack v-drag="'att-right-stack'" :count="6" :active="0" variant="output" />

<div v-drag="'att-right-caption'" class="text-center text-[#035172] leading-[1.1]">
  <div class="text-[1rem] font-800">Output tokens</div>
  <div class="text-[0.78rem]">[P² x D<sub>model</sub>]</div>
</div>

---
dragPos:
  edit-tensor: 92,175,170,106
  edit-model: 312,166,190,112
  edit-vector: 556,184,170,80
  edit-arrow-a: 256,206,70,34
  edit-arrow-b: 504,206,70,34
  edit-files: 96,340,560,126
---

# Modify The Components

The visible blocks are instances. Their implementation lives in Vue single-file components, so you can change the markup, props, CSS, variants, and defaults.

<TensorBox v-drag="'edit-tensor'" label="Component" shape="props + template" icon="{}" variant="input" caption="components/figures/TensorBox.vue" />

<ArrowLabel v-drag="'edit-arrow-a'" label="uses" />

<ModelBlock v-drag="'edit-model'" title="Vue SFC" subtitle="script, template, style" icon="V" variant="encoder" :chips="['props', 'CSS', 'slots']" />

<ArrowLabel v-drag="'edit-arrow-b'" label="renders" />

<LatentVector v-drag="'edit-vector'" label="Slide Element" :length="8" caption="updated live in dev mode" variant="latent" />

<div v-drag="'edit-files'" class="text-[0.68rem] leading-[1.5] border border-slate-200 bg-slate-50 p-4 rounded">
  <div><strong>Component files:</strong> <code>components/figures/*.vue</code></div>
  <div><strong>Slide aliases:</strong> <code>components/*.vue</code></div>
  <div><strong>This deck:</strong> <code>slides/0-illustration-workbench/slides.md</code></div>
  <div><strong>Drag positions:</strong> stored in each slide's <code>dragPos</code> frontmatter</div>
</div>
