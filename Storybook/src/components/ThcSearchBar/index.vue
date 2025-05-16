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
    >
      <div v-if="filteredCategories.length">
        <div
          v-for="category in filteredCategories"
          :key="category"
          class="thc-searchbar-category"
        >
          <div class="thc-searchbar-subtitle">{{ category.name }}</div>
          <ul class="thc-searchbar-list">
            <li
              v-for="product in category.products"
              :key="product.name"
              class="thc-searchbar-list-item"
              @click="clickOnOption({ product: product, category: category.categoryId })"
            >
              <span v-html="highlightMatch(product.name)"></span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div
      v-if="searchQuery && !filteredCategories.length"
      class="thc-searchbar-dropdown no-results"
    >
      <figure class="no-results-message">
        <svg
          viewBox="0 0 36 36"
          xmlns="http://www.w3.org/2000/svg"
          class="no-results-icon"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M29.5719 3.70749C29.5647 3.49215 29.5611 3.27031 29.5632 3.05257C29.5682 2.55145 29.602 1.89982 29.7861 1.42794C29.8638 1.22864 30.1084 0.694182 30.7312 0.56064C31.359 0.426033 31.8144 0.816619 32.0018 1.00453C32.3711 1.37501 32.6739 1.69455 32.9586 1.99494C33.4909 2.55656 33.9597 3.05121 34.681 3.68661C34.8765 3.85887 35.2869 4.28309 35.1938 4.91066C35.1019 5.53069 34.5967 5.80783 34.4067 5.89815C33.9603 6.11032 33.3342 6.18649 32.8583 6.22466C32.5828 6.24677 32.3 6.25946 32.0337 6.26626C32.092 6.61279 32.1302 7.01228 32.1245 7.4546C32.1041 9.04052 31.5184 11.083 29.4722 13.1292C27.8065 14.7949 24.5055 17.9194 21.6328 20.6166C20.1939 21.9676 18.8584 23.2151 17.8827 24.1249C17.3949 24.5798 16.9969 24.9503 16.7209 25.2071L16.2977 25.6005L16.2961 25.602L16.2947 25.6033L16.2923 25.6055L16.291 25.6068L16.2901 25.6077L15.9274 25.9499C15.6915 26.1726 15.3526 26.4926 14.9408 26.8818C14.1171 27.6601 13.0019 28.7149 11.8355 29.8209C9.49595 32.0392 6.96977 34.4453 6.16146 35.2536C5.41801 35.997 4.44911 36.0521 3.64697 35.8309C2.86377 35.615 2.12447 35.1197 1.54446 34.5446C0.963519 33.9685 0.459847 33.2305 0.228665 32.4425C-0.00686606 31.6397 0.0208896 30.671 0.713771 29.8904C1.51143 28.9918 3.91059 26.4108 6.0969 24.0687C7.19299 22.8944 8.23979 21.7757 9.01253 20.9506C9.39891 20.5381 9.71681 20.1989 9.93812 19.9628L10.2804 19.5978L10.6418 19.2043C10.8769 18.9485 11.2173 18.5785 11.6384 18.1214C12.4805 17.2072 13.6458 15.9446 14.9384 14.5507C17.5212 11.7653 20.6197 8.4474 22.6617 6.34079C24.8743 4.05816 26.9768 3.47326 28.6202 3.57C28.9671 3.59043 29.2855 3.64082 29.5719 3.70749ZM11.0365 21.7321L12.9135 23.6326C13.3038 24.0278 13.9405 24.0317 14.3357 23.6414C14.7309 23.2512 14.7349 22.6144 14.3446 22.2192L12.4065 20.2568C12.6049 20.041 12.8442 19.781 13.1177 19.4842C13.9588 18.5712 15.1225 17.3102 16.4132 15.9182C18.9969 13.1319 22.0814 9.82927 24.1059 7.74071C25.9598 5.82816 27.5096 5.51945 28.502 5.57787C29.0203 5.60839 29.4358 5.74195 29.7167 5.86456C29.7805 5.8924 29.837 5.91948 29.8855 5.94434C29.9039 5.99752 29.9237 6.05906 29.9437 6.12841C30.0314 6.43296 30.1204 6.88099 30.1134 7.42865C30.0996 8.49557 29.7216 10.0354 28.05 11.7069C26.411 13.3459 23.1346 16.4475 20.256 19.1503C18.8193 20.4992 17.4856 21.7451 16.5111 22.6538C16.0238 23.1081 15.6264 23.4781 15.3509 23.7345L14.9223 24.133C14.9222 24.133 14.9218 24.1334 15.6062 24.8703C14.9161 24.1387 14.9161 24.1387 14.916 24.1388L14.5467 24.4873C14.3106 24.7102 13.9714 25.0305 13.5593 25.4199C12.7351 26.1987 11.619 27.2544 10.4515 28.3614C8.12329 30.569 5.57156 32.999 4.73923 33.8314C4.66236 33.9082 4.52629 33.987 4.18157 33.8919C3.81793 33.7917 3.3685 33.5208 2.96071 33.1164C2.55385 32.7129 2.27065 32.258 2.15866 31.8763C2.05103 31.5094 2.12382 31.3317 2.21799 31.2256C2.99444 30.3509 5.37116 27.7937 7.56722 25.4411C8.66232 24.268 9.70832 23.1501 10.4806 22.3255C10.6869 22.1052 10.8736 21.9059 11.0365 21.7321ZM15.6062 24.8703L14.916 24.1388L14.919 24.136L14.9218 24.1334L15.6062 24.8703ZM31.6133 4.26133C31.5971 4.01289 31.5832 3.7373 31.5772 3.46249C31.8211 3.71892 32.0683 3.9766 32.3355 4.2427C32.0886 4.25464 31.8403 4.25991 31.6133 4.26133ZM33.3677 5.21165C33.3683 5.21169 33.3641 5.20707 33.3535 5.19768C33.3619 5.20692 33.3672 5.21161 33.3677 5.21165ZM30.5568 2.40599C30.5569 2.40662 30.5625 2.41211 30.5733 2.42058C30.5621 2.4096 30.5567 2.40537 30.5568 2.40599Z"
            fill="white"
          />
        </svg>
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
        :text="category.name"
        variant="outline"
        :active="category.name === selectedCategory"
        @click="selectOption(category)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { SearchBar } from "~/src/utils/enums";

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
    .filter((category: { name: any }) => {
      return selectedCategory.value === "" || category.name === selectedCategory.value;
    })
    .map((category: { products: any[] }) => {
      return {
        ...category,
        products: category.products.filter((product) =>
          product.name.toLowerCase().includes(searchQuery.value.toLowerCase())
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

const selectOption = (item: { name: string }) => {
  selectedCategory.value = item.name;
  isDropdownVisible.value = false;
};

const emit = defineEmits<{
  (e: "click", item: any): void;
}>();

const clickOnOption = (item: any) => {
  emit("click", item);
  isFocused.value = false;
};
</script>

<style lang="scss" scoped>
@import "./SearchBar.scss";
</style>
