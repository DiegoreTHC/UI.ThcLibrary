<script lang="ts" setup>
import { computed } from "vue";

const route = useRoute();

const breadcrumbs = computed(() => {
  return route.matched
    .filter((r) => r.meta?.breadcrumb)
    .map((r) => {
      const label =
        typeof r.meta.breadcrumb === "function" ? r.meta.breadcrumb(route) : r.meta.breadcrumb;

      return {
        label,
        to: r.path === "/" ? "/" : { path: r.path, params: route.params }
      };
    });
});
</script>

<template>
  <!-- <div class="">
    breadcrumb:
    use definePageMeta({breadcrumb: "Products"});
    for the first name use the definePageMeta({breadcrumb: "Products / ${params.category}"} for the
    second use the definePageMeta({breadcrumb: "Products / ${params.category} / ${product.name}"}
  </div> -->
  <nav
    aria-label="Breadcrumb"
    class="l-breadcrumb"
  >
    <ol>
      <li
        v-for="(crumb, index) in breadcrumbs"
        class="l-breadcrumb-item"
        :key="index"
      >
        <NuxtLink
          v-if="index < breadcrumbs.length - 1"
          :to="crumb.to"
          class="l-breadcrumb-link"
        >
          {{ crumb.label }}
        </NuxtLink>
        <span
          v-else
          class="l-breadcrumb-label"
          >{{ crumb.label }}</span
        >
      </li>
    </ol>
  </nav>
</template>

<style lang="scss" scoped>
.l-breadcrumb {
  background-color: red;
}
</style>
