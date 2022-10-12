import { createApp } from 'vue';

//PrimeVue
import PrimeVue from 'primevue/config';

//Styles
import '@/styles/tailwind.css';
import '@/styles/globalStyles.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import 'primevue/resources/themes/saga-blue/theme.css';

import ToastService from 'primevue/toastservice';
import Toast from 'primevue/toast';

//App
import Index from './Index.vue';

//Router
import router from './routers';

const app = createApp(Index);

app.use(router);
app.use(PrimeVue, { ripple: true });
app.use(ToastService);
app.component('Toast', Toast);

app.mount('#app');
