import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import memeryUtils from '../../utils/memoryUtils'
/**
 * admin主界面路由组件
 */
export default class admin extends Component {

    render() {
        const user = memeryUtils.user
        console.log(user)
        // 如果内存中没有存储 user  当前没有登陆
        if (user.username === undefined || user.password === undefined) {
            // 自动跳转 到 登陆
            return <Redirect to='/login' />
        }
        return (
            <div>
                Hello, {user.username}
            </div>
        )
    }
}
