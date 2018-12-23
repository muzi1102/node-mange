import Vue from 'vue';
import App from './App.vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui';
import router from '@/router/index'
import '@/assets/css/main'

import 'element-ui/lib/theme-chalk/index.css';
import '../static/css/reset.css'
import '../static/css/common.css'

// 全局注册
import helpService from '@/components/helpService';
Vue.component('helpService',helpService);

Vue.use(VueRouter)
Vue.use(ElementUI);

new Vue({
    el:'#app',
    router,
    template: '<App/>',
	components: { App }
})