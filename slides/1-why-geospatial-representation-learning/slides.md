---
addons:
  - "../"
defaults:
  layout: bonn-content
layout: bonn-cover
subhead: Lecture 1
home: ../
---

# Geospatial Representation Learning

## Making AI location-aware

<div class="mt-8 text-xl text-gray-600 font-semibold">
Lecture 1 — Why do we need a new field?
</div>

<!--
Open by framing the course as a bridge: human place intuition, formal GIS, and modern AI representations.
-->

---

# Representations of Geospatial Information

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
<h3>Geospatial databases <span class="box-icon i-carbon:map"></span></h3>
<img
  src="./figures/geodatabase.svg"
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

<div class="grid grid-cols-2 gap-8 mt-6 items-center">

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
  src="./figures/geodatabase.svg"
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
layout: bonn-section
sectionColor: "#f2c300"
section: geospatial-data-representations
sectionTitle: Geospatial Data Representations
---

# Geospatial Data Representations

<img class="bonn-section-image-sm" src="./figures/gis.jpg" alt="Geospatial database illustration" />

<div class="bonn-section-citation">
<a href="https://saylordotorg.github.io/text_essentials-of-geographic-information-systems/s05-03-geographic-information-systems.html" target="_blank" rel="noopener noreferrer">
Campbell &amp; Shin (2011), Figure 1.8.
</a>
</div>

---

# Coordinates and Location

<blockquote>
How many coordinates do we need to uniquely define a spatio-temporal location?
</blockquote>

---

# Cartesian Coordinates

<div class="grid grid-cols-2 gap-8 mt-6 items-center">

<div>
  <div class="text-2xl text-gray-700">
  A location can be represented by three orthogonal coordinates:
  </div>

  $$
  \mathbf{p} = (x, y, z)
  $$

  $$
  x, y, z \in \mathbb{R}
  $$
</div>

<div class="flex justify-center">
  <img
    src="./figures/cartesian.png"
    class="w-full h-[360px] object-contain rounded-xl"
    alt="Cartesian coordinate system illustration"
  />
</div>

</div>

---

# Spherical Coordinates

<div class="grid grid-cols-2 gap-8 mt-6 items-center">

<div>

<div class="grid grid-cols-2 gap-5">

<div>
<div class="text-lg font-bold text-blue-800">Spherical to Cartesian</div>

$$
x = r \cos\varphi \cos\lambda
$$

$$
y = r \cos\varphi \sin\lambda
$$

$$
z = r \sin\varphi
$$
</div>

<div>
<div class="text-lg font-bold text-blue-800">Cartesian to spherical</div>

$$
r = \sqrt{x^2 + y^2 + z^2}
$$

$$
\lambda = \operatorname{atan2}(y, x)
$$

$$
\varphi = \arcsin\left(\frac{z}{r}\right)
$$
</div>

</div>

<div class="grid grid-cols-3 gap-x-6 mt-5 text-gray-700">
  <div><span class="font-serif italic">λ</span> = longitude</div>
  <div><span class="font-serif italic">φ</span> = latitude</div>
  <div><span class="font-serif italic">r</span> = constant Earth radius</div>
</div>

</div>

<div class="flex justify-center">
  <img
    src="./figures/cartesian_sppherical.png"
    class="w-full h-[360px] object-contain rounded-xl"
    alt="Cartesian and spherical coordinate system illustration"
  />
</div>

</div>

---

# Ellipsoidal Coordinates

<div class="grid grid-cols-2 gap-8 mt-6 items-center">

<div>
<div class="text-lg font-bold text-blue-800">Geodetic to Cartesian</div>

$$
\begin{aligned}
x &= (N(\varphi) + h)\cos\varphi\cos\lambda \\
y &= (N(\varphi) + h)\cos\varphi\sin\lambda \\
z &= \left((1-e^2)N(\varphi) + h\right)\sin\varphi
\end{aligned}
$$

$$
\begin{aligned}
N(\varphi) &= \frac{a}{\sqrt{1-e^2\sin^2\varphi}} \\
e^2 &= \frac{a^2-b^2}{a^2}
\end{aligned}
$$

<div class="text-lg font-bold text-blue-800">Cartesian to Geodetic</div>

<div class="mt-4 text-gray-700">
The inverse is usually computed iteratively. See
<a href="https://en.wikipedia.org/wiki/Geographic_coordinate_conversion#From_ECEF_to_geodetic_coordinates" target="_blank" rel="noopener noreferrer">
Wikipedia
</a>.
</div>

</div>

<div class="flex justify-center">
  <img
    src="./figures/ellipsoidyz.png"
    class="w-full h-[360px] object-contain rounded-xl"
    alt="Ellipsoidal Earth model"
  />
</div>

</div>

--- 

# World Geodetic System 1984 (WGS 84)

<div class="grid grid-cols-2 gap-8 mt-6 items-start">

<div>

<div class="mt-2 text-2xl text-gray-700">
WGS 84 is the global reference system used by GPS and most web mapping workflows.
</div>

<img
    src="./figures/WGS84_mean_Earth_radius.svg"
    class="w-full h-[200px] object-contain rounded-xl"
    alt="WGS 84 mean Earth radius illustration"
  />

</div>

<div class="w-full flex items-start justify-center">
  <img
    src="./figures/Latitude_and_Longitude_of_the_Earth.svg"
    class="w-full h-[420px] object-contain object-top rounded-xl"
    alt="Latitude and longitude of the Earth"
  />
</div>

</div>



---

# Cylindrical Map Projections and UTM

<div class="grid grid-cols-[0.9fr_1.1fr] gap-6 mt-6 items-stretch">

<div class="flex min-h-[360px] flex-col">

### Cylindrical projections

A cylinder touches or cuts the globe along a line or lines. The classic case is a cylinder around the equator.

<div class="mt-3 h-[190px] flex items-center justify-center">
  <img
    src="./figures/Central_cylindrical_light_projection.svg"
    class="w-full h-[150px] object-contain"
    alt="Central cylindrical projection illustration"
  />
</div>

<blockquote style="margin-top: auto;">
Cylindrical projections minimize distortion along their standard line(s).
</blockquote>


</div>

<div class="flex min-h-[360px] flex-col">

### Universal Transverse Mercator (UTM)


The Universal Transverse Mercator system rotates this idea: each zone uses a transverse cylinder around a local central meridian.

<div class="grid grid-cols-[0.75fr_1.25fr] gap-4 items-center">
  <div class="h-[190px] flex items-center justify-center">
  <img
    src="./figures/Utmzylinderrp.jpg"
    class="w-full h-[140px] object-contain rounded-xl"
    alt="UTM transverse cylinder projection illustration"
  />
  </div>

  <div class="h-[190px] flex items-center justify-center">
  <img
    src="./figures/Utm-zones.jpg"
    class="w-full h-[190px] object-contain rounded-xl"
    alt="UTM zones map"
  />
  </div>

</div>

<blockquote style="margin-top: auto;">
UTM turns longitude/latitude into local metric coordinates: easting and northing.
</blockquote>

</div>



</div>

---

# Time

<div class="mt-6 flex justify-center">
  <img
    src="./figures/Latitude_and_Longitude_of_the_Earth.svg"
    class="w-full h-[330px] object-contain"
    alt="Latitude and longitude of the Earth"
  />
</div>

---
layout: bonn-cover
subhead: Practical 1
home: ../
---

# Exploring Geospatial Representations

## Geospatial Representation Learning
