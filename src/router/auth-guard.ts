import { Preferences } from '@capacitor/preferences';
import axios from 'axios';

export async function authGuard() {
	const axiosToken = axios.defaults.headers.common.Authorization;
	if (axiosToken) return true;

	const tokenFromLocal = (await Preferences.get({ key: 'token' })).value;
	if (!tokenFromLocal) return '/';

	axios.defaults.headers.common.Authorization = `Bearer ${tokenFromLocal}`;
	return true;
}

export async function noAuthGuard() {
	const axiosToken = axios.defaults.headers.common.Authorization;
	if (axiosToken) return '/meets';

	const tokenFromLocal = (await Preferences.get({ key: 'token' })).value;
	if (!tokenFromLocal) return true;

	axios.defaults.headers.common.Authorization = `Bearer ${tokenFromLocal}`;
	return '/meets';
}
