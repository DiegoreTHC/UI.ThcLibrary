<template>
  <div>
    Nuxt module playground!
    <ThcButton
      variant="secondary"
      @click="clickFunct"
    >
      Button <i class="fas fam-bong"></i>
    </ThcButton>
  </div>
</template>

<script setup>
const clickFunct = () => {
  console.log("Nepe");
};
</script>
