<template>
<div>
    <prompt>
        <template slot="promptslot">
            <div class="prompt-content-warn prompt-content">
                <div>
                    <p class="prompt-content-warn-text">店铺免费试用期不足7天，现在订购额外赠送7天服务期；逾期未订购将被打烊，无法正常营业</p>
                    <p class="prompt-content-warn-text">官方咨询电话： 0571-86857988</p>
                </div>
                <button>立即订购</button>
            </div>
        </template>
    </prompt>
    <div class="main-content">
        <div class="main-content-innder">
            <div class="basic-info-container mb25">
                <h2 class="shop-name">
                    <span class="shop-name-text">BeautyLee small shop</span>
                    <span class="shop-badge blue">试用期</span>
                    <span class="shop-badge">SVIP</span>
                    <span class="shop-badge blue">有赞担保</span>
                </h2>
            </div>
            <div class="flex-container">
                <div class="dashboard-left">
                    <div class="widget-box mb40">
                        <div class="widget-box-inner">
                            <ul>
                                <li>
                                    <p>0</p>
                                    <p>代发货订单</p>
                                </li>
                                <li>
                                    <p>0</p>
                                    <p>代发货订单</p>
                                </li>
                                <li>
                                    <p>0</p>
                                    <p>代发货订单</p>
                                </li>
                                <li>
                                    <p>0</p>
                                    <p>代发货订单</p>
                                </li>
                                <li>
                                    <p>0</p>
                                    <p>代发货订单</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <h5 class="mb15">常见功能</h5>
                    <div class="widget-box mb40 usefull-links">
                        <ul>
                            <li><a href="">微信</a></li>
                            <li><a href="">微信</a></li>
                            <li><a href="">微信</a></li>
                            <li><a href="">微信</a></li>
                            <li><a href="">微信</a></li>
                        </ul>
                        <ul>
                            <li><a href="">微信</a></li>
                            <li><a href="">微信</a></li>
                            <li><a href="">微信</a></li>
                            <li><a href="">微信</a></li>
                            <li><a href="">微信</a></li>
                        </ul>
                    </div>
                </div>
                <div class="dashboard-right">2</div>
            </div>
            <!--function  -->

            <!-- more -->
        </div>
    </div>
</div>
</template>
<script>
    import axios from 'axios';
    import prompt from '@/componets/prompt'
    export default {
        data(){
            return {

            }
        },
        components:{
            prompt
        },
        mounted(){
            this.init();
        },
        methods:{
            init(){
            }

        }
    }
</script>

<style scoped>
.prompt-content{
    padding: 11px 15px 11px 30px;
}
.prompt-content-warn{
    background: #fff7cc;
    border: 1px solid #fdeeb2;
    color: #333;
}
.prompt-content-warn-text{
    font-size: 12px;
    font-weight: bold;
    line-height: 18px;
}
.main-content-innder{
    padding: 20px 30px;
}
.shop-name{
    display: inline-block;
    font-size: 20px;
    line-height: 1em;
    color: #333333;
}
.shop-badge{ 
    padding: 0 5px;
    border-radius: 2px;
    font-size: 10px;
    color: #999;
    border: 1px solid #999;
    height: 16px;
    line-height: 16px;
}
.shop-badge.blue {
    color: #6599E3;
    border-color: #6599E3;
}
.dashboard-left{
    margin-right: 240px;
}
.dashboard-right{
    background-color: aqua;
    width: 240px;
    position: absolute;
    right:0px;
    top: 0px;
}
.widget-box ul{
    display: flex;
    flex-direction: row ;
}
.widget-box .widget-box-inner{
    padding: 40px 10px;
    background: #F8F8F8;
    text-align: center;
}
.widget-box ul li{
    flex: 1
}
.flex-container{
    position: relative;
}
.usefull-links ul li{
    margin-left: 2px;
    box-sizing: border-box;
    background: #F8F8F8;
}
.usefull-links ul li>a{
    display: block;
    font-size: 14px;
    color: #333333;
    padding: 20px;
}
</style>
