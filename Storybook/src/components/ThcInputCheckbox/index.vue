<template>
	<div class="thc-checkbox">
		<div class="thc-checkbox-item">
      <input
				:class="[
					'thc-checkbox-box',
					{ 'thc-checkbox-box--disabled': disabled }
				]"
				type="checkbox"
        v-model="model"
				:id="id"
        :value="value"
			/>
			<Thc-Label
				:for="id"
				class="thc-checkbox-label"
				v-if="label"
        :label="label"
			/>
		</div>
	</div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  id: string;
  disabled?: boolean;
  value?: string | boolean | undefined;
  label?: string;
}>();

const model = defineModel({ type: [Boolean, String, Array] as PropType<boolean | undefined | string | string[]> });
</script>

<style lang="scss" scoped>
@import './ThcInputCheckbox.scss';
</style>
