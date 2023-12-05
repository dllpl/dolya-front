import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
	appId: 'io.dolya.starter',
	appName: 'Доля',
	webDir: 'dist',
	server: {
		androidScheme: 'https'
	}
};

export default config;
