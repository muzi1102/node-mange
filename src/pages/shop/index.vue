<template>
    <div class="shopcontainer">
        <Header></Header>
        <div class="shop-content">
            <div class="shop-inner">
            111
            </div>
        </div>
        
    </div>
</template>
<script>
import Header from '@/layout/componts/header'
export default {
    data(){
        return{

        }
    },
    components:{
        Header
    }
}
</script>
<style scoped>
.shopcontainer{
   
}
.help-container{
    width:200px;
    position: absolute;
    right: 0px;
    top: 0px;
    bottom: 0px;
    background-color:aquamarine;
}
.shop-content{
    position: relative;
    background-color:#f8f8f8;
    padding:10px;
}
.shop-inner{
    padding:10px;
    border:1px solid red;
    background-color:#fff;
}
</style>
