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
            },{
                name:'micro',
                path:'/micro',
                component:Layout,
                redirect:'/micro/index',
                children:[{
                    component:microIndex,
                    path:'index',
                    name:'microindex'
                },{
                    component:microCategory,
                    path:'category',
                    name:'microCategory'
                },{
                    component:microDraft,
                    path:'draft',
                    name:'microDraft'
                }]
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