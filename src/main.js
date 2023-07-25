/* Set up using Vue 3 */
import { createApp } from 'vue'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import { faEye } from '@fortawesome/free-regular-svg-icons'

/* add icons to the library  fa-magnifying-glass*/
library.add(faMagnifyingGlass, faEye)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
