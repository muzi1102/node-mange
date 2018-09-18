import Vue from 'vue';
import App from './App.vue'

const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)s
server.listen(3000, () => {
  console.log('JSON Server is running')
})

new Vue({
    el:'#app',
    template: '<App/>',
	components: { App }
})