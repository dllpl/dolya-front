<template>
	<ion-page>
		<ion-content>
			<div class="prose flex h-full flex-col items-center justify-center p-4">
				<h2 class="text-center">
					Приветствуем вас в приложении
					<ion-text color="primary">Dolya Front</ion-text>
				</h2>
				<ion-button shape="round" router-link="local-signup">
					Зарегестрироваться
				</ion-button>
			</div>
		</ion-content>
	</ion-page>
</template>

<script setup lang="ts">
import { IonButton, IonContent, IonPage, IonText } from '@ionic/vue';
</script>
