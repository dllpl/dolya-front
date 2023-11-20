import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

import HomePage from '@/views/HomePage.vue';
import SignupLocalPage from '@/views/SignupLocalPage.vue';

const routes: Array<RouteRecordRaw> = [
	{ path: '/', redirect: '/home' },
	{ path: '/home', name: 'Home', component: HomePage },
	{ path: '/signup', name: 'Signup', component: SignupLocalPage }
];

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes
});

export default router;
