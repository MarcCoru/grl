<script setup>
const props = defineProps({
  label: { type: String, default: 'block' },
  caption: { type: String, default: '' },
  variant: { type: String, default: 'green' },
  direction: { type: String, default: 'right' },
})
</script>

<template>
  <div class="trapezoid-block" :class="[`variant-${props.variant}`, `direction-${props.direction}`]">
    <div v-if="props.caption" class="caption">{{ props.caption }}</div>
    <div class="label">{{ props.label }}</div>
  </div>
</template>

<style scoped>
.trapezoid-block {
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  width: 12rem;
  height: 5.6rem;
  padding: .8rem 1.5rem;
  clip-path: polygon(0 0, 100% 20%, 100% 80%, 0 100%);
  color: #035172;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
}

.direction-left {
  clip-path: polygon(0 20%, 100% 0, 100% 100%, 0 80%);
}

.variant-green {
  background: #d7f2d0;
}

.variant-blue {
  background: #aee3f8;
}

.caption {
  font-size: .82rem;
  line-height: 1.1;
}

.label {
  font-size: 1.35rem;
  font-weight: 500;
  line-height: 1.05;
  white-space: pre-line;
}
</style>
