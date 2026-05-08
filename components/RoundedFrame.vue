<script setup>
import RoundedFrame from './figures/RoundedFrame.vue'
</script>

<template>
  <RoundedFrame v-bind="$attrs">
    <slot />
  </RoundedFrame>
</template>

