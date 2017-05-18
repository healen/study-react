  项目背景：

 ===
  自从接触React以来，一直对它很感兴趣。最近使用 React 写了个页面练练手，目前这个版本还很简单且粗糙，日后待我慢慢修改完善。

  技术栈：

===
 * React 15.4
 * React-Route
 * React-codemirror
 * isomorphic-fetch
 * webpack
 * ES6
 * less
 * javascript
 * bootstrap

  演示
 ===
    [在线演示戳我](https://healen.github.io/healenrt "点击链接显示")（请使用chrome开发者手机演示模式预览）
  

  组件
 ===
* Header  公用头
* Example 案例源码展示
* Tips  小标签
* App   主入口
  * Index 首页
  * StudyReact  react学习笔记板块
    * Hello hello world
    * JsxSyntx  Jsx语法
    * Comp  组件
    * PropsChildren 
    * ProptypesEx 
    * Domc  获取真实dom
    * Statec  状态机
    * Formc from操作
    * Lifec 生命周期
    * Ajaxc 数据请求


  项目目录
 ===
* app  开发环境入口文件
  * components  主要组件入口
    * modules
      * example.js
      * header.js
      * tips.js
    * service
      * menu.js
    * app.js
    * code.js
    * study.js
  * less
  * main.js
  * routers.js
* build 予发布生产环境文件
* pageage.json   依赖保
* webpack-config.json webpack配置
  





  安装
 ===
  项目地址：（git clone）
 
    https://github.com/healen/study-react.git

### 注意：
    npm install(安装包依赖)

    webpack 

    开启服务器查看
  
  构建：
 ===
 webpack 提供一个官方命令行工具，可用于快速搭建大型单页应用（SPA）。该工具提供开箱即用的构建工具配置，带来现代化的前端开发流程。只需几分钟即可创建并启动一个带热重载、保存时静态检查以及可用于生产环境的构建配置的项目。
  
### 使用步骤： <br>
    1)全局安装，npm install -g webpack 
    2)创建一个基于webpack模板的应用。
    3)执行webpack
    
 
### 优点： <br>
 
 * 代码热更新，修改代码之后，网页无需主动点击刷新页面，自动刷新改变，解放双手
 * react 为虚拟dom，框架内部为fd公司牛掰的算法，所以执行速度更快
 * less，为更高效的编写css样式做下了很好的铺垫
 * babel，可以放心的去使用ES6语法，自动编译成ES5  
 * 无论是stylus、scss还是less，均可以任性使用。本人熟悉less，此项目用less预处理
 * react生成的项目目录，主要工作在build目录，重心在components
  
  交互(AJAX)
  ===
    React的版本，处理http请求，不依赖任何插件，这里选择了两种方案，一种是依赖jquery的一种是fetch

  路由（React-Router）
  ===
  React-router是react的路由系统，可以用来创建单页应用。基本思想是在主页面中引入标签，然后定义路由，把router挂在到app上，然后把各个子页面渲染到view里面。
  
  
  说明：
  ===
  本项目是我初学React的一个练手项目，并不成熟，不免出现兼容性问题以及一些未知的bug，还请路过的大神指点一二，如果有正在学习React的小伙伴，可以加我好友，互相学习！
  
  QQ：449422301
---
  微信：449422301
---
