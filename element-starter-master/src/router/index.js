/**
 * Created by Administrator on 2018/6/20.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Page1 from '../components/Page1.vue'
import Page2 from '../components/Page2.vue'
import Page3 from '../components/Page3.vue'
import Page4 from '../components/Page4.vue'
import Page5 from '../components/Page5.vue'
import Page6 from '../components/Page6.vue'
Vue.use(VueRouter)

const router = new VueRouter({
    routes:[{
        path: '/Page1', component: Page1
    },{
        path: '/Page2', component: Page2
    },{
        path:'/Page3', component: Page3
    },{
        path:'/Page4', component: Page4
    },{
        path:'/Page5', component: Page5
    },{
        path:'/Page6', component: Page6
    }]
})

export default router;