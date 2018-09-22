<template>
    <div>
        <div class="sidebar">
            <div class="logo">
                我其实是logo
            </div>
            <ul>
                <li v-for="(item,index) in routeArr" class="el-icon-menu">
                    <router-link to="item.path" class="ml5" tag="a">
                        {{item.name}}
                    </router-link>
                    <div class="subroute" v-if="item.sub">
                        <sub-route :subRoute=item.sub></sub-route>
                    </div>
                </li>
                <!-- <li class="active el-icon-menu" >
                    <router-link to="/index/dashboard" class="ml5" tag="a">
                        概况
                    </router-link>
                    <div class="subroute">
                        <sub-route ></sub-route>
                    </div>
                </li>                
                <li>
                    <router-link to="/shop/index" class="ml5" tag="a">
                        店铺
                    </router-link>
                </li>
                <li>
                    <a href="http://">商品</a>    
                </li>
                <li>
                    <a href="http://">订单</a>
                </li>
                <li>
                    <a href="http://">客户</a>
                </li>
                <li>
                    <a href="http://">数据</a>
                </li>
                <li>
                    <a href="http://">资产</a>
                </li>
                <li><a href="http://">设置</a>
                </li> -->
            </ul>
        </div>   
    </div>
</template>
<script>
import subRoute from './subsiderbar'
export default {
    data(){
        return{
            routeArr:[{
                path:'/index/dashboard',
                name:'概况',
                icon:'el-icon-menu'
            },{
                path:'',
                name:'店铺',
                sub:{
                    subtitle:'店铺管理',
                    subRouteArr:[{
                        path:'/shop/index',
                        name:'店铺概况'
                    },{
                       path:'',
                       name:'店铺装修' 
                    }]
                }
            }]
        }
    },
    components:{
        subRoute
    },
    mounted() {
        for(var i = 0 ;i<this.routeArr.length;i++ ){
            console.log(this.routeArr[i].sub);
        }
    },
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
.sidebar li.active{
    background: #F8F8F8;
}
/* .sidebar li:hover{
    background: #666;
} */
.sidebar li a{
    color: #CACACA;
    text-decoration: none;
}
.sidebar li.active a{
    color:#333;
}
.subroute{
    position: fixed;
    top: 0;
    bottom: 0;
    left: 90px;
    width: 110px;
    background: #fff;
    /* border-right: 1px solid #999;
     */
    -webkit-box-shadow: 0 0 1px 0 rgba(0,0,0,0.2);
    box-shadow: 0 0 1px 0 rgba(0,0,0,0.2);
}
</style>
