import Vue from 'vue';
import App from './App.vue'
// var MyComponent = Vue.extend({
//     template: '<div>测试我是否有没有数据!</div>'
// })
// new MyComponent({ el: '#app' });

new Vue({
    el:'#app',
    template: '<App/>',
	components: { App }
})