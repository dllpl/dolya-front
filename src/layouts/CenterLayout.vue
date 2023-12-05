<script setup lang="ts">
import { IonContent } from '@ionic/vue';
</script>

<template>
	<ion-content>
		<div class="prose flex h-full flex-col items-center justify-center p-4 text-center">
			<slot />
		</div>
	</ion-content>
</template>
