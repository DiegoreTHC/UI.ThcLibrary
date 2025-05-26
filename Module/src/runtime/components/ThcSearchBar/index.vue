<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from "vue";
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
const showResults = ref(false);

const searchFilterText = computed(() => {
  if (selectedCategory.value && selectedCategory.value.length) {
    if (selectedCategory.value === SearchBar.AllStore) {
      selectedCategory.value = "";
      return props.filterText;
    }
    return `${SearchBar.SearchIn} ${selectedCategory.value}`;
  }
  return props.filterText;
});

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
    .filter((category: { products: any[] }) => category.products.length > 0);
});

const highlightMatch = (text: string) => {
  if (!searchQuery.value) return text;
  const regex = new RegExp(`(${searchQuery.value})`, "gi");
  return text.replace(regex, '<span class="thc-highlight">$1</span>');
};

const selectOption = (item: { [x: string]: string }) => {
  selectedCategory.value = item["category-name"];
  isDropdownVisible.value = false;
};

const emit = defineEmits<{
  (e: "click", item: any): void;
}>();

const clickOnOption = (item: any) => {
  emit("click", item);
  isFocused.value = false;
  showResults.value = false;
};

const container = ref(null);

const closeAllDropdowns = () => {
  isDropdownVisible.value = false;
  isFocused.value = false;
  showResults.value = false;
};

const handleClickOutside = (event: MouseEvent) => {
  const target = event.target as Node;
  if (container.value && !container.value.contains(target)) {
    closeAllDropdowns();
  }
};

const handleGlobalKeydown = (e: KeyboardEvent) => {
  if (e.key === "Escape") {
    closeAllDropdowns();
  }
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
  document.addEventListener("keydown", handleGlobalKeydown);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
  document.removeEventListener("keydown", handleGlobalKeydown);
});

watch(searchQuery, (newVal) => {
  showResults.value = !!newVal;
  if (!newVal) {
    isFocused.value = false;
  }
});
</script>

<template>
  <div
    ref="container"
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
      @click="
        () => {
          isDropdownVisible = !isDropdownVisible;
          isFocused = false;
          showResults = false;
        }
      "
    >
      <span>{{ searchFilterText }}</span>
      <i
        :class="[
          'fas',
          { 'fa-chevron-down': !isDropdownVisible },
          { 'fa-chevron-up': isDropdownVisible }
        ]"
      ></i>
    </div>

    <div
      class="thc-searchbar-nav"
      v-if="!loading"
    >
      <input
        v-model="searchQuery"
        type="text"
        class="thc-searchbar-input"
        @focus="
          () => {
            isFocused = true;
            isDropdownVisible = false;
            showResults = true;
          }
        "
        @keydown.esc="closeAllDropdowns"
      />
      <i class="fas fa-search thc-searchbar-icon"></i>
    </div>

    <!-- Results Dropdown -->
    <div
      v-if="showResults && searchQuery && filteredCategories.length"
      class="thc-searchbar-dropdown"
    >
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

    <!-- No Results Dropdown -->
    <div
      v-if="showResults && searchQuery && !filteredCategories.length"
      class="thc-searchbar-dropdown no-results"
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
        <span v-if="selectedCategory && selectedCategory.length">
          En <span class="no-results-message-text--highlight">{{ selectedCategory }}</span>
        </span>
      </p>
    </div>

    <!-- Tag Dropdown -->
    <div
      v-if="isDropdownVisible && !searchQuery.length"
      class="thc-searchbar-dropdown thc-searchbar-dropdown-category"
    >
      <ThcPill
        v-if="selectedCategory.length"
        :text="SearchBar.AllStore"
        variant="outline"
        :active="SearchBar.AllStore === selectedCategory"
        @click="selectOption({ 'category-name': SearchBar.AllStore })"
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
@import "./SearchBar.scss";
</style>
