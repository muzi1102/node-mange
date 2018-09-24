<template>
    <div>
        <Tab :tabList='tabList' @change="change">
            <slot>
                <ul>
                    <li v-for="item in template_json">{{item.name}}</li>
                </ul>
            </slot>
        </Tab>
        </div>
    </div>   
</template>
<script>
import Tab from '@/componets/tab';
export default {
    data(){
        return{
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
    components:{
        Tab 
    },
    computed:{
       
    },
    methods:{
        change(){
            this.template_json = [{
                name:"自定义模板444",
                time:'1234455688'
            }]
        }
    }
}
</script>
<style>
*{
    margin: 0px;
    padding: 0px;
}

</style>