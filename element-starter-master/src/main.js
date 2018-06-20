import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import naviga from './components/naviga/naviga.vue'
//import Navi from './components/Navi/Navi.vue'
import router from './router/index'

Vue.use(ElementUI)

new Vue({
  el: '#app',
    router,
    naviga,
  render: h => h(naviga)
})
