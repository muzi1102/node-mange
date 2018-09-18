#### back-stage managemen
### 后台管理系统 （技术栈:vue+vue-router+element-ui）单页面
### 数据采用假数据mock + json-server来模拟借口请求

<!-- 这里记录我实践的思路和过程 -->
1:初始化package.json 文件 -----延伸npm scripts的用法
2:新建src文件夹（pages componets router等）后面的依次添加
3:我怎么把这个项目咋本地跑起来？首先不需要任何page，单纯的页面
（1）新建main.js 作为单页面应用的入口文件 : 这里面具体写什么干什么
（2）app.vue作为单页面应用vue的什么点《《这里不清楚》》 这里面具体写什么干什么
4:wepack的配置文件的处理 这里是否可以延伸webpack的使用写一篇文章
写完以上的东西之后不知从何开始，但是好困。。今天状态还不错要不从明天开始

我在app.vue里面写了关于vue的项目。。那么请问浏览器不会识别vue的语法该怎办？webpack的模块开解析成浏览器可以识别的语言

step1:基础的准备工作，引导熟悉。step by step
熟悉webpack的语法(webpack 4需要安装webpack-cli)全局安装 这里失败好久都没搞定
新建一个index.html文件，引入编译之后的js文件
加入vue的语法。app.vue文件该怎么写 
浏览器不能识别vue。需要module解析
在webpack的配置文件 module:{rules:[{test:/\.vue$/,'vue-loader'}]
在入口文件vue需要注意的 事项
https://www.imooc.com/article/17868

step2:怎么起本地服务
现在打开静态文件可以得到编译之后的js文件， 并且在浏览器之上有正确的渲染
webpack-dev-server 
在package.json 新建一个scripts dev
'dev':'webpack-dev-server --config webpack.config.js --open' 
默认 的是index.html文件  不存在的打开默认的所以文件 

step3 : 这里需要了解下node的模块引用
好像需要引用文件
vue-template-compiler
<!--  -->
(1):html 文件 的 js 不行
文件内容渲染不出来
new Vue({
    el:'#app',
	components: { App } 
})
这样写没有效果
new Vue({
    el:'#app',
    template: '<App/>',
	components: { App }
})
编译挂载成功

step4:写死的index.html 诸多不方便
引入html-webpack-plugin 
自动生成的index.html文件没有 div #app
引入template
 new HtmlWebpackPlugin({
    title:'my fisrt app',
    template:'index.html'
})

step4:怎么写es6的语法
需要安装什么如何去做？
搞了半天是自己东西写错地方
    "babel-core": "^6.26.3",
    "babel-loader": "^7.1.5",
    "babel-preset-env": "^1.7.0",
    "babel-preset-es2015": "^6.24.1",
    "babel-runtime": "^6.26.0",
没搞懂每个是干什么的
不在webpack的配置文件写也是可以的？难道是浏览器支持？


3:在component文件夹新建header.vue sidebar.vue


<!-- #### 快速打开md文件的快捷键ctrl+shift+v -->



