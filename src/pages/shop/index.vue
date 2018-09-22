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
    margin-left: 110px;
}
.help-container{
    width:200px;
    position: absolute;
    right: 0px;
    top: 0px;
    bottom: 0px;
}
.shop-content{
    position: relative;
}
.help-container{
    background-color: aquamarine
}
</style>
