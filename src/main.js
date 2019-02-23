import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import VueFirestore from 'vue-firestore'
import Vuex from 'vuex'

Vue.use(Vuex)

Vue.use(VueFirestore)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
