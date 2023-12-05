<script setup lang="ts">
import { IonPage } from '@ionic/vue';
import { onMounted, ref } from 'vue';

import { getUser } from '@/api/user';
import CenterLayout from '@/layouts/CenterLayout.vue';

const user = ref({});

onMounted(() => {
	getUser().then((result) => {
		user.value = result.data;
	});
});
</script>

<template>
	<ion-page>
		<CenterLayout>
			<pre>{{ user }}</pre>
		</CenterLayout>
	</ion-page>
</template>
