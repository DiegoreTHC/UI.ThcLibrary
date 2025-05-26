<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from "vue";
import { SearchBar } from "../../utils/enums";

const props = withDefaults(
  defineProps<{
    categories: any;
    filterText?: string;
    searchByCategory?: boolean;
    loading?: boolean;
  }>(),
  {
    categories: [],
    searchByCategory: false,
    loading: true
  }
);

const searchQuery = ref("");
const selectedCategory = ref("");
const isFocused = ref(false);
const isDropdownVisible = ref(false);

const searchFilterText = computed(() => {
  if (selectedCategory.value.length) {
    if (selectedCategory.value === SearchBar.AllStore) {
      selectedCategory.value = "";
      return props.filterText;
    }
    return `${SearchBar.SearchIn} ${selectedCategory.value}`;
  }
  return props.filterText;
});

// Filter products by category and name
const filteredCategories = computed(() => {
  return props.categories
    .filter((category: { ["category-name"]: any }) => {
      return selectedCategory.value === "" || category["category-name"] === selectedCategory.value;
    })
    .map((category: { products: any[] }) => {
      return {
        ...category,
        products: category.products.filter((product) =>
          product["product-name"].toLowerCase().includes(searchQuery.value.toLowerCase())
        )
      };
    })
    .filter((category: { products: any[] }) => category.products.length > 0); // Only include categories with products matching the search
});

// Highlight matching text in the product names
const highlightMatch = (text: string) => {
  if (!searchQuery.value) return text;
  const regex = new RegExp(`(${searchQuery.value})`, "gi");
  return text.replace(regex, '<span class="thc-highlight">$1</span>');
};

const selectOption = (item: { [x: string]: string }) => {
  selectedCategory.value = item["product-name"];
  isDropdownVisible.value = false;
};

const emit = defineEmits<{
  (e: "click", item: any): void;
}>();

const clickOnOption = (item: any) => {
  emit("click", item);
  isFocused.value = false;
};

const dropdown = ref(null);
const tagDropdown = ref(null);

const handleClickOutside = (event) => {
  if (dropdown.value && !dropdown.value.contains(event.target)) {
    isDropdownVisible.value = false;
  }
  if (tagDropdown.value && !tagDropdown.value.contains(event.target)) {
    isDropdownVisible.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>

<template>
  <div
    :class="[
      'thc-searchbar',
      { 'thc-searchbar--loading': loading },
      { 'thc-searchbar--active': isFocused },
      { 'thc-searchbar--filter': searchByCategory }
    ]"
  >
    <ThcSkeleton
      width="100%"
      v-if="loading"
    />
    <div
      class="thc-search-select"
      v-if="searchByCategory && !loading"
      tabindex="0"
      @click="isDropdownVisible = !isDropdownVisible"
    >
      <span>{{ searchFilterText }}</span>
      <i class="fas fa-chevron-down"></i>
    </div>

    <!-- Search Input -->
    <div
      class="thc-searchbar-nav"
      v-if="!loading"
    >
      <input
        v-model="searchQuery"
        type="text"
        @focus="((isFocused = true), (isDropdownVisible = false))"
        @blur="isFocused = false"
        class="thc-searchbar-input"
      />
      <i class="fas fa-search thc-searchbar-icon"></i>
    </div>

    <!-- Results Dropdown -->
    <div
      v-if="searchQuery && filteredCategories.length"
      class="thc-searchbar-dropdown"
      ref="dropdown"
    >
      <div v-if="filteredCategories.length">
        <div
          v-for="category in filteredCategories"
          :key="category"
          class="thc-searchbar-category"
        >
          <div class="thc-searchbar-subtitle">{{ category["category-name"] }}</div>
          <ul class="thc-searchbar-list">
            <li
              v-for="product in category.products"
              :key="product['product-name']"
              class="thc-searchbar-list-item"
              @click="clickOnOption({ product: product, category: category.id })"
            >
              <span v-html="highlightMatch(product['product-name'])"></span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div
      v-if="searchQuery && !filteredCategories.length"
      class="thc-searchbar-dropdown no-results"
      ref="emptyResults"
    >
      <figure class="no-results-message">
        <i class="no-results-message-icon fam-joint-smoke"></i>
        <figcaption class="no-results-message-caption">Ups!</figcaption>
      </figure>
      <p class="no-results-message-text">
        No encontramos ningún resultado para: "<span class="no-results-message-text--highlight">{{
          searchQuery
        }}</span
        >".
        <span v-if="selectedCategory.length"
          >En <span class="no-results-message-text--highlight">{{ selectedCategory }}</span></span
        >
      </p>
    </div>

    <div
      class="thc-searchbar-dropdown thc-searchbar-dropdown-category"
      v-if="isDropdownVisible && !searchQuery.length"
      ref="tagDropdown"
    >
      <ThcPill
        v-if="selectedCategory.length"
        :text="SearchBar.AllStore"
        variant="outline"
        :active="SearchBar.AllStore === selectedCategory"
        @click="selectOption({ name: SearchBar.AllStore })"
      />
      <ThcPill
        v-for="category in categories"
        :key="category"
        :text="category['category-name']"
        variant="outline"
        :active="category['category-name'] === selectedCategory"
        @click="selectOption(category)"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "./SearchBar.scss" as *;
</style>
