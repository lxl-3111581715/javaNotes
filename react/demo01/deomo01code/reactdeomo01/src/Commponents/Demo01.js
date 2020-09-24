// 第一中创建组件的方式
/**
 * 使用构造函数创建组件
 */
// 并为组件传递 props 数据
import React, { Component } from 'react'


function Demo01(props){
    /**
     * 组件中的 props 永远都是 只读的  不能被重新赋值
     * 
     */
    console.log(props)
    return (
        <h1> 第一中创建组件的方式 并为组件传递 props 数据</h1>
    )
}

export default Demo01