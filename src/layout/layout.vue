<template>
<div>
    <sider-bar></sider-bar>
    <div class="contain" :class={subtab:helpService}>
        <router-view></router-view>
    </div>
    <div class="help-service" v-if="helpService">
        <helpService></helpService>
    </div>
</div>    
</template>

<script>
import siderBar from './components/siderbar'
export default {
    data(){
        return{
            helpService:false
        }
    },
    created() {
        if(this.$route.path.split('/').length>2){
            this.helpService = true;
        }
    },
    beforeRouteEnter (to, from, next) {

    },
    watch:{
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
     /* margin-right:200px; */
}
.help-service{
    width:200px;
    border: 1px solid #e5e5e5;
    position:fixed;
    top:0px;
    right:0px;
    bottom:0px;
}
</style>

