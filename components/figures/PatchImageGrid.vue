<script setup>
const props = defineProps({
  rows: { type: Number, default: 4 },
  cols: { type: Number, default: 4 },
  mode: { type: String, default: 'input' },
  start: { type: Number, default: 1 },
})
</script>

<template>
  <div class="patch-image-grid" :class="`mode-${props.mode}`" :style="{ '--rows': props.rows, '--cols': props.cols }">
    <div
      v-for="index in Math.max(1, props.rows * props.cols)"
      :key="index"
      class="patch-cell"
      :style="{ '--i': index }"
    >
      {{ props.start + index - 1 }}
    </div>
  </div>
</template>

<style scoped>
.patch-image-grid {
  display: inline-grid;
  grid-template-columns: repeat(var(--cols), 1fr);
  grid-template-rows: repeat(var(--rows), 1fr);
  width: 14rem;
  aspect-ratio: 1;
  border: 2px solid #035172;
  background: #ffffff;
  box-shadow: 0 8px 14px rgba(3, 81, 114, .22);
  color: #ffffff;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 800;
}

.patch-cell {
  display: grid;
  place-items: center;
  border: 1px solid rgba(255, 255, 255, .92);
  background:
    linear-gradient(135deg, rgba(255,255,255,.22), rgba(255,255,255,0) 42%),
    radial-gradient(circle at calc((var(--i) * 19%) + 8%) calc((var(--i) * 31%) + 6%), rgba(255,255,255,.68), transparent 16%),
    linear-gradient(calc(var(--i) * 23deg), #04924b, #26c76f 34%, #e8ece1 48%, #047a4f 78%);
  font-size: 1.1rem;
  line-height: 1;
  text-shadow: 0 1px 2px rgba(0, 42, 58, .7);
}

.mode-output .patch-cell {
  border-color: #035172;
  background:
    linear-gradient(135deg, rgba(255,255,255,.22), rgba(255,255,255,0) 42%),
    radial-gradient(circle at calc((var(--i) * 13%) + 11%) calc((var(--i) * 29%) + 9%), #fff36e, transparent 13%),
    linear-gradient(calc(var(--i) * 37deg), #07b976, #00a0a8 22%, #ff39a4 54%, #fa7b67 76%, #35d260);
}
</style>
