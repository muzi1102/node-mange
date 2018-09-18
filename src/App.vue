<template>
<div>
    <p>测试我是否有没有数据1111</p>
</div>
</template>
<script>
    //var Mock = require('mockjs')
    import Mock from 'mockjs';
    export default {
        data(){
            return {

            }
        },
        mounted(){
            this.init();
        },
        methods:{
            init(){
                var data =Mock.mock({
                    name: {
                        first: '@FIRST',
                        middle: '@FIRST',
                        last: '@LAST',
                        full: '@first @middle @last'
                    }
                })
                console.log(data);
            }

        }
    }
</script>

<style></style>