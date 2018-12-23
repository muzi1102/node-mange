import VueRouter from 'vue-router'
import Layout from '@/layout/layout';
import dashboard from '@/pages/index/index'
import shopIndex from '@/pages/shop/index'
import microIndex from '@/pages/shop/micro/index'
import microCategory from '@/pages/shop/micro/category'
import microDraft from '@/pages/shop/micro/draft'
import goodsIndex from '@/pages/goods/index';
import test from '@/pages/test'
const router = new VueRouter({
    routes:[
        {
            path:'/',
            component:Layout,
            redirect:'dashboard',
            children:[{
                path:'dashboard',
                component:dashboard
            },{
                path:'/shop/summary',
                component:shopIndex
            },{
                path:'/shop/micro/index',
                component:microIndex
            },{
                path:'goods/management',
                component:goodsIndex
            }]
        }
    ]
})

export default router