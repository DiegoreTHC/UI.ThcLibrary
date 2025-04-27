<template>
  <div class="ui-dropdown">
    <button @click="toggle">{{ selected || label }}</button>
    <ul v-if="isOpen">
      <li
        v-for="item in items"
        :key="item"
        @click="select(item)"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

defineProps<{ items: string[]; label: string }>();
const emit = defineEmits(["select"]);

const isOpen = ref(false);
const selected = ref<string | null>(null);

function toggle() {
  isOpen.value = !isOpen.value;
}

function select(item: string) {
  selected.value = item;
  isOpen.value = false;
  emit("select", item);
}
</script>

<style lang="scss" scoped>
.ui-dropdown {
  position: relative;

  button {
    background: $secondary-color;
    padding: 0.5em;
    border: 1px solid #ccc;
    border-radius: $border-radius;
  }

  ul {
    position: absolute;
    background: white;
    list-style: none;
    margin: 0;
    padding: 0.5em;
    border: 1px solid #ddd;
    z-index: 10;

    li {
      padding: 0.25em 0.5em;
      cursor: pointer;

      &:hover {
        background: $secondary-color;
      }
    }
  }
}
</style>
