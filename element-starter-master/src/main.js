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



Vue.component('movieinfo', {
    data: function () {
        return {
            count: 0
        }
    },
    template: '<div class="filmbox">'+
    '<img src="http://p1.meituan.net/movie/3d17aa5ee07f5d66239d8393bcb8fe5196556.jpg@160w_220h_1e_1c">'+
    ' <div class="filmInfo">侏罗纪世界2</div>'+'<div class="but">购票</div>'+
    '</div>'


})
