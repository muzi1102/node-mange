<template>
    <div>
        <li v-for="item in routeArr" class="el-icon-menu">
            <router-link :to="item.path" class="ml5" tag="a">
                {{item.name}}
            </router-link>
            <div class="subroute" v-if="item.secondSub">
            ooo
            </div>
        </li>
    </div>   
</template>
<script>
export default {
    data(){
        return{
            routeArr:[
            {
                path:'/index/dashboard',
                name:'概况',
                icon:'el-icon-menu',
                secondSub:''
            },
            {
                path:'/shop',
                name:'店铺',
                secondSub:true,
                sub:{
                    subtitle:'店铺管理',
                    subRouteArr:[{
                        path:'index',
                        name:'店铺概况'
                    },{
                       path:'',
                       name:'店铺装修' 
                    }]
                }
            }]
        }
    }
}
</script>
<style>
*{
    margin: 0px;
    padding: 0px;
}
.container{
    position:relative;
    border-bottom:1px solid red;
    margin-bottom:20px
}
.left{
    position:absolute;
    top:0px;
    bottom:0px;
    background:pink;
}
.container1{

}
.left1{
    position: fixed;
    top: 0px;
    bottom: 0px;
    left: 0px;
    background-color: red;
}
</style>

