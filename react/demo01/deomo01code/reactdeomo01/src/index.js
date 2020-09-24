// index  是 react 的 入口文件

// 引入react 的核心的模块了

/**
 * react
 */
import React from 'react';
/**
 * react-dom
 */
import ReactDom from 'react-dom';

import App from './App';

import storyageUtils from './utils/storageUtils'
import memoryUtils from './utils/memoryUtils'


/**
 * ReactDom.render 渲染组件标签到html中的方法
 * 参数1 ： 要渲染的组件标签
 * 参数2 ： 要将组件标签渲染到哪里去
 */

// 读取loacl中 保存 user
// 保存到内存中

const user = storyageUtils.getUser()
memoryUtils.user = user

ReactDom.render(<App />, document.getElementById('root'));
