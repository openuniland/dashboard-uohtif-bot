import { createApp } from 'vue';

//PrimeVue
import PrimeVue from 'primevue/config';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import 'primevue/resources/themes/saga-blue/theme.css';

//Styles
import '@/styles/globalStyles.css';
import '@/styles/tailwind.css';

//App
import Index from './Index.vue';

//Router
import router from './routers';

const app = createApp(Index);

app.use(router);
app.use(PrimeVue, { ripple: true });

app.mount('#app');
