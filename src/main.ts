import '@ionic/vue/css/core.css';
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';
import './theme/variables.css';
import './theme/fonts.css';

import { ScreenOrientation } from '@capacitor/screen-orientation';
import { StatusBar, Style } from '@capacitor/status-bar';
import { IonicVue } from '@ionic/vue';
import axios from 'axios';
import { createApp } from 'vue';

import App from './App.vue';
import router from './router';

axios.defaults.baseURL = 'https://dolya.webseed.ru/api/v1/';
axios.defaults.headers.common.Accept = 'application/json';

ScreenOrientation.lock({ orientation: 'portrait-primary' });
StatusBar.setStyle({ style: Style.Light });
StatusBar.setBackgroundColor({ color: '#ffffff' });

const app = createApp(App).use(IonicVue).use(router);

router.isReady().then(() => {
	app.mount('#app');
});
