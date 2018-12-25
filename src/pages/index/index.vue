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
                    <!-- 新店开张的内容 -->
                    <div class="more-task fr" @click="showIntro">
                        <div class="more-task-content">
                            <i class="el-icon-bell"></i>
                        </div>
                    </div>
                    <div class="store-introduction mb10" v-show="shopIntroduceShow">
                        <div class="store-introduction-header">
                            <h4>新店开张</h4>
                            <a href="javascript:;" class="store-introduction-close" @click="shopIntroduceHide">X</a>
                        </div>
                        <div class="store-introduction-content">
                            <div class="store-introduction-ctitle">
                                <ul>
                                    <li v-for="(item , index) in introduction" @click="selectIntro(index)">{{index}}.{{item.title}}</li>
                                </ul>
                            </div>
                            <div class="store-introduction-cdes">{{shopIntroduce}}</div>
                        </div>
                    </div>
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
                        <ul class="mt2">
                            <li><a href="">微信</a></li>
                            <li><a href="">微信</a></li>
                            <li><a href="">微信</a></li>
                            <li><a href="">微信</a></li>
                            <li><a href="">微信</a></li>
                        </ul>
                        <ul class="mt2">
                            <li><a href="">微信</a></li>
                            <li><a href="">微信</a></li>
                            <li><a href="">微信</a></li>
                            <li><a href="">微信</a></li>
                            <li><a href="">微信</a></li>
                        </ul>
                        <div class="widget-box-product-new">
                            <i></i>
                            <span class="widget-box-product-content">
                                功能上新：知识付费上线了内容访问环境的控制开关，增强音频/视频内容的安全性，尽可能避免了内容被盗取的可能性
                            </span>
                            <a href="javascript:;">查看更多</a>
                        </div>
                    </div>
                    <h5 class="mb15">营销应用</h5>
                    <div class="widget-box recommended-apps mb40">
                        <ul>
                            <li>
                                <a href="javascript:;">
                                    <h4>多人拼团</h4>
                                    <p>裂变式营销玩法</p>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <h4>发券宝</h4>
                                    <p>拉新裂变促活精准营销</p>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <h4>分销市场</h4>
                                    <p>一键上架 快速补充货源</p>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <h4>有赞小程序</h4>
                                    <p>一键生成抢占先机</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="dashboard-row mb40">
                        <div class="dashboard-row-col">
                            <div class="cms-suggest">
                                <h5 class="mb15">经营建议</h5>
                                <div class="dashboard-row-col-content">
                                    <ul class="mb20">
                                        <li>
                                            <a href="javascript:;">
                                                <h4>知识付费运营手册</h4>
                                                <p>知识付费+实物电商一体化经营</p>
                                            </a>
                                        </li>
                                        <li class="ml10">
                                            <a href="javascript:;">
                                                <h4>有赞精选商家入驻</h4>
                                                <p>抢占千万级精准流量入口</p>
                                            </a>
                                        </li>
                                    </ul>
                                    <ul class="mb20">
                                        <li>
                                            <a href="javascript:;">
                                                <h4>精细化运营36计</h4>
                                                <p>玩转营销工具  提升运营技巧</p>
                                            </a>
                                        </li>
                                        <li class="ml10">
                                            <a href="javascript:;">
                                                <h4>有赞运营智库</h4>
                                                <p>30+营销玩法，近百个明星案例</p>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            
                        </div>
                        <div class="dashboard-row-col">
                            <h5 class="mb15">学习交流</h5>
                            <div class="dashboard-row-col-content">
                                
                            </div>
                        </div>
                    </div> 
                    <h5 class="mb15">更多服务</h5>
                    <div class="widget-box more-service">
                        <ul>
                            <li>
                                <a href="javascript:;">
                                    <i></i>
                                    <p>我要推广</p>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <i></i>
                                    <p>分销市场</p>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <i></i>
                                    <p>全员开店</p>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <i></i>
                                    <p>美业</p>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <i></i>
                                    <p>零售</p>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <i></i>
                                    <p>应用市场</p>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <i></i>
                                    <p>App开店</p>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <i></i>
                                    <p>有赞</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="dashboard-right">
                    <div class="dashboard-popover-item mb25">
                        <a href="javascript:;">
                            <div>
                                <i class="el-icon-message"></i>
                                <span>在线客服</span>
                            </div>
                        </a>
                        <p>电话客服：0571 - 8998 8848</p>
                    </div>
                    <div class="dashboard-popover-item mb15">
                        1
                    </div>
                    <div class="dashboard-popover-item mb15">
                        1
                    </div>
                    <div class="dashboard-popover-item mb15">
                        1
                    </div>
                    <div class="widget-cms-list mb40">
                        <h5 class="mb10">有赞神厨</h5>
                        <ul>
                            <li>
                            <a href="">
                                [实录]有赞百万小程序峰会上海站现场实录
                            </a>
                            </li>
                            <li>
                            <a href="">
                                [实录]有赞百万小程序峰会上海站现场实录
                            </a>
                            </li>
                            <li>
                            <a href="">
                                [实录]有赞百万小程序峰会上海站现场实录
                            </a>
                            </li>
                            <li>
                            <a href="">
                                [实录]有赞百万小程序峰会上海站现场实录
                            </a>
                            </li>
                            <li>
                            <a href="">
                                [实录]有赞百万小程序峰会上海站现场实录
                            </a>
                            </li>
                        </ul>
                    </div>
                    <div class="widget-cms-list mb40">
                        <h5 class="mb10">有赞神厨</h5>
                        <ul>
                            <li>
                            <a href="">
                                [实录]有赞百万小程序峰会上海站现场实录
                            </a>
                            </li>
                            <li>
                            <a href="">
                                [实录]有赞百万小程序峰会上海站现场实录
                            </a>
                            </li>
                            <li>
                            <a href="">
                                [实录]有赞百万小程序峰会上海站现场实录
                            </a>
                            </li>
                            <li>
                            <a href="">
                                [实录]有赞百万小程序峰会上海站现场实录
                            </a>
                            </li>
                            <li>
                            <a href="">
                                [实录]有赞百万小程序峰会上海站现场实录
                            </a>
                            </li>
                        </ul>
                    </div>
                    <div class="widget-cms-list mb40">
                        <h5 class="mb10">有赞神厨</h5>
                        <ul>
                            <li>
                            <a href="">
                                [实录]有赞百万小程序峰会上海站现场实录
                            </a>
                            </li>
                            <li>
                            <a href="">
                                [实录]有赞百万小程序峰会上海站现场实录
                            </a>
                            </li>
                            <li>
                            <a href="">
                                [实录]有赞百万小程序峰会上海站现场实录
                            </a>
                            </li>
                            <li>
                            <a href="">
                                [实录]有赞百万小程序峰会上海站现场实录
                            </a>
                            </li>
                            <li>
                            <a href="">
                                [实录]有赞百万小程序峰会上海站现场实录
                            </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <!--function  -->

            <!-- more -->
        </div>
    </div>
</div>
</template>
<script>
    import axios from 'axios';
    import prompt from '@/components/prompt'
    export default {
        data(){
            return {
                introduction:[{
                    title:'简介',
                    des:'欢迎使用有赞！根据你的选择，我们了解到：你有优质货源，想拓展销售渠道找到更多客户。基于这一问题，有赞提供了一套以“线上商城+快递发货”为主的解决方案。开启解决方案，进入第一阶段任务——新店开张。'
                },{
                    title:'发布奖品',
                    des:'欢迎使用有赞！根据你的选择，我们了解到：你有优质货源，想拓展销售渠道找到更多客户。基于这一问题，有赞提供了一套以“线上商城'
                },{
                    title:'设置开业活动',
                    des:'欢迎使用有赞！根据你的选择，我们了解到：你有优质货源，想拓展销售渠道找到更多客户。基于这一问题，有赞提供了一套以“线上商城'
                },{
                    title:'装修店铺主页',
                    des:'欢迎使用有赞！根据你的选择，我们了解到：你有优质货源，想拓展销售渠道找到更多客户。基于这一问题，有赞提供了一套以“线上商城11'
                },{
                    title:'配置快速发货',
                    des:'欢迎使用有赞！根据你的选择，我们了解到：你有优质货源，想拓展销售渠道找到更多客户。基于这一问题，有赞提供了一套以“线上商城2'
                },{
                    title:'推广店铺',
                    des:'欢迎使用有赞！根据你的选择，我们了解到：你有优质货源，想拓展销售渠道找到更多客户。基于这一问题，有赞提供了一套以“线上商城3'
                },{
                    title:'发货，完成订单',
                    des:'欢迎使用有赞！根据你的选择，我们了解到：你有优质货源，想拓展销售渠道找到更多客户。基于这一问题，有赞提供了一套以“线上商城5'
                }],
                shopIntroduce:"",
                shopIntroduceShow:false
            }
        },
        components:{
            prompt
        },
        mounted(){
        },
        methods:{
            selectIntro(index){
                this.shopIntroduce = this.introduction[index]['des']
            },
            showIntro(){
                this.shopIntroduceShow = !this.shopIntroduceShow;
                // 动画生硬的处理
            },
            shopIntroduceHide(){
                this.shopIntroduceShow  = false;
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
.basic-info-container{
    margin-right: 240px;
    padding-right: 40px;
}
.more-task{
    position: relative;
    top: -50px;
}
.store-introduction{
    -webkit-box-shadow: 0 0 1px 0 rgba(0,0,0,0.2);
    box-shadow: 0 0 1px 0 rgba(0,0,0,0.2);
    background: #fff;
    height: 272px;
    position: relative;
    overflow: auto;
}
.store-introduction-header{
    height: 44px;
    background-color: #f8f8f8;
    line-height: 44px;
    padding: 0 15px;
    position: relative;
}
.store-introduction-close{
    position: absolute;
    right: 0px;
    top: 0px;
    bottom: 0px;
    width: 50px;
    height: 44px;
}
.more-task-content{
    border: 1px solid #999;
    padding: 5px 10px;
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
    padding-right: 40px;
}
.dashboard-right{
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
.widget-box-product-new{
    background: #F8F8F8;
}
.widget-box-product-content{
    white-space: nowrap;
    /* overflow: hidden; 为什么这哭加这个会有问题我的css能力真差劲 */
    text-overflow: ellipsis;
    margin: 10px 0px;
    display: inline-block;
}
.recommended-apps ul li {
    background: #f8f8f8;
    margin-right: 12px;
    font-size: 20px;
    color: #fff;
    line-height: 20px;
    text-align: center;
    padding: 35px 0 30px 0;
    border-radius: 2px;
    color: #fff;
}
.more-service ul li a{
    text-align: center;
    display: inline-block;
    opacity: 0.8;
    font-size: 12px;
    color: #333333;
    line-height: 12px;
}
.dashboard-row{
    display: flex;
    flex-direction: row ;
}
.dashboard-row-col{
    flex: 1;
}
.cms-suggest .dashboard-row-col-content ul{
    display: flex;
    flex-direction: row ;
}
.cms-suggest .dashboard-row-col-content ul li {
    flex: 1;
    background: #F8F8F8;
    padding: 20px;
}
.cms-suggest .dashboard-row-col-content h4{
    overflow: hidden;
    line-height: initial;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 20px;
    color: #333;
    margin-bottom: 10px;
}
.cms-suggest .dashboard-row-col-content p{
    font-size: 12px;
    line-height: 18px;
    color: #999;
    height: 36px;
    overflow: hidden;
}
.dashboard-popover-item{
    position: relative;
    background-color:#f8f8f8;
}
.dashboard-popover-item>a {
    border-radius: 2px;
    display: block;
    color: #666;
}
.store-introduction-ctitle ul li{
    height: 36px;
    line-height: 36px;
    list-style: none;
    padding: 0 15px;
    clear: both;
    cursor: pointer;
}
.store-introduction-ctitle{
    width: 30%;
    display: inline-block;
    border-right: 1px solid #999;
}
.store-introduction-cdes{
    float:right;
}
</style>
