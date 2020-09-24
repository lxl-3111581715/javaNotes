import React, { Component } from 'react'
/**
 * 配置路由组件
 * 1 BrowserRouter  没有  #   HashRouter  有 #
 * 2 Route
 * 3 Switch
 */
import { BrowserRouter, Route ,Switch} from 'react-router-dom'
/**
 * 引入路由组件
 */
import Login from './pages/login/logintest'
import Admin from './pages/admin/admin'
/**
 * 应用的根组件
 */
export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
            <Switch>
            <Route path='/login' component={Login}></Route>
            <Route path='/admin' component={Admin}></Route>
            </Switch>
            </BrowserRouter>

        )
    }
}
