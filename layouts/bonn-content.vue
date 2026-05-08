<script setup lang="ts">
import logoUrl from '../assets/uni-bonn-logo.png'
import BonnSectionNav from '../components/BonnSectionNav.vue'
</script>

<template>
  <div class="slidev-layout bonn-layout bonn-content-layout">
    <main class="bonn-content">
      <slot />
    </main>
    <BonnSectionNav />
    <img class="bonn-logo" :src="logoUrl" alt="University of Bonn" />
  </div>
</template>
