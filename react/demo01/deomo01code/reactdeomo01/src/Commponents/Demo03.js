// 使用class关键字创建组件
// import React, { Component } from 'react'

// export default class Demo03 extends Component {
//     render() {
//         return (
//             <div>

//             </div>
//         )
//     }
// }

/**
 * 使用 class 创建组件 并传递 props 参数 并直接使用 this.props 访问
 *
 * 在 class 关键字 创建的组件中  如果想使用  外界传递过来的  props 属性  不需要接受 直接 通过 this.props.xxx 使用即可
 *
 * props 只读 不能 修改
 *
 */

import React, { Component } from "react";

export default class Demo03 extends Component {
  render() {
    return <div>1111111111111111111111111111111</div>;
  }
}
