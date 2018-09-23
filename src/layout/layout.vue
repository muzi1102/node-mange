<template>
<div>
    <sider-bar></sider-bar>
    <div class="contain" :class="{subtab:isSubtab}">
        <router-view></router-view>
    </div>
    <div class="help-service" v-if="isSubtab">

    </div>
</div>    
</template>

<script>
import siderBar from './componts/siderbar'
export default {
    data(){
        return{
            isSubtab:false
        }
    },
    watch:{
        '$route' (val, oldVal){
            (val.path != '/index/dashboard') ? (this.isSubtab = true):(this.isSubtab = false)
        }
    },
    components:{
        siderBar
    }
}
</script>

<style scoped>
.contain{
    margin-left: 90px;
    background-color: #f8f8f8;
}
.contain.subtab{
     margin-left: 200px;
     margin-right:200px;
}
.help-service{
    width:200px;
    background-color:pink;
    position:fixed;
    top:0px;
    right:0px;
    bottom:0px;
}
</style>

