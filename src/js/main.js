import { createApp } from 'vue'
import '../scss/general.scss'
import App from '../App.vue'
import router from './router'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faUser, faEye, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faGoogle, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

library.add(faUser, faFacebook, faTwitter, faGoogle, faInstagram, faLinkedin, faGithub, faEye, faChevronLeft)

createApp(App)
.use(router)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
