import VueRouter from 'vue-router'
import Layout from '@/layout/layout';
import dashboard from '@/pages/index/index'
import shopIndex from '@/pages/shop/index'
import goodsIndex from '@/pages/goods/index';
import test from '@/pages/test'
const router = new VueRouter({
    routes:[
        {
            path:'',
            redirect:'/index/dashboard'
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
            path:'/shop',
            redirect:'/shop/index',
            component:Layout,
            children:[{
                name:'shopIndex',
                path:'index',
                component:shopIndex
            }]  
        },
        {
            path:'/goods',
            redirect:'/goods/index',
            component:Layout,
            children:[{
                name:goodsIndex,
                path:'index',
                component:goodsIndex
            }]
        },
        {
            path:"/test",
            component:test
        }
    ]
})

export default router