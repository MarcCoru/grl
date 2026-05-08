<script setup>
const props = defineProps({
  label: { type: String, default: 'Vision\nTransformer\nModel' },
})
</script>

<template>
  <div class="transformer-block">
    {{ props.label }}
  </div>
</template>

<style scoped>
.transformer-block {
  display: inline-grid;
  place-items: center;
  width: 12.5rem;
  height: 15.2rem;
  border-radius: 1.05rem;
  background: #075aa0;
  color: #ffffff;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.2rem;
  font-weight: 800;
  line-height: 1.18;
  text-align: center;
  white-space: pre-line;
}
</style>
