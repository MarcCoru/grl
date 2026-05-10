---
addons:
  - "../"
defaults:
  layout: bonn-content
layout: bonn-cover
subhead: Lecture 1
home: ../
---

<script setup>
import AppleMatrixRepresentation from '../../components/AppleMatrixRepresentation.vue'
</script>

# Geospatial Representation Learning

<div class="mt-8 text-xl text-gray-600 font-semibold">
Lecture 1
</div>

---
section: opening
sectionTitle: Opening
---

# Let's think about an Apple

### 

<div class="mt-5 grid h-[310px] grid-cols-[550px_minmax(220px,280px)] gap-3 items-stretch justify-start">
  <div class="relative h-[310px] w-[550px] justify-self-start">
    <img v-click="1"
      src="./figures/apple/00-baselayer.svg"
      class="absolute inset-0 h-full w-full object-contain"
      alt="Apple base layer"
    />
    <img v-click="2"
      src="./figures/apple/01-SVG.svg"
      class="absolute inset-0 h-full w-full object-contain"
      alt="Apple SVG representation layer"
    />
    <img v-click="3"
      src="./figures/apple/02-raster.svg"
      class="absolute inset-0 h-full w-full object-contain"
      alt="Apple raster representation layer"
    />
    <img v-click="4"
      src="./figures/apple/03-text.svg"
      class="absolute inset-0 h-full w-full object-contain"
      alt="Apple text representation layer"
    />
    <img v-click="6"
      src="./figures/apple/04-newton.svg"
      class="absolute inset-0 h-full w-full object-contain"
      alt="Apple Newton representation layer"
    />
    <img v-click="7"
      src="./figures/apple/05-Computers.svg"
      class="absolute inset-0 h-full w-full object-contain"
      alt="Apple computers representation layer"
    />
    <img v-click="8"
      src="./figures/apple/06-Religion.svg"
      class="absolute inset-0 h-full w-full object-contain"
      alt="Apple religion representation layer"
    />
    <img v-click="9"
      src="./figures/apple/07-health.svg"
      class="absolute inset-0 h-full w-full object-contain"
      alt="Apple health representation layer"
    />
  </div>

  <div class="flex h-[310px] flex-col gap-3">
    <div class="h-1/2">
      <blockquote v-click="5" class="blockquote2 !m-0 flex h-full items-center text-[1.05rem] leading-snug">
        The same object can be represented in many ways.
        A good representation makes useful structure visible and computation easier.
      </blockquote>
    </div>
    <div class="h-1/2">
      <blockquote v-click="10" class="blockquote3 !m-0 flex h-full items-center text-[1.05rem] leading-snug">
        But representation is not only encoding.<br />
        Representation is also meaning.
      </blockquote>
    </div>
  </div>
</div>

---
section: opening
sectionTitle: Opening
---

# Our Vision is Edge Enhanced

<div class="mt-5 grid grid-cols-[420px_360px] gap-8 items-center justify-center">
  <div>
    <div class="mb-2 text-center text-sm font-bold text-blue-800">
      Retinal cells implement an
      <a href="https://en.wikipedia.org/wiki/Edge_detection" target="_blank" rel="noopener noreferrer">edge filter</a>
      through
      <a href="https://en.wikipedia.org/wiki/Lateral_inhibition" target="_blank" rel="noopener noreferrer">lateral inhibition</a>.
    </div>
    <img
      src="./figures/retina.jpg"
      class="h-[270px] w-full object-contain rounded-xl"
      alt="Retinal cells involved in lateral inhibition"
    />
  </div>

  <div>
    <div class="mb-2 text-center text-sm font-bold text-blue-800">
      Mach Bands - Optical Illusion (Mach, 1865)
    </div>
    <div class="mach-bands-stage mach-bands-stage-compact">
      <div v-click-hide="1" class="mach-band-row">
        <div class="mach-band mach-band-1"><span>222</span></div>
        <div class="mach-band mach-band-2"><span>198</span></div>
        <div class="mach-band mach-band-3"><span>173</span></div>
        <div class="mach-band mach-band-4"><span>148</span></div>
      </div>
      <div v-click="1" class="mach-bands-overlay">
        <div class="mach-band-row mach-band-row-animated">
          <div class="mach-band mach-band-1"><span>222</span></div>
          <div class="mach-band mach-band-2"><span>198</span></div>
          <div class="mach-band mach-band-3"><span>173</span></div>
          <div class="mach-band mach-band-4"><span>148</span></div>
        </div>
      </div>
    </div>
  </div>
</div>

<blockquote v-click="2" class="blockquote1">
Our eyes has built-in edge detectors that inhibit the response from neighboring cells.
</blockquote>

<div class="slide-citation">
  <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC1350218/pdf/jphysiol00969-0168.pdf" target="_blank" rel="noopener noreferrer">
    Shapley, R. M., &amp; Tolhurst, D. J. (1973). Edge detectors in human vision. <em>Journal of Physiology</em>, 229, 165-183.
  </a>
</div>

---
section: opening
sectionTitle: Opening
---

# Human Vision System merges Encoding and Representation

<div class="mt-4 flex justify-center">
  <img
    src="./figures/NIH-vision.svg"
    class="max-h-[400px] max-w-[90%] object-contain rounded-xl"
    alt="NIH visual acuity brain circuits illustration"
  />
</div>

<div class="slide-citation">
  <a href="https://www.nih.gov/news-events/news-releases/nih-researchers-identify-brain-circuits-responsible-visual-acuity" target="_blank" rel="noopener noreferrer">
    Yang, J., et al. (2025). Differential impact of retinal lesions on visual responses of LGN X and Y cells. <em>The Journal of Neuroscience</em>. DOI: 10.1523/JNEUROSCI.0436-25.2025.
  </a>
</div>

--- 
section: opening
sectionTitle: Opening
---

# The Monkey Business Illusion

###

<div class="mt-0 flex justify-center">
  <iframe
    class="h-[330px] w-full max-w-[740px] rounded-xl shadow"
    src="https://www.youtube.com/embed/IGQmdoK_ZfY?rel=0&modestbranding=1"
    title="The Monkey Business Illusion"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen>
  </iframe>
</div>

<div class="slide-citation">
  <a href="https://doi.org/10.1068/i0386" target="_blank" rel="noopener noreferrer">
    Simons, D. J. (2010). Monkeying around with the gorillas in our midst: Familiarity with an inattentional-blindness task does not improve the detection of unexpected events. <em>i-Perception</em>. https://doi.org/10.1068/i0386
  </a>
</div>

---
section: opening
sectionTitle: Opening
---

# Feed-forward Convolutional Neural Networks

<div class="mt-5 flex justify-center">
  <img
    src="./figures/LeNet-5_architecture.svg"
    class="h-[300px] w-full max-w-[860px] object-contain"
    alt="LeNet-5 convolutional neural network architecture"
  />
</div>

<blockquote class="blockquote1">
Early Deep Neural Networks similarly encode low-level representations to extract more high-level meaning in vectors and matrices.
</blockquote>

<div class="slide-citation">
  <a href="http://vision.stanford.edu/cs598_spring07/papers/Lecun98.pdf" target="_blank" rel="noopener noreferrer">
    LeCun, Y., Bottou, L., Bengio, Y., &amp; Haffner, P. (1998). Gradient-based learning applied to document recognition. <em>Proceedings of the IEEE</em>, 86(11), 2278-2324.
  </a>
</div>

---
section: opening
sectionTitle: Opening
---

# Attention: global meaning to local encoding

<div class="mt-5 grid grid-cols-[minmax(0,0.65fr)_minmax(0,0.35fr)] gap-5 items-center">
  <img
    src="./figures/dino-v3.jpg"
    class="h-[320px] w-full object-contain rounded-xl"
    alt="DINOv3 attention mechanism visualization"
  />
  <img
    src="./figures/transformer.svg"
    class="h-[350px] w-full object-contain rounded-xl"
    alt="Transformer architecture diagram"
  />
</div>

<div class="slide-citation">
  <a href="https://arxiv.org/abs/2508.10104" target="_blank" rel="noopener noreferrer">
    Siméoni, O., et al. (2025). DINOv3. <em>arXiv:2508.10104</em>.
  </a>
  <br />
  <a href="https://d2l.ai/chapter_attention-mechanisms-and-transformers/index.html" target="_blank" rel="noopener noreferrer">
    Zhang, A., Lipton, Z. C., Li, M., &amp; Smola, A. J. Dive into Deep Learning: Attention Mechanisms and Transformers.
  </a>
</div>

---
section: opening
sectionTitle: Opening
---

# The representation depends on the Problem

###

<div class="mt-5 grid h-[350px] grid-cols-[550px_minmax(220px,280px)] gap-3 items-stretch justify-start">
  <div class="grid h-[350px] grid-rows-2 gap-3">
    <img
      src="./figures/human-vision.png"
      class="h-full w-full object-contain rounded-xl"
      alt="Human vision illustration"
    />
    <img v-click="2"
      src="./figures/bee-vision.png"
      class="h-full w-full object-contain rounded-xl"
      alt="Bee vision illustration"
    />
  </div>

  <div class="flex h-[350px] flex-col gap-3">
    <div class="h-1/2">
      <blockquote v-click="1" class="blockquote1 !m-0 flex h-full items-center text-[1.05rem] leading-snug">
        A useful representation depends on the problem we are trying to solve.
      </blockquote>
    </div>
    <div class="h-1/2">
      <blockquote v-click="2" class="blockquote2 !m-0 flex h-full items-center text-[1.05rem] leading-snug">
        Bees see ultraviolet patterns that humans miss, because their visual system is tuned to different tasks.
      </blockquote>
    </div>
  </div>
</div>

---
section: opening
sectionTitle: Opening
---

# Choosing Good Representations Matters

## Examples

<div class="mt-8 grid grid-cols-3 gap-5">
  <div class="min-h-[300px] rounded-xl border p-4">
    <h3>Images</h3>
    <AppleMatrixRepresentation :click-index="1" />
  </div>

  <div class="min-h-[300px] rounded-xl border p-4">
    <h3>Math</h3>
    <div class="flex min-h-[238px] flex-col text-center">
      <div class="flex flex-1 flex-col items-center justify-center">
        <div v-click="2" class="rounded border border-gray-200 bg-gray-50 px-3 py-2 font-mono text-sm tracking-wide text-gray-700">
          XLVII + LXXVIII = ?
        </div>
        <div v-click="3" class="mt-5 font-mono text-sm text-blue-800">
          47 + 78 = 125
        </div>
      </div>
    </div>
  </div>

  <div class="min-h-[300px] rounded-xl border p-4">
    <h3>Places</h3>
    <div v-click="4" class="flex min-h-[238px] flex-col items-center text-center">
      <div class="mt-3 text-xs uppercase tracking-wide text-gray-500">
        Coordinates
      </div>
      <div class="mt-1 break-all font-mono text-sm leading-tight text-gray-700">
        50°43′57.73″ N,<br />
        7°06′16.63″ E
      </div>
      <div v-click="5" class="mt-5">
        <div class="text-xs uppercase tracking-wide text-gray-500">
          Place
        </div>
        <div class="mt-1 text-lg font-semibold text-blue-800">
          Hofgarten, Bonn, Germany
        </div>
      </div>
    </div>
  </div>
</div>

---
section: opening
sectionTitle: Opening
---

# Representations of Geospatial Information

## Same city, different maps

<div class="grid grid-cols-3 gap-4 mt-5">
  <img
    src="./figures/mentalmap.jpeg"
    class="w-full h-[220px] object-cover rounded-xl border"
    alt="Mental map of Munich"
  />
  <img v-click
    src="./figures/ubahnmunich.jpg"
    class="w-full h-[220px] object-cover rounded-xl border"
    alt="Munich U-Bahn map"
  />
  <img v-click
    src="./figures/munich.png"
    class="w-full h-[220px] object-cover rounded-xl border"
    alt="Map of Munich"
  />
</div>

<blockquote v-click class="blockquite1">
We need to select or learn a suitable representation for the problem-at-hand.
</blockquote>

---
section: opening
sectionTitle: Opening
---

# Choosing or Learning Representations

<div class="grid grid-cols-2 gap-6 mt-8">

<div v-click="1" class="p-4 rounded-xl border shadow-sm flex min-h-[300px] flex-col">
<h3>Designed representations</h3>

<p class="mt-2 text-sm leading-snug text-gray-600">
We choose structures that make operations easier.
</p>

<div class="flex flex-1 items-center justify-center mt-6">
  <img
    src="./figures/gis.jpg"
    class="w-full max-h-40 object-contain"
    alt="Geodatabase representation"
  />
</div>
</div>

<div v-click="2" class="p-4 rounded-xl border shadow-sm flex min-h-[300px] flex-col">
<h3>Learned representations</h3>

<p class="mt-2 text-sm leading-snug text-gray-600">
We train models to discover useful structure.
</p>

<div class="flex flex-1 items-center justify-center mt-6">
  <img
    src="./figures/neuralgeorepresentation.svg"
    class="w-full max-h-40 object-contain"
    alt="Neural georepresentation"
  />
</div>
</div>

</div>

<blockquote v-click="3" class="blockquote1 text-center">
This course focuses on learning representations. 
</blockquote>

---
section: opening
sectionTitle: Opening
---

# Sections of this Lecture

<div class="grid grid-cols-3 gap-4 mt-8">

<div class="p-4 rounded-xl border box-card box-1">
<h3>Mental representations <span class="box-icon i-carbon:user-profile"></span></h3>
<img
  src="./figures/mentalmap.jpeg"
  class="mt-3 w-full h-[108px] object-cover rounded"
  alt="Mental map illustration"
/>
<div class="box-body">Human memories, intuitions, expectations, and place knowledge built from experience.</div>
</div>

<div class="p-4 rounded-xl border box-card box-2" v-click>
<h3>Geospatial representations <span class="box-icon i-carbon:map"></span></h3>
<img
  src="./figures/gis.jpg"
  class="mt-3 w-full h-[108px] object-contain rounded"
  alt="Geospatial database illustration"
/>
<div class="box-body">Rasters, vectors, polygons, and geodata layers that encode explicit spatial structure.</div>
</div>

<div class="p-4 rounded-xl border box-card box-3" v-click>
<h3>Neural representations <span class="box-icon i-carbon:machine-learning-model"></span></h3>
<img
  src="./figures/neuralgeorepresentation.svg"
  class="mt-3 w-full h-[108px] object-contain rounded"
  alt="Neural geospatial representation illustration"
/>
<div class="box-body">World knowledge stored in AI parameters and activated through learned latent features.</div>
</div>

</div>

<div class="slide-citation">
  <a href="https://www.sueddeutsche.de/muenchen/mental-maps-die-stadt-in-meinem-kopf-1.3087218" target="_blank" rel="noopener noreferrer">
    Die Stadt in meinem Kopf. (2016). <em>Süddeutsche Zeitung</em>.
  </a>
</div>

---
layout: bonn-section
sectionColor: "#00457c"
section: mental-representations
sectionTitle: Mental Representations
---

# Mental Representations

<img src="./figures/mentalmap.jpeg" alt="Mental map illustration" />

<div class="bonn-section-citation">
<a href="https://www.sueddeutsche.de/muenchen/mental-maps-die-stadt-in-meinem-kopf-1.3087218" target="_blank" rel="noopener noreferrer">
Die Stadt in meinem Kopf. (2016). <em>Süddeutsche Zeitung</em>.
</a>
</div>

---
section: mental-representations
sectionTitle: Mental Representations
---

# Task: Think of a place

## Think of a place you visited on vacation.
Not the country or city name first — think of the actual place.
What do you remember?

<div class="relative w-full h-[200px]">
  <img v-click
    src="./brain_representation/00-Base_Layer.svg"
    class="absolute inset-0 w-full h-full object-contain"
    alt="Place representation base sketch"
  />
  <img v-click
    src="./brain_representation/01-Mental_Representations.svg"
    class="absolute inset-0 w-full h-full object-contain"
    alt="Mental representations overlay"
  />
</div>

<blockquote v-click>
We feel mental representations as "intuitions" and "memories" of things/places.
</blockquote>

<div class="slide-citation">
  <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3789138/" target="_blank" rel="noopener noreferrer">
    Preston, A. R., &amp; Eichenbaum, H. (2013). Interplay of hippocampus and prefrontal cortex in memory. <em>Current Biology</em>, 23(17), R764-R773.
  </a>
</div>

---
section: mental-representations
sectionTitle: Mental Representations
---

# Geology: Where can we find this Rock?

<div class="grid grid-cols-[minmax(0,1fr)_220px] gap-8 mt-5 items-center">

<div class="flex justify-center">
  <img
    src="./geoguessr.svg"
    class="w-full h-[340px] object-contain"
    alt="GeoGuessr coordinate reasoning illustration"
  />
</div>

<div class="flex justify-center" v-click>
  <iframe
    class="h-[340px] aspect-[9/16] rounded-xl shadow"
    src="https://www.youtube.com/embed/OV6SYabHM_w?rel=0&modestbranding=1"
    title="GeoGuessr example"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen>
  </iframe>
</div>

</div>


---
section: mental-representations
sectionTitle: Mental Representations
---

# History: When was this city founded?

<div class="grid grid-cols-2 gap-8 mt-2 items-center">

<div class="flex h-full flex-col">
  <img
    src="./figures/palmanova.png"
    class="w-full h-[360px] object-contain rounded-xl"
    alt="Aerial view of Palmanova"
  />
</div>

<div class="space-y-3">

  <div class="space-y-1.5 text-base leading-tight text-gray-700">
    <div class="flex items-center gap-2">
      <span class="inline-flex h-4 w-4 items-center justify-center border border-gray-400 rounded-sm"></span>
      <span>282 CE (Roman/Antique)</span>
    </div>
    <div class="flex items-center gap-2">
      <span class="inline-flex h-4 w-4 items-center justify-center border border-gray-400 rounded-sm"></span>
      <span>1153 CE (Midieval)</span>
    </div>
    <div class="relative flex items-center gap-2">
      <span class="inline-flex h-4 w-4 items-center justify-center border border-gray-400 rounded-sm"></span>
      <span>1593 CE (Renaissance)</span>
      <div v-click class="absolute -inset-x-2 -inset-y-1 flex items-center gap-2 rounded border-l-5 border-yellow-400 bg-yellow-50 px-2 py-1 text-blue-800 font-bold">
        <span class="inline-flex h-4 w-4 items-center justify-center border border-blue-800 rounded-sm text-xs leading-none">✓</span>
        <span>1593 CE (Renaissance)</span>
      </div>
    </div>
    <div class="flex items-center gap-2">
      <span class="inline-flex h-4 w-4 items-center justify-center border border-gray-400 rounded-sm"></span>
      <span>1975 CE (Modern)</span>
    </div>
  </div>

  <div v-click class="rounded-xl border bg-white p-3 shadow">
    <img
      src="./figures/palmanova.svg"
      class="w-full h-[230px] object-contain"
      alt="Illustration connecting visible city form with mental representation and world knowledge"
    />
  </div>

</div>

</div>

---
section: mental-representations
sectionTitle: Mental Representations
---

# Livability: How livable is this neighborhood?

<div class="grid grid-cols-[1.35fr_0.65fr] gap-8 mt-6 items-center">

<div>
  <img
    src="./figures/bonner_talweg.png"
    class="w-full h-[430px] object-contain rounded-xl"
    alt="Street view of Bonner Talweg"
  />
</div>

<div class="space-y-5">

  <div class="space-y-2 text-xl leading-tight text-gray-700">
    <div class="flex items-center gap-3">
      <span class="inline-flex h-5 w-5 items-center justify-center border border-gray-400 rounded-sm"></span>
      <span>simple</span>
    </div>
    <div class="flex items-center gap-3">
      <span class="inline-flex h-5 w-5 items-center justify-center border border-gray-400 rounded-sm"></span>
      <span>middle</span>
    </div>
    <div class="relative flex items-center gap-3">
      <span class="inline-flex h-5 w-5 items-center justify-center border border-gray-400 rounded-sm"></span>
      <span>good</span>
      <div v-click class="absolute -inset-x-3 -inset-y-2 flex items-center gap-3 rounded border-l-5 border-yellow-400 bg-yellow-50 px-3 py-2 text-blue-800 font-bold">
        <span class="inline-flex h-5 w-5 items-center justify-center border border-blue-800 rounded-sm text-sm leading-none">✓</span>
        <span>good</span>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="inline-flex h-5 w-5 items-center justify-center border border-gray-400 rounded-sm"></span>
      <span>very good</span>
    </div>
  </div>

  <blockquote v-click>
    Based on which features in the image, and based on what world knowledge, did you decide?
  </blockquote>

</div>

</div>

---
section: mental-representations
sectionTitle: Mental Representations
---

# Livability: How livable is this neighborhood?

<div class="grid grid-cols-2 gap-8 mt-6 items-center">

<div>
  <img
    src="./figures/1goebenstraße.png"
    class="w-full h-[360px] object-contain rounded-xl"
    alt="Street view of Goebenstrasse 1"
  />
</div>

<div class="space-y-5">

  <div class="space-y-2 text-xl leading-tight text-gray-700">
    <div class="flex items-center gap-3">
      <span class="inline-flex h-5 w-5 items-center justify-center border border-gray-400 rounded-sm"></span>
      <span>simple</span>
    </div>
    <div class="flex items-center gap-3">
      <span class="inline-flex h-5 w-5 items-center justify-center border border-gray-400 rounded-sm"></span>
      <span>middle</span>
    </div>
    <div class="flex items-center gap-3">
      <span class="inline-flex h-5 w-5 items-center justify-center border border-gray-400 rounded-sm"></span>
      <span>good</span>
    </div>
    <div class="relative flex items-center gap-3">
      <span class="inline-flex h-5 w-5 items-center justify-center border border-gray-400 rounded-sm"></span>
      <span>very good</span>
      <div v-click class="absolute -inset-x-3 -inset-y-2 flex items-center gap-3 rounded border-l-5 border-yellow-400 bg-yellow-50 px-3 py-2 text-blue-800 font-bold">
        <span class="inline-flex h-5 w-5 items-center justify-center border border-blue-800 rounded-sm text-sm leading-none">✓</span>
        <span>very good</span>
      </div>
    </div>
  </div>

  <blockquote v-click>
    Based on which features in the image, and based on what world knowledge, did you decide?
  </blockquote>

</div>

</div>

---
section: mental-representations
sectionTitle: Mental Representations
---

# Livability: Qualitative and Quantitative Factors

<div class="grid grid-cols-[0.8fr_1.2fr] gap-8 mt-6 items-start">

<div>

The residential location map has four levels: **simple**, **middle**, **good**, and **very good**.

It takes into account:

- Infrastructure
- Urban green space
- **Streetscape**
- Transport connection
- Appreciation
- Burden
- Centrality

</div>

<div class="self-start">
  <img
    src="./figures/goebenstraße1_karte.png"
    class="w-full h-[390px] object-contain rounded-xl"
    alt="Residential location map for Goebenstrasse 1"
  />
</div>

</div>

<div class="slide-citation">
  <a href="https://gutachterausschuss.bonn.de/produkte/wohnlagen-mietspiegel.php" target="_blank" rel="noopener noreferrer">
    Wohnlagen/Mietspiegel. Gutachterausschuss Bonn 2023.
  </a>
</div>

---
section: mental-representations
sectionTitle: Mental Representations
---

# Biodiversity: Which Agriculural Landscape supports more Diverse Bird Populations?

<div class="grid grid-cols-[1.15fr_0.85fr] gap-8 mt-6 items-start">

<div>
  <img
    src="./figures/engist_fr_ch.png"
    class="w-full h-[370px] object-contain object-top rounded-xl"
    alt="Border region between France and Switzerland near Lake Geneva"
  />
</div>

<div class="space-y-5">

  <div class="space-y-2 text-xl leading-tight text-gray-700">
    <div class="relative flex items-center gap-3">
      <span class="inline-flex h-5 w-5 items-center justify-center border border-gray-400 rounded-sm"></span>
      <span>France</span>
      <div v-click class="absolute -inset-x-3 -inset-y-2 flex items-center gap-3 rounded border-l-5 border-yellow-400 bg-yellow-50 px-3 py-2 text-blue-800 font-bold">
        <span class="inline-flex h-5 w-5 items-center justify-center border border-blue-800 rounded-sm text-sm leading-none">✓</span>
        <span>France</span>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="inline-flex h-5 w-5 items-center justify-center border border-gray-400 rounded-sm"></span>
      <span>Switzerland</span>
    </div>
  </div>

  <blockquote v-click>
    The border region between Switzerland (right) and France (left) at Chavannes-des-Bois, near Lake Geneva. Swiss fields and forests seem very artificial, while French landscapes are uneven and broken up by hedges and smooth forest transitions.
  </blockquote>

</div>

</div>

<div class="slide-citation">
  <a href="https://www.sciencedirect.com/science/article/pii/S0921800923001179" target="_blank" rel="noopener noreferrer">
    Engist, D., Finger, R., Knaus, P., Guélat, J., &amp; Wuepper, D. (2023). Agricultural systems and biodiversity: evidence from European borders and bird populations. <em>Ecological Economics</em>, 209, 107854.
  </a>
</div>

---
section: mental-representations
sectionTitle: Mental Representations
---

# How do we recognize places?

<div class="mt-5 text-2xl text-gray-700">
We infer location from many weak cues.
</div>

<div class="grid grid-cols-3 gap-2 mt-7 text-center">
  <div v-click class="border rounded-xl px-2 py-1.5">
    <div class="text-2xl leading-none">🌿</div>
    <div class="mt-1 text-sm font-bold text-blue-800">vegetation</div>
  </div>
  <div v-click class="border rounded-xl px-2 py-1.5">
    <div class="text-2xl leading-none">🛣️</div>
    <div class="mt-1 text-sm font-bold text-blue-800">road markings</div>
  </div>
  <div v-click class="border rounded-xl px-2 py-1.5">
    <div class="text-2xl leading-none">🏘️</div>
    <div class="mt-1 text-sm font-bold text-blue-800">architecture</div>
  </div>
  <div v-click class="border rounded-xl px-2 py-1.5">
    <div class="text-2xl leading-none">🪧</div>
    <div class="mt-1 text-sm font-bold text-blue-800">signs and language</div>
  </div>
  <div v-click class="border rounded-xl px-2 py-1.5">
    <div class="text-2xl leading-none">⛰️</div>
    <div class="mt-1 text-sm font-bold text-blue-800">terrain</div>
  </div>
  <div v-click class="border rounded-xl px-2 py-1.5">
    <div class="text-2xl leading-none">🌦️</div>
    <div class="mt-1 text-sm font-bold text-blue-800">climate</div>
  </div>
  <div v-click class="border rounded-xl px-2 py-1.5">
    <div class="text-2xl leading-none">🚉</div>
    <div class="mt-1 text-sm font-bold text-blue-800">infrastructure</div>
  </div>
</div>

<blockquote v-click>
We do not recognize places from one signal. We combine many imperfect signals into a coherent spatial intuition.
</blockquote>

---
section: mental-representations
sectionTitle: Mental Representations
---

# A place is more than a coordinate

<div class="grid grid-cols-2 gap-8 mt-8">

<div class="border rounded-xl p-6">

## Coordinate

<div class="mt-5 text-2xl font-bold text-blue-800">50.7374° N, 7.0982° E</div>

<div class="grid grid-cols-3 gap-3 mt-8 text-center text-gray-700">
  <div class="border rounded-xl p-3">reference</div>
  <div class="border rounded-xl p-3">position</div>
  <div class="border rounded-xl p-3">index</div>
</div>

</div>

<div class="border rounded-xl p-6">

## Place

<div class="grid grid-cols-2 gap-3 mt-5 text-center">
  <div class="border rounded-xl p-3">home</div>
  <div class="border rounded-xl p-3">routes</div>
  <div class="border rounded-xl p-3">landmarks</div>
  <div class="border rounded-xl p-3">memories</div>
  <div class="border rounded-xl p-3">context</div>
  <div class="border rounded-xl p-3">meaning</div>
</div>

</div>

</div>

<blockquote>
A coordinate tells us where something is. A representation tells us what that place means.
</blockquote>

---
section: mental-representations
sectionTitle: Mental Representations
---

# Takeaways Mental Representations

<div class="grid grid-cols-3 gap-4 mt-8">

<div class="p-4 rounded-xl border box-card box-1">
<h3>Mental representations <span class="box-icon i-carbon:user-profile"></span></h3>
<img
  src="./figures/mentalmap.jpeg"
  class="mt-3 w-full h-[108px] object-cover rounded"
  alt="Mental map illustration"
/>
<div class="box-body">Human memories, intuitions, expectations, and place knowledge built from experience.</div>
</div>

</div>

<div class="slide-citation">
  <a href="https://www.sueddeutsche.de/muenchen/mental-maps-die-stadt-in-meinem-kopf-1.3087218" target="_blank" rel="noopener noreferrer">
    Die Stadt in meinem Kopf. (2016). <em>Süddeutsche Zeitung</em>.
  </a>
</div>

---
section: geospatial-representations
sectionTitle: Geospatial Representations
---

# Geospatial representations

<div class="grid grid-cols-3 gap-4 mt-8">

<div class="p-4 rounded-xl border box-card box-1">
<h3>Mental representations <span class="box-icon i-carbon:user-profile"></span></h3>
<img
  src="./figures/mentalmap.jpeg"
  class="mt-3 w-full h-[108px] object-cover rounded"
  alt="Mental map illustration"
/>
<div class="box-body">Human memories, intuitions, expectations, and place knowledge built from experience.</div>
</div>

<div class="p-4 rounded-xl border box-card box-2">
<h3>Geospatial databases <span class="box-icon i-carbon:map"></span></h3>
<img
  src="./figures/gis.jpg"
  class="mt-3 w-full h-[108px] object-contain rounded"
  alt="Geospatial database illustration"
/>
<div class="box-body">Rasters, vectors, polygons, and geodata layers that encode explicit spatial structure.</div>
</div>

</div>

<div class="slide-citation">
  <a href="https://www.sueddeutsche.de/muenchen/mental-maps-die-stadt-in-meinem-kopf-1.3087218" target="_blank" rel="noopener noreferrer">
    Die Stadt in meinem Kopf. (2016). <em>Süddeutsche Zeitung</em>.
  </a>
</div>

---
layout: bonn-cover
subhead: Practical 1
home: ../
---

# Exploring Geospatial Representations

## Geospatial Representation Learning
