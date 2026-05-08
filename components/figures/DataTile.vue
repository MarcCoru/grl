<script setup>
const props = defineProps({
  title: { type: String, default: 'Data' },
  subtitle: { type: String, default: '' },
  icon: { type: String, default: '🗂️' },
  badge: { type: String, default: '' },
})
</script>

<template>
  <div class="data-tile">
    <div class="top-row">
      <span class="icon">{{ props.icon }}</span>
      <span v-if="props.badge" class="badge">{{ props.badge }}</span>
    </div>
    <div class="title">{{ props.title }}</div>
    <div v-if="props.subtitle" class="subtitle">{{ props.subtitle }}</div>
  </div>
</template>

<style scoped>
.data-tile {
  display: inline-flex;
  flex-direction: column;
  gap: .28rem;
  min-width: 7.6rem;
  max-width: 13rem;
  padding: .66rem .74rem;
  border: 1px solid color-mix(in srgb, currentColor 16%, transparent);
  border-radius: .58rem;
  background: color-mix(in srgb, currentColor 4%, transparent);
  box-shadow: 0 8px 18px color-mix(in srgb, currentColor 8%, transparent);
  color: inherit;
}

.top-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: .5rem;
}

.icon {
  font-size: 1.25rem;
  line-height: 1;
}

.badge {
  max-width: 6rem;
  overflow: hidden;
  padding: .14rem .34rem;
  border-radius: 999px;
  background: color-mix(in srgb, currentColor 8%, transparent);
  color: color-mix(in srgb, currentColor 70%, transparent);
  font-size: .48rem;
  font-weight: 800;
  line-height: 1;
  text-overflow: ellipsis;
  text-transform: uppercase;
  white-space: nowrap;
}

.title {
  font-size: .78rem;
  font-weight: 800;
  line-height: 1.15;
}

.subtitle {
  color: color-mix(in srgb, currentColor 66%, transparent);
  font-size: .58rem;
  line-height: 1.22;
}
</style>

