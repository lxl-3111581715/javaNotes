/**
 * 能发送异步 函数请求的 ajax  模块
 * 
 * 1 npm install axios
 * 2 函数的返回值是 promise 对象
 */

import axios from 'axios'
import { message} from 'antd'

export default function ajax(url, data = {}, type = 'GET') {
    /**
     * 优化 Ajax　请求函数模块　统一处理请求异常
     */
    return new Promise((resolve, reject) => {
        let promise
        // 执行异步 ajax 请求
        if (type === 'GET') {
            promise = axios.get(url, {
                params: {
                    data
                }
            })
        } else {
            promise = axios.post(url, data)
        }
        // 如果成功了  调用 resolve(value)
        promise.then(response => {
            resolve(response)
        }).catch (error => {
            message.error('请求出错了', error.message)
        })
    // 如果失败了 不调用 reject(reason)  提示异常的信息 
})
}