<template>
    <div class="shopcontainer">
        <Header></Header>
        <div class="shop-content">
            <div class="shop-col">
            </div>
            <div class="help-container">
                22
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
}

</style>
