import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import naviga from './components/naviga/naviga.vue'
//import Navi from './components/Navi/Navi.vue'
import router from './router/index'
import store from './vuex/index'
import axios from 'axios'

Vue.use(ElementUI)
Vue.prototype.$http = axios

new Vue({
  el: '#app',
    router,
    naviga,
    store,
  render: h => h(naviga)
})




