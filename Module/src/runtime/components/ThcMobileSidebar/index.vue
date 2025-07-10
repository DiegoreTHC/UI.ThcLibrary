<script lang="ts" setup>
import { computed, onMounted, onUnmounted, ref } from "vue";

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

const emit = defineEmits(["categoryClick", "close"]);

const navigationLinks = computed(() => props.navigation.slice(-3));

function formatName(name: string): string {
  return name
    .split(/[\s-_]+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

const goToCategory = (link: any) => {
  emit("categoryClick", link);
};

const sidebarRef = ref<HTMLElement | null>(null);

const handleClickOutside = (event: MouseEvent) => {
  if (sidebarRef.value && !sidebarRef.value.contains(event.target as Node)) {
    emit("close");
  }
};

onMounted(() => {
  document.addEventListener("mousedown", handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener("mousedown", handleClickOutside);
});
</script>

<template>
  <transition name="thc-slide">
    <aside
      :class="['thc-sidebar', { 'thc-sidebar--open': open }]"
      ref="sidebarRef"
      v-show="open"
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
            :text="formatName(link['category-name'])"
            @click="
              () => {
                goToCategory(link);
                emit('close');
              }
            "
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
            :to="`/brands/${brand?.slug}`"
            target="_blank"
            :key="brand.slug"
            @click.native="emit('close')"
            :loading="false"
          >
            <ThcImage
              class="thc-brands-image"
              :imgSrc="brand.media.sizes"
              :alt="brand.media.alt"
            />
          </NuxtLink>
        </div>
      </nav>
      <nav class="thc-mobile-nav thc-mobile-nav--links">
        <div class="thc-mobile-links">
          <ThcNavLink
            v-for="item in navigationLinks"
            class="thc-mobile-link"
            :key="item"
            :text="item?.link"
            :to="item?.to"
            :icon="item.icon"
            arrow
            :loading="false"
            @click="emit('close')"
          />
        </div>
      </nav>
    </aside>
  </transition>
</template>

<style lang="scss" scoped>
@use "./ThcMobileSidebar.scss" as *;
</style>
