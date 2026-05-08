<script setup>
const props = defineProps({
  rows: { type: Number, default: 3 },
  cols: { type: Number, default: 6 },
  variant: { type: String, default: 'key' },
  numbered: { type: String, default: 'top' },
  highlightRow: { type: Number, default: 0 },
  highlightCol: { type: Number, default: 0 },
})

function cellLabel(index) {
  const col = ((index - 1) % props.cols) + 1
  const row = Math.floor((index - 1) / props.cols) + 1

  if (props.numbered === 'top' && row === 1)
    return col
  if (props.numbered === 'left' && col === 1)
    return row
  if (props.numbered === 'all')
    return index
  return ''
}
</script>

<template>
  <div
    class="token-matrix"
    :class="[`variant-${props.variant}`]"
    :style="{ '--rows': props.rows, '--cols': props.cols }"
  >
    <div
      v-for="index in Math.max(1, props.rows * props.cols)"
      :key="index"
      class="matrix-cell"
      :class="{
        'is-row-highlight': props.highlightRow && Math.floor((index - 1) / props.cols) + 1 === props.highlightRow,
        'is-col-highlight': props.highlightCol && ((index - 1) % props.cols) + 1 === props.highlightCol,
      }"
    >
      {{ cellLabel(index) }}
    </div>
  </div>
</template>

<style scoped>
.token-matrix {
  display: inline-grid;
  grid-template-columns: repeat(var(--cols), 1fr);
  grid-template-rows: repeat(var(--rows), 1fr);
  width: 9.2rem;
  aspect-ratio: calc(var(--cols) / var(--rows));
  color: #ffffff;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 800;
}

.matrix-cell {
  display: grid;
  place-items: center;
  min-width: 0;
  min-height: 0;
  border: 1.5px solid #035172;
  border-radius: .18rem;
  font-size: .86rem;
  line-height: 1;
}

.variant-key .matrix-cell {
  background: #b9dcf0;
}

.variant-query .matrix-cell {
  background: #a9e5aa;
}

.variant-value .matrix-cell {
  background: #ffc891;
}

.variant-input .matrix-cell {
  background: #ff7900;
}

.variant-input .matrix-cell:nth-child(-n + 3) {
  background: #2eb82e;
}

.variant-output .matrix-cell {
  background: #b9dcf0;
}

.variant-attention .matrix-cell {
  background: #fb7378;
}

.variant-attention .matrix-cell:nth-child(7n + 1),
.variant-attention .matrix-cell:nth-child(8),
.variant-attention .matrix-cell:nth-child(15),
.variant-attention .matrix-cell:nth-child(22),
.variant-attention .matrix-cell:nth-child(29),
.variant-attention .matrix-cell:nth-child(36) {
  background: #ff0d0d;
}

.is-row-highlight,
.is-col-highlight {
  box-shadow: inset 0 0 0 3px #035172;
}
</style>
