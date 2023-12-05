<script setup lang="ts">
import type { TextFieldTypes } from '@ionic/core';
import { IonInput } from '@ionic/vue';
defineProps<{
	modelValue: string;
	v$Value: any;
	type: TextFieldTypes;
	placeholder?: string;
	counter?: boolean;
	maxLength?: number;
}>();
const emit = defineEmits<{
	(event: 'update:modelValue', payload: string): void;
}>();
</script>

<template>
	<ion-input
		@input="emit('update:modelValue', $event.target.value)"
		:type="type"
		:placeholder="placeholder"
		fill="outline"
		:maxlength="maxLength"
		:error-text="(v$Value.$errors[0]?.$message ?? '').toString()"
		class="ion-touched"
		:class="{ 'ion-invalid': v$Value.$error }"
		:counter="counter"
	/>
</template>
