<template>
    <div>
        <div class="sidebar">
            <div class="logo">
                我其实是logo
            </div>
            <ul>
                <li class="active el-icon-menu" >
                    <router-link to="/index/dashboard" class="ml5" tag="a">
                        概况
                    </router-link>
                </li>                
                <li>
                    <a href="http://">店铺</a>
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
                </li>
            </ul>
        </div>   
    </div>
</template>
<script>
export default {
    
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
</style>
