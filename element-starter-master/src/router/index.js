/**
 * Created by Administrator on 2018/6/20.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Page1 from '../components/Page1.vue'

import Page3 from '../components/Page3.vue'
import Page4 from '../components/Page4.vue'
import Page5 from '../components/Page5.vue'
import Page6 from '../components/Page6.vue'
import Page21 from '../components/Page21.vue'
import Page22 from '../components/Page22.vue'
import Page23 from '../components/Page23.vue'
Vue.use(VueRouter)

const router = new VueRouter({
    routes:[{
        path: '/Page1', component: Page1
    },{
        path:'/Page3', component: Page3
    },{
        path:'/Page4', component: Page4
    },{
        path:'/Page5', component: Page5
    },{
        path:'/Page6', component: Page6
    },{
        path:'/Page21', component: Page21
    },{
        path:'/Page22', component: Page22
    },{
        path:'/Page23', component: Page23
    }]
})

export default router;

