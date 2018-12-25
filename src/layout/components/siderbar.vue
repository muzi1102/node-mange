<template>
    <div class="sidebar">
        <div class="logo">
            我其实是logo
        </div>
        <ul>
            <li v-for="(item,index) in routeArr" @click="bindEvent(index)" :key="index">
                <router-link :to="item.path" class="" tag="a">
                    <i class="el-icon-menu"></i>
                    {{item.name}}
                </router-link>
            </li>
            <div class="subroute" v-if="secondSub">
                <sub-route :subRoute=subRouteObj></sub-route>
            </div>
        </ul>
    </div>   
</template>
<script>
import subRoute from './subsiderbar'
export default {
    data(){
        return{
            // secondSub:false,
            selectIndex:0,
            subRouteObj:{
               subtitle:'',
               subRouteArr:[]
            },
            routeArr:[
            {
                path:'/dashboard',
                name:'概况',
                icon:'el-icon-menu',
            },
            {
                path:'/shop/summary',
                name:'店铺',
                sub:{
                    subtitle:'店铺管理',
                    subRouteArr:[{
                        path:'shop/index',
                        name:'店铺概况'
                    },{
                       path:'shop/micro',
                       name:'微页面' 
                    }]
                }
            },{
                path:'/goods',
                name:'商品',
                sub:{
                    subtitle:'商品管理',
                    subRouteArr:[{
                        path:'index',
                        name:'商品管理'
                    },{
                       path:'',
                       name:'商品分组' 
                    }]
                }
            }]
        }
    },
    components:{
        subRoute
    },
    computed:{
        'subRoute':function(){
            
        },
        'secondSub':function(){
            console.log(this.subRouteObj.subRouteArr)
            console.log( Object.keys(this.subRouteObj.subRouteArr))
            return Object.keys(this.subRouteObj.subRouteArr) || false;
        }
    },
    created() {
        // if(this.$route.path.split('/').length>2){
        //    this.secondSub=true;
        // }
    },
    methods: {
        bindEvent(index){
            this.subRouteObj = {};
            this.selectIndex = index;
            Object.assign(this.subRouteObj,this.routeArr[index].sub)
            console.log(this.subRouteObj);
        }
    },
    watch:{

    }
}
</script>
<style scope>
.sidebar{
    position: fixed;
    top: 0px;
    bottom: 0px;
    background: #444;
    width: 90px;
    text-align: center;
}
.logo{
    height: 60px;
}
.sidebar li{
    width: 100%;
    font-size: 14px;
    height: 36px;
    line-height: 36px;
    margin-bottom: 14px;
    cursor: pointer;
}
.sidebar li a.router-link-active{
    background: #F8F8F8;
    color:#333;
}
.sidebar li:hover{
    background: #666;
} 
.sidebar li a{
    color: #CACACA;
    text-decoration: none;
    display:block;
}

.subroute{
    position: fixed;
    top: 0;
    bottom: 0;
    left: 90px;
    width: 110px;
    background: #fff;
    -webkit-box-shadow: 0 0 1px 0 rgba(0,0,0,0.2);
    box-shadow: 0 0 1px 0 rgba(0,0,0,0.2);
}
</style>
