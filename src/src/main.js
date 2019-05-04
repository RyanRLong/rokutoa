import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store'
import './registerServiceWorker'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faReply, faForward, faBackward, faPlay, faStop } from '@fortawesome/free-solid-svg-icons'
import { faCircleNotch, faHome, faUndo, faArrowLeft, faArrowRight, faArrowDown, faArrowUp, faPowerOff } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.use(VueAxios, axios)

library.add(faForward)
library.add(faBackward)
library.add(faPlay)
library.add(faStop)
library.add(faReply)

library.add(faArrowLeft)
library.add(faArrowRight)
library.add(faArrowUp)
library.add(faArrowDown)
library.add(faUndo)
library.add(faHome)
library.add(faCircleNotch)
library.add(faPowerOff)

Vue.component('fa-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
