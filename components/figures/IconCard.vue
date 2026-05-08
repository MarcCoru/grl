<script setup>
const props = defineProps({
  icon: { type: String, default: '✨' },
  title: { type: String, default: 'Concept' },
  caption: { type: String, default: '' },
  compact: { type: Boolean, default: false },
})
</script>

<template>
  <div class="icon-card" :class="{ compact: props.compact }">
    <div class="icon">{{ props.icon }}</div>
    <div class="content">
      <div class="title">{{ props.title }}</div>
      <div v-if="props.caption" class="caption">{{ props.caption }}</div>
    </div>
  </div>
</template>

<style scoped>
.icon-card {
  display: inline-flex;
  align-items: center;
  gap: .62rem;
  min-width: 8.2rem;
  max-width: 15rem;
  padding: .72rem .82rem;
  border: 1px solid color-mix(in srgb, currentColor 16%, transparent);
  border-radius: .62rem;
  background: color-mix(in srgb, currentColor 4%, transparent);
  box-shadow: 0 8px 18px color-mix(in srgb, currentColor 8%, transparent);
  color: inherit;
}

.compact {
  gap: .42rem;
  min-width: 6.6rem;
  padding: .48rem .6rem;
}

.icon {
  font-size: 1.35rem;
  line-height: 1;
}

.title {
  font-size: .78rem;
  font-weight: 800;
  line-height: 1.15;
}

.caption {
  margin-top: .16rem;
  color: color-mix(in srgb, currentColor 66%, transparent);
  font-size: .58rem;
  line-height: 1.25;
}
</style>

