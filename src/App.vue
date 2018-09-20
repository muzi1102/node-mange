<template>
<div>
    <Header></Header>
</div>
</template>
<script>
    import axios from 'axios';
    import Header from './layout/header'
    export default {
        data(){
            return {

            }
        },
        components:{
            Header
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

<style></style>