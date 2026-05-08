<script setup>
const props = defineProps({
  count: { type: Number, default: 6 },
  active: { type: Number, default: 1 },
  variant: { type: String, default: 'input' },
  direction: { type: String, default: 'vertical' },
})
</script>

<template>
  <div class="token-stack-list" :class="[`variant-${props.variant}`, `direction-${props.direction}`]">
    <div
      v-for="index in Math.max(1, props.count)"
      :key="index"
      class="token-stack"
      :class="{ active: index === props.active }"
    >
      <span class="shadow-card shadow-one" />
      <span class="shadow-card shadow-two" />
      <span class="token-card">{{ index }}</span>
    </div>
  </div>
</template>

<style scoped>
.token-stack-list {
  display: inline-flex;
  gap: .48rem;
  color: #ffffff;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 800;
}

.direction-vertical {
  flex-direction: column;
}

.direction-horizontal {
  flex-direction: row;
}

.token-stack {
  position: relative;
  width: 2.3rem;
  height: 2.3rem;
}

.shadow-card,
.token-card {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  border: 2px solid #035172;
  border-radius: .34rem;
  font-size: 1rem;
  line-height: 1;
}

.shadow-one {
  transform: translate(.42rem, -.42rem);
  opacity: .86;
}

.shadow-two {
  transform: translate(.22rem, -.22rem);
  opacity: .92;
}

.token-card {
  background: #ff7900;
}

.shadow-card {
  background: #ff8f22;
}

.variant-input .token-stack.active .token-card,
.variant-input .token-stack.active .shadow-card {
  background: #2eb82e;
}

.variant-output .token-card,
.variant-output .shadow-card {
  background: #5ec8ec;
}

.variant-output .token-stack.active .token-card,
.variant-output .token-stack.active .shadow-card {
  background: #5ec8ec;
}
</style>
