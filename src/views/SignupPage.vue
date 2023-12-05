<script setup lang="ts">
import { Preferences } from '@capacitor/preferences';
import { Toast } from '@capacitor/toast';
import { IonButton, IonIcon, IonPage, IonSpinner } from '@ionic/vue';
import useVuelidate from '@vuelidate/core';
import { arrowBack } from 'ionicons/icons';
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';

import type { CreateUserInput } from '@/api/user';
import { createUser } from '@/api/user';
import BaseInput from '@/components/BaseInput.vue';
import CenterLayout from '@/layouts/CenterLayout.vue';
import { minLength$, required$ } from '@/plugins/rus-validators';

const router = useRouter();

const formData = reactive<CreateUserInput>({ name: '' });
const v$ = useVuelidate(
	{
		name: {
			required$,
			minLength: minLength$(2)
		}
	},
	formData
);

const isLoading = ref(false);

async function submit() {
	const isValid = await v$.value.$validate();
	if (!isValid) return;

	isLoading.value = true;
	createUser(formData)
		.then(async (response) => {
			await Preferences.set({
				key: 'token',
				value: response.data.token
			});
			await router.push('/meets');
		})
		.catch(async (error) => {
			const errorMessage = error.response.data.message;
			await Toast.show({ text: errorMessage, duration: 'long' });
		})
		.finally(() => (isLoading.value = false));
}
</script>

<template>
	<ion-page>
		<CenterLayout>
			<ion-button
				shape="round"
				color="medium"
				fill="clear"
				class="absolute left-0 top-0 m-1 w-12 [&::part(native)]:p-0"
				style="--ripple-color: transparent"
				@click="() => router.replace('/')"
			>
				<ion-icon :icon="arrowBack" />
			</ion-button>

			<h2 class="mt-0">Введите имя</h2>
			<BaseInput
				v-model.trim="formData.name"
				:v$Value="v$.name"
				type="text"
				placeholder="Ваше имя"
				:max-length="20"
				:counter="formData.name.length > 15"
			/>
			<ion-button type="submit" class="mt-4 w-full" shape="round" @click="submit">
				<ion-spinner name="crescent" v-if="isLoading" />
				<span v-else>Создать</span>
			</ion-button>
		</CenterLayout>
	</ion-page>
</template>
