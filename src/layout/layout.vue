<template>
<div>
    <sider-bar></sider-bar>
    <div class="contain" :class="{subtab:isSubtab}">
        <router-view></router-view>
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
    background-color: #fff;
}
.contain.subtab{
     margin-left: 200px;
}
</style>

