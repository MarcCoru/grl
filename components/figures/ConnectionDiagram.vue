<script setup>
const props = defineProps({
  count: { type: Number, default: 6 },
})
</script>

<template>
  <svg class="connection-diagram" viewBox="0 0 220 120" aria-hidden="true">
    <g class="links">
      <line
        v-for="index in Math.max(1, props.count)"
        :key="index"
        x1="40"
        y1="18"
        x2="180"
        :y2="18 + (index - 1) * 16"
      />
    </g>
    <g class="tokens input">
      <rect v-for="index in Math.max(1, props.count)" :key="index" x="22" :y="8 + (index - 1) * 16" width="24" height="14" rx="2" />
      <text v-for="index in Math.max(1, props.count)" :key="`in-${index}`" x="34" :y="19 + (index - 1) * 16">{{ index }}</text>
    </g>
    <g class="tokens output">
      <rect v-for="index in Math.max(1, props.count)" :key="index" x="174" :y="8 + (index - 1) * 16" width="24" height="14" rx="2" />
      <text v-for="index in Math.max(1, props.count)" :key="`out-${index}`" x="186" :y="19 + (index - 1) * 16">{{ index }}</text>
    </g>
    <text class="caption" x="20" y="112">input tokens</text>
    <text class="caption" x="160" y="112">output tokens</text>
  </svg>
</template>

<style scoped>
.connection-diagram {
  display: inline-block;
  width: 11rem;
  height: auto;
  overflow: visible;
  font-family: Arial, Helvetica, sans-serif;
}

.links line {
  stroke: #ff7378;
  stroke-width: 1.5;
}

.tokens rect {
  stroke: #035172;
  stroke-width: 1.5;
}

.tokens.input rect {
  fill: #ff7900;
}

.tokens.output rect {
  fill: #5ec8ec;
}

.tokens text {
  fill: #ffffff;
  font-size: 13px;
  font-weight: 800;
  text-anchor: middle;
}

.caption {
  fill: #035172;
  font-size: 14px;
}
</style>
