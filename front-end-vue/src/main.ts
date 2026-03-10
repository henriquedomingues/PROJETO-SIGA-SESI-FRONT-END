import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'


/* Importações do Font Awesome  Tive que baixar - npm install @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/vue-fontawesome@latest-3
*/
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas) // Adiciona todos os ícones sólidos, ou adicione ícones individualmente

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon) // Registra globalmente
app.use(createPinia())
app.use(router)

app.mount('#app')
