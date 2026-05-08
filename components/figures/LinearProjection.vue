<script setup>
const props = defineProps({
  label: { type: String, default: 'Linear W' },
  variant: { type: String, default: 'key' },
})
</script>

<template>
  <div class="linear-projection" :class="`variant-${props.variant}`">
    <span class="stub" />
    <span class="box">{{ props.label }}</span>
    <span class="arrow" />
  </div>
</template>

<style scoped>
.linear-projection {
  display: inline-flex;
  align-items: center;
  color: #035172;
  font-family: Arial, Helvetica, sans-serif;
}

.stub {
  width: 1rem;
  height: 1rem;
  border: 2px solid currentColor;
  border-right: 0;
  background: var(--projection-color);
}

.box {
  min-width: 8.6rem;
  padding: .55rem .9rem;
  border: 2px solid currentColor;
  border-radius: .45rem;
  background: var(--projection-color);
  color: #ffffff;
  font-size: 1.15rem;
  font-weight: 500;
  line-height: 1;
  text-align: center;
}

.arrow {
  width: 1.9rem;
  height: 1.9rem;
  margin-left: -.05rem;
  clip-path: polygon(0 25%, 62% 25%, 62% 0, 100% 50%, 62% 100%, 62% 75%, 0 75%);
  background: var(--projection-color);
  border: 2px solid currentColor;
}

.variant-key {
  --projection-color: #5ec8ec;
}

.variant-query {
  --projection-color: #a9e5aa;
}

.variant-value {
  --projection-color: #ffc891;
}
</style>
