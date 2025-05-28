<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    loading?: boolean;
    mobile?: boolean;
    socials?: any;
    disclaimer?: string;
  }>(),
  {
    loading: true,
    socials: [],
    disclaimer: ""
  }
);
</script>

<template>
  <footer class="thc-footer">
    <div class="thc-footer-wrapper">
      <ThcLogo
        name="Smokers | Smoke & Vape Shop"
        class="thc-footer-logo"
        variant="negative"
        :mode="mobile ? 'full' : 'inline'"
        :loading="loading"
      />
      <nav class="thc-footer-socials">
        <ThcSocials
          :socials="socials"
          :loading="loading"
          class="thc-footer-socials-list"
        />
        <ThcSkeleton
          type="text"
          width="22em"
          height="14px"
          class="thc-disclaimer"
          v-if="loading"
        />
        <p
          class="thc-disclaimer"
          v-else
        >
          Smokers.mx | Todos los derechos reservados {{ new Date().getFullYear() }}
        </p>
      </nav>
    </div>
    <ThcSkeleton
      type="text"
      width="60em"
      height="16px"
      v-if="loading"
      class="thc-legals--loading"
    />
    <p
      class="thc-legals"
      v-else
    >
      {{ disclaimer }}
    </p>
    <div class="thc-footer-brand">
      <span v-if="!loading">
        Made it High <span class="fas fa-cannabis" /> by <strong>THC Code</strong> | A Frontend
        society
      </span>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@import "./Footer.scss";
</style>
