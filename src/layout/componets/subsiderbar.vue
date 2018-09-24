<template>
    <div class="subcontainer">
       <h4 class="sub-title">{{subRoute.subtitle}}</h4>
       <ul>
           <li v-for="(item,index) in subRoute.subRouteArr">
               <router-link :to=item.path>{{item.name}}</router-link>
           </li>
       </ul>
    </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    props:{
        subRoute:{
            type:Object
        }
    }
}
</script>

<style scoped>
.sub-title{
    font-size: 14px;
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #f2f2f2;
    border-right: 1px solid #f2f2f2;
}
.sub-title h4{
    color: #333;
    font-size: 0;
    line-height: 0;
    padding: 17px 21px;
}
</style>

