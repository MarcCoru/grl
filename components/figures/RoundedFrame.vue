<template>
  <div class="rounded-frame">
    <slot />
  </div>
</template>

<style scoped>
.rounded-frame {
  display: inline-block;
  width: 37rem;
  height: 17rem;
  border: 5px solid #035172;
  border-radius: 1.8rem;
  background: rgba(255, 255, 255, .2);
}
</style>
