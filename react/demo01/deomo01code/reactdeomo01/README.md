This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify


yarn 命令
npm 命令
cnpm 命令

项目开发准备
    1 描述项目
    2 技术选型
    3 api接口  接口文档  测试文档


启动项目开发
1 使用react脚手架创建项目
2 开发环境运行  npm start
3 生产环境 打包运行  npm run bulid  serve build

git管理项目



1 项目目录介绍
src 
    index.js   入口js
    APP.js     应用的根组件
    api        ajax相关
    assert     公共资源
    Components 非路由组件
    config     配置
    pages      路由组件
    utils      工具模块


2 引入 antd
    1 npm install antd
    2 实现组件的按需打包
        1  npm install react-app-rewired customize-cra  babel-plugin-import
        2 定义加载配置的 js 模块  config-overrides.js
            const { override,fixBableImprots} = require('customize-cra');
            module.exports = override(
                // 针对 antd 实现按需打包 ：根据import 来打包 {=使用 babel-plugin-import}
                fixBableImprots('import',{
                    libraryName: 'antd',
                    libraryDirectory:'es',
                    style:'css',  // 自动打包相关的样式
                }),
            );
        3 修改 pagage.json
            "scripts": {
            "start": "react-app-rewired start",
            "build": "react-app-rewired build",
            "test": "react-app-rewired test",
            "eject": "react-scripts eject"
            },

    3 自定义 antd 主题
        1 npm install less less-loader
        2 修改 config-overrides.js 中的 less 配置
                const { override, fixBabelImports, addLessLoader } = require('customize-cra');
 
                module.exports = override(
                fixBabelImports('import', {
                    libraryName: 'antd',
                    libraryDirectory: 'es',
                    style: true,
                }),
                addLessLoader({
                    javascriptEnabled: true,
                    modifyVars: { '@primary-color': '#1DA57A' },
                }),
                );
        注意： less  和  less-loader 的版本     
    4 引入路由
        1 react-router-dom
        2 react-router
        3 npm install react-router-dom
    5 配置路由  搭建路由结构
        1 路由分析
            1 前台路由
                登陆
                    /login
                    /login.jsx
                主界面
                    admin.jsx
        2 创建路由组件文件
        3 配置路由
            1 在  app.js中 配置路由
    6 login组件布局
        1  reset样式文件
            reset  GitHub  jgthms/minireset.css
        2  antd 表单组件
            1 具有 数据收集 校验  和 提交功能 的表单 包含 复选框  单选框 输入框 下拉选择框  等元素
            2 前台表单验证
                用户名：
                    1 必须输入
                    2 必须大于4位
                    3 必须小于12位
                    4 必须是英文 数字 或者 下划线 组成
            3 收集表单输入数据
    7 前台表单验证  form 的声明式验证
        1 输入时验证
            1 使用antd提供的验证规则
            2 使用自定义验证规则

        2 form 的统一验证
            1 提交时验证

    8 高阶函数

    9 高阶组件

    10



8 启动 后台  使用  postman 测试接口
    1 接口的文档
        1 容联  云通讯  短信服务
        2 请求url
        3 请求参数
        4 请求方式
    2     
9 封装 axios 定义 ajax 函数请求模块
    1 封装 ajax 请求模块
    2 npm install axios
    3 
10 配置代理 解决 Ajax 请求跨域的问题
    1 跨域的三种可能性
         1 协议名
         2 主机名
         3 端口号
    2 jsonp get请求
    3 代理
             浏览器 ---》代理服务器  ---》 目标服务器   
                        代理服务器接收3000的端口的请求
                        转发请求：
    4 配置转发的目标地址
        1 "proxy": "http://localhost:5000"                    
11 使用  async 和 await 简化 promise 的使用
    1 作用
        1 简化 promise 的使用
        2 不用使用  .then 来指定成功或者失败的回调函数
        3 已同步编码【没有回调函数了】方式 实现异步流程
        4 
    2 await

    3 async 
12  优化 Ajax　请求函数模块　统一处理请求异常
    １　在外层包一层 promise 对象
    2 请求出错是 不去 reject 而是直接 提示错误消息

13  登陆跳转  

14 维持登陆

15 自动登陆

16 


