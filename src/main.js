import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

<<<<<<< HEAD
=======
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(MintUI)
Vue.config.productionTip = false
>>>>>>> 4af3c03f89d04c5b6482c32918e3d50e38fe26e0

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
