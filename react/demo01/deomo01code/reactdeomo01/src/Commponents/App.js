// 组件化开发  react项目用es6模块化规范编写
// 引入核心模块
import React from "react";
import Demo01 from "./Demo01";
import Demo02 from "./Demo03";
// 定义一个组件

class App extends React.Component {
  render() {
    const dog = {
      name: "大黄",
    };
    return (
      // <Demo01   name={dog.name} />
      <Demo02 />
    );
  }
}
// 导出组件
export default App;
