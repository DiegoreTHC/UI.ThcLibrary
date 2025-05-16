<template>
  <aside
    class="thc-sidebar"
    v-if="open"
  >
    <nav class="thc-mobile-nav">
      <ThcTitle
        title="Síguenos en:"
        :highlightWords="1"
        variant="primary"
        type="h4"
      />
      <div class="thc-mobile-socials">
        <ThcSocials :socials="socialMedia" />
      </div>
    </nav>
    <nav class="thc-mobile-nav">
      <ThcTitle
        title="Categorías"
        variant="primary"
        :highlightWords="0"
        type="h4"
      />
      <div class="thc-mobile-categories">
        <ThcButton
          v-for="link in categories"
          :key="link"
          variant="outline"
          :text="link?.name"
        />
      </div>
    </nav>
    <nav class="thc-mobile-nav">
      <ThcTitle
        title="Dejamos la mejor IMPRESIÓN"
        variant="primary"
        type="h4"
        :highlightWords="1"
        subtitle="Ponte con las mejores marcas"
        class="thc-mobile-title-half"
      />
      <div class="thc-mobile-brands">
        <NuxtLink
          v-for="brand in navigation[1]?.subLinks"
          class="thc-brands-link"
          :to="brand?.link"
          target="_blank"
          :key="brand.name"
        >
          <ThcImage
            class="thc-brands-image"
            :imgSrc="brand.media.sizes"
            :alt="brand.media.alt"
          />
        </NuxtLink>
      </div>
    </nav>
    <nav class="thc-mobile-nav">
      <div class="thc-mobile-links">
        <ThcNavLink
          v-for="item in navigationLinks"
          class="thc-mobile-link"
          :key="item"
          :text="item?.link"
          :to="item?.to"
          :icon="item.icon"
          arrow
        />
      </div>
    </nav>
  </aside>
</template>

<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    open: boolean;
    navigation: any;
    categories: any;
    socialMedia: any;
  }>(),
  {
    open: false
  }
);

const navigationLinks = computed(() => props.navigation.slice(-3));
</script>

<style lang="scss" scoped>
@import "./ThcMobileSidebar.scss";
</style>
