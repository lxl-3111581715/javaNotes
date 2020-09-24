/**
 * 用来进行 local 数据进行 存储管理的工具模块
 */

 const USER_KEY = 'user_key'
export default {
    /**
     * 保存 user
     * 登陆的时候存起来
     */
    saveUser(user) {
        localStorage.setItem(USER_KEY, JSON.stringify(user))

    },

    /**
     * 读取user
     */
    getUser() {
        return JSON.parse(localStorage.getItem(USER_KEY) || '{}')
    },

    /**
     * 删除user
     */

     removeUser(){
         localStorage.removeItem(USER_KEY)
     }
}