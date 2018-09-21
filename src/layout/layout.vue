<template>
<div>
    <sider-bar></sider-bar>
    <div class="contain">
        <router-view></router-view>
    </div>
</div>    
</template>

<script>
import siderBar from './componts/siderbar'
export default {
    data(){
        return{

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
</style>

