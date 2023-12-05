<script setup lang="ts">
import { IonButton, IonFooter, IonPage } from '@ionic/vue';

import CenterLayout from '@/layouts/CenterLayout.vue';
</script>

<template>
	<ion-page>
		<CenterLayout>
			<h1>
				Приветствуем вас в приложении
				<br />
				<span class="text-primary">Dolya Front</span>
			</h1>
			<div class="mb-8 text-lg">
				Здесь вы сможете записывать места в которых вы и ваши друзья побывали
			</div>
			<ion-button router-link="signup" shape="round" class="w-full">Начать</ion-button>
		</CenterLayout>
		<ion-footer class="ion-no-border p-2 text-center text-sm text-medium">
			Developed by dllpl and b4lesh
		</ion-footer>
	</ion-page>
</template>
