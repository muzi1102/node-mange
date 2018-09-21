import VueRouter from 'vue-router'
import Layout from '@/layout/layout';
import dashboard from '@/pages/index/index'
import test from '@/pages/test'

const router = new VueRouter({
    routes:[
        {
            path:'',
            redirect:'/index'
        },
        {
            path:'/index',
            component:Layout,
            children:[{
                name:'dashboard',
                path:'dashboard',
                component:dashboard
            }]
        },
        {
            path:"/test",
            component:test
        }
    ]
})

export default router