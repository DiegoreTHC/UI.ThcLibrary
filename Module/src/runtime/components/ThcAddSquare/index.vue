<script lang="ts" setup>
const props = defineProps<{
  add?: {
    id: string;
    title: string;
    campaign: string;
    subtitle: string;
    media: string;
  };
}>();
const emit = defineEmits(["click"]);
</script>

<template>
  <div
    class="thc-add thc-add-square"
    :style="{
      backgroundImage: `url('${add.media}')`
    }"
    :id="add.id"
    :data-name="add.title"
    @click="emit('click', add.campaign)"
  />
</template>

<style lang="scss" scoped>
@use "./ThcAddSquare.scss" as *;
</style>
