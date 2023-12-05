import { createRouter, createWebHistory } from '@ionic/vue-router';
import type { RouteRecordRaw } from 'vue-router';

import { authGuard, noAuthGuard } from '@/router/auth-guard';
import GreetingPage from '@/views/GreetingPage.vue';
import MeetsPage from '@/views/MeetsPage.vue';
import SignupPage from '@/views/SignupPage.vue';

const routes: Array<RouteRecordRaw> = [
	{ path: '/', name: 'Greeting', component: GreetingPage, beforeEnter: noAuthGuard },
	{ path: '/signup', name: 'Signup', component: SignupPage, beforeEnter: noAuthGuard },
	{ path: '/meets', name: 'Meets', component: MeetsPage, beforeEnter: authGuard }
];

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes
});

export default router;
