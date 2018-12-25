<template>
    <div class="shopcontainer inner-content">
        <Header></Header>
        <div class="app">
            <div class="shop-content">
                <div class="shop-inner">
                    <div class="showcase-dashboard-header clearfix">
                        <div class="showcase-dashboard-header__logo">
                        </div>
                        <div class="showcase-dashboard-header__store">
                            <div class="showcase-dashboard-header__des">
                                <h4 class="showcase-dashboard-header_name">beautyLee小卖部</h4>
                                <span class="showcase-dashboard-header_guarantee">有赞担保</span>
                                <div>
                                    <span class="mr5">
                                        <i class="el-icon-circle-check-outline"></i>
                                        个人认证
                                    </span>
                                    <span class="mr5">
                                        <i class="el-icon-circle-check-outline"></i>
                                        担保交易
                                    </span>
                                    <span class="mr5">
                                        <i class="el-icon-circle-check-outline"></i>
                                        线下门店
                                    </span>
                                </div>
                            </div>
                            <div class="showcase-dashboard-header__certify"></div>
                        </div>
                        <div class="showcase-dashboard-header__action">
                            <el-button type="primary" size="small">访问店铺</el-button>
                            <el-button type="primary" size="small" @click="newPage">新建微页面</el-button>
                            <el-button size="small" >访问店铺</el-button>
                        </div>
                    </div>
                    <div class="shop-dashboard-overview">
                        <ul>
                            <li>
                                <span class="shop-dashboard-overview_count">2</span>
                                <span class="shop-dashboard-overview_des">昨日浏览量</span>
                            </li>
                            <li>
                                <span class="shop-dashboard-overview_count">2</span>
                                <span class="shop-dashboard-overview_des">昨日访客量</span>
                            </li>
                            <li>
                                <span class="shop-dashboard-overview_count">2</span>
                                <span class="shop-dashboard-overview_des">昨日商品浏览量</span>
                            </li>
                            <li>
                                <span class="shop-dashboard-overview_count">2</span>
                                <span class="shop-dashboard-overview_des">昨日商品访客数</span>
                            </li>
                            <li>
                                <span class="shop-dashboard-overview_count">2</span>
                                <span class="shop-dashboard-overview_des">微页面</span>
                            </li>
                            <li>
                                <span class="shop-dashboard-overview_count">2</span>
                                <span class="shop-dashboard-overview_des">商品</span>
                            </li>
                        </ul>
                    </div>
                    <div class="shop-dashboard-flow">
                        <div class="shop-dashboard-flow_header">
                            <h4>
                                流量趋势
                                <span class="el-icon-question"></span>
                                <a href="" class="fr">详细》</a>
                            </h4>
                        </div>
                        <div class="shop-dashboard-flow_Stat">
                            <div class="shop-dashboard-flow_chart" ref="chart"></div>
                        </div>
                    </div>
                    <div class="shop-dashboard-rank">
                        <div class="shop-dashboard-flow_header">
                            <h4>
                                7天浏览排行榜
                                <span class="el-icon-question"></span>
                                <a href="" class="fr">详细》</a>
                            </h4>
                        </div>
                        <div class="shop-dashboard-flow_Stat">
                            <div class="shop-dashboard-flow_chart" ref="chart"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 弹框 -->
        <el-dialog
            title="选择页面模版"
            :visible.sync="dialogVisible"
            width="70%">
            <div class="dialogContent">
                <tab :tabList='tabList' @change="change">
                    <slot>
                        <ul class="dialogTabs">
                            <li v-for="item in template_json">{{item.name}}</li>
                        </ul>
                    </slot>
                </tab>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
import Header from '@/layout/components/header';
import tab from '@/components/tab';
import echarts from 'echarts';
export default {
    data(){
        return{
            dialogVisible:false,
            tabList:['全部','基础模板','场景导航'],
            template_json:[{
                name:"自定义模板1",
                time:'1234455666'
            },{
                name:"自定义模板2",
                time:'1234455777' 
            },{
                name:"自定义模板3",
                time:'1234455688'
            }]
        }
    },
    mounted() {
        this.lineChart();
    },
    created() {
        
    },
    methods:{
        lineChart(){
            var lineChart = echarts.init(this.$refs.chart);
            var pastDay =  [] ;
            new Date()
            lineChart.setOption({
                legend:{
                    data:["浏览量","访客数","商品浏览量","商品访客数"]
                },
                tooltip: {},
                xAxis: {
                    data: ['2018-09-17', '2018-09-18', '2018-09-19', '2018-09-20', '2018-09-21', '2018-09-12','2018-09-13']
                },
                yAxis: {},
                series: [{
                    name: '销量',
                    type: 'line',
                    data: [5, 20, 36, 10, 10, 20]
                },]
            });
        },
        newPage(){
            this.dialogVisible = true;
        },
        change(){
            console.log(11)
        }
    },
    components:{
        Header,tab
    }
}
</script>
<style scoped>
/* .help-container{
    width:200px;
    position: absolute;
    right: 0px;
    top: 0px;
    bottom: 0px;
    background-color:aquamarine;
} */
.shop-content{
    position: relative;
    background-color:#f8f8f8;
}
.shop-inner{
    margin: 10px;
    padding: 15px;
    min-width: 750px;
    min-height: 500px;
    background-color:#fff;
    -webkit-box-shadow: 0 0 1px 0 rgba(0,0,0,.2);
    box-shadow: 0 0 1px 0 rgba(0,0,0,.2);
}
.showcase-dashboard-header{
    position:relative;
    margin-bottom:20px;
}
.showcase-dashboard-header__logo{
    float: left;
    width: 72px;
    height: 72px;
    position: relative;
    margin-right: 20px;
}
.showcase-dashboard-header__store{
    float: left;
    margin-right: 20px;
}
.showcase-dashboard-header__action{
    position: absolute;
    right: 0;
    top: 30px;
}
.showcase-dashboard-header_name{
    height: 42px;
    font-size: 20px;
    line-height: 33px;
    display: inline-block
}
.showcase-dashboard-header_guarantee{
    background: rgb(68, 187, 0);
    position: relative;
    padding: 0 5px;
    border-radius: 1px;
    font-size: 10px;
    color: #fff;
    display: inline-block;
    line-height: 1.5;
    top: -2px;
    cursor: pointer;
    margin-left: 10px;
}
.shop-dashboard-overview{
    background-color:#f8f8f8;
    margin-bottom: 20px;
    padding: 12px;
}
.shop-dashboard-overview ul {
    display:flex;
}
.shop-dashboard-overview ul li {
    flex:1;
    text-align: center;
    padding: 12px;
    border-left: 1px dotted #ccc;
}
.shop-dashboard-overview ul li:first-child{
    border-left: none;
}

.shop-dashboard-overview_count{
    display: block;
    font-size: 22px;
    font-weight: 400;
    line-height: 18px;
}
.shop-dashboard-overview_des{
    display: block;
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    margin-top: 10px;
}
.shop-dashboard-flow_header{
    position: relative;
    margin-bottom: 20px;
    padding: 15px;
    background-color: #f8f8f8;
    height: 50px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}
.shop-dashboard-flow_header h4{
    padding-left: 10px;
}
.shop-dashboard-flow_header h4::before{
    content: "";
    display: inline-block;
    width: 3px;
    height: 12px;
    position: relative;
    top: 1px;
    background: #f60;
}
.shop-dashboard-flow_chart{
    padding: 10px;
    height: 300px;
    -webkit-tap-highlight-color: transparent;
    user-select: none;
    position: relative;
    background: transparent;
}
.dialogTabs{
    max-height: 300px;
    overflow: auto;
}

</style>
