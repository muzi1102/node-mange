<template>
    <div>
        <div class="tabs">
            <div class="tab clearfix">
                <ul>
                    <li class="tabs-tab" v-for="item in tabList" @click="toggle">{{item}}</li>
                </ul>
            </div>
        </div>
        <div class="template-content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default{
        props:{
            tabList:{
                type:Array
            }
        },
        methods:{
            toggle(){
                this.$emit("change")
            }
        }
    }
</script>

<style scoped>
    .tabs{
        margin: 10px;
        border-bottom:1px solid #e5e5e5;
    }
    .tab li:first-child{
        border-left: 1px solid #e5e5e5;
    }
    .tabs-tab{
        display: inline-block;
        cursor: pointer;
        color: #666;
        border-top: 1px solid #e5e5e5;
        border-right: 1px solid #e5e5e5;
        background-color: #f8f8f8;
        padding: 10px;
        min-width: 90px;
        text-align: center;
    }
</style>