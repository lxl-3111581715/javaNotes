import React, { Component } from 'react'
import { Form, Input, Button, message } from 'antd';

import { regLogin } from '../../api'
/**
 * 登陆的路由组件
 * 
 * 暴露包装过的组件
 */

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

class Login extends Component {
    /**
     * sign in  btn 的点击事件
     *  点击  sign in  收集表单数据
     */
    handleClick = () => {
        // e.preventDefault()
        // 得到form对象
        const form = this.props.form
        const { getFieldValue } = form
        // 获取表单的输入的数据
        const Username = form.getFieldValue('username')
        const password = form.getFieldValue('password')
        console.log('看看收集到的表单的数据', Username)
        console.log('看看收集到的表单的数据', password)
        /**
         * 统一验证 form 表单
         * 
         */
        this.props.form.validateFields(async (err, values) => {
            if (!err) {
                console.log('看看收集到的表单的数据33333333333', values)
                const { Username, password } = values
                // regLogin(username,password).then(
                //     response =>{
                //         console.log('城东了', response.data)
                //     }
                // ).catch(error => {
                //     console.log('失败了',error)
                // }

                /**
                 * 去掉 then
                 */

                // try {
                //     const response = await regLogin(username, password)
                //     console.log('请求成功', response.data)
                // } catch (error) {
                //     console.log('请求出错了', error)
                // }

                /**
                 * 优化 Ajax　请求函数模块　统一处理请求异常
                 */
                const response = await regLogin(username, password)
                console.log('请求成功', response.data)

                /**
                 * 请求成功不意外这登陆成功
                 */

                const result = response.data
                if (result.status === 0) {
                    // 提示登录成功
                    message.success('登陆成功')

                    // 跳转到管理界面
                    /**
                     * history
                     *  push()  跳转有记录
                     *  replace() 跳转不能回退                     *  
                     * 
                     */
                    this.props.history.replace(

                    )
                } else {
                    message.error(result.msg)
                }
            }
            else {
                console.log('校验失败！！', err)
            }
        })
    }
    /**
     * 密码的自定义校验
     */
    validatorPwd = (rule, value, callback) => {
        /**
         * callback 方法必须被调用
         *  callback()  表示验证通过
         *  callback('xxx)  表示 验证失败  并提示相应的文本
         */
        if (!value) {
            callback('密码必须输入')
        } else if (value.length < 4) {
            callback('密码长度不能小于4')
        } else if (value.length > 12) {
            callback('密码长度不能大于12')
        } else if (!/^[a-zA-Z0-9_]+$/.test(value)) {
            callback('格式错误')
        } else {
            callback() // 验证通过
        }
    }

    render() {
        // 得到一个具有强大功能的 form 对象
        const form = this.props.form
        const { getFieldDecorator } = form

        return (
            <div>
                <h1>我是登陆界面</h1>
                <Form {...layout} name="basic" onSubmit={this.handeleSubmit}>
                    <Form.Item label="Username" name="username">
                        {/* 使用 form 中的属性 */}
                        {/* 声明式验证
                                直接使用定义好的验证规则进行验证
                                
                        */}
                        {getFieldDecorator(   // 配置对象  属性名是一些特定的名称
                            'username', {
                            rules:
                                [
                                    { required: true, whitespace: true, message: '用户名必须输入' },
                                    { min: 4, message: '最小4' },
                                    { max: 12, message: '最大12' },
                                    { pattern: /^[a-zA-Z0-9_]+$/, message: '数字 字母 下划线' }
                                ],
                        }
                        )(<Input />)}
                    </Form.Item>
                    {/* 自定义验证
                            validator:
                    */}
                    <Form.Item label="Password" name="password" >
                        {getFieldDecorator(
                            'password', {
                            rules: [
                                {
                                    validator: this.validatorPwd
                                }
                            ]
                        }
                        )(<Input.Password />)}
                    </Form.Item>
                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit" onClick={this.handleClick}>
                            login in
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}
/**
 * 高阶组件
 *    包装 Form  组件 生成一个新的组件
 *     新组件会向Form 组件传递一个 强大的 对象属性  form
 * 
 * 高阶函数
 *        create()  返回的是一个函数
 */
const WrapLogin = Form.create()(Login)
export default WrapLogin
