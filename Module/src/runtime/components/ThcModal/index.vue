<script lang="ts" setup>
import { ref, watch } from "vue";

const props = withDefaults(
  defineProps<{
    show: boolean;
    title?: string;
  }>(),
  {
    show: false
  }
);

const showModal = ref(props.show);

watch(
  () => props.show,
  (newValue: any) => {
    showModal.value = newValue;
  }
);
</script>

<template>
  <div
    class="thc-modal"
    v-show="show"
  >
    <div class="thc-modal-wrap">
      <header class="thc-modal-header">
        <ThcTitle
          type="h2"
          :highlightWords="1"
          :title="title"
        />
        <ThcButton
          class="thc-modal-close"
          type="button"
          variant="icon"
          icon="fas fa-xmark"
          iconButton
          @click="$emit('hide')"
        />
      </header>
      <div class="thc-modal-content">
        <slot />
      </div>
    </div>
    <div
      class="thc-modal-overlay"
      @click="$emit('hide')"
    ></div>
  </div>
</template>

<style lang="scss" scoped>
@use "./ThcModal.scss" as *;
</style>
