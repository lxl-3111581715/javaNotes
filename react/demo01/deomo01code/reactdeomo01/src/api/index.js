/**
 * 包含应用中 所有 接口请求函数的模块
 *  能力 ： 根据接口文档定义接口请求
 */


//  // 统一暴露
//  export default {
//     xxx(){

//     },
//     yyy(){

//     }

//  }

//  // 分别暴露
//  export default xxx(){

//  }

// import ajax from './ajax'

const BASE = ''
/**
 * 登录的接口
 * @param {*} username 
 * @param {*} password 
 */
export const regLogin = (username, password) => {
    return ajax(BASE+'/login', { username, password }, 'POST')
}

// export const regLogin = (username, password) => {
//     return ajax('/login', { username, password }, 'POST')
// }
