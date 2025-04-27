<template>
  <div
    class="ui-sidepanel"
    :class="{ open }"
  >
    <div class="panel-content">
      <slot />
    </div>
    <div
      class="backdrop"
      @click="emit('close')"
    ></div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ open: boolean }>();
const emit = defineEmits(["close"]);
</script>

<style lang="scss" scoped>
.ui-sidepanel {
  position: fixed;
  top: 0;
  right: -100%;
  width: 300px;
  height: 100%;
  background: white;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
  transition: right 0.3s ease;
  z-index: 100;

  &.open {
    right: 0;
  }

  .backdrop {
    position: fixed;
    top: 0;
    left: 0;
    right: 300px;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
  }

  .panel-content {
    padding: 1em;
  }
}
</style>
