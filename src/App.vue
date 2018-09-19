<template>
<div>
    <p>测试我是否有没有数据1111</p>
</div>
</template>
<script>
    import axios from 'axios';
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
                axios.get('/api/news').then((response)=>{
                    console.log(response);
                }).catch((error)=>{
                    console.log(error);
                })
                // axios.get('http://localhost:3003/news').then((response)=>{
                //     console.log(response);
                // }).catch((error)=>{
                //     console.log(error);
                // })
            }

        }
    }
</script>

<style></style>