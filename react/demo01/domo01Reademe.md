1 react脚手架安装和创建项目

1.1 脚手架的安装
安装 命令  ： npm install create-react-app -g

1.2 使用命令差创建项目
命令 ： create-react-app 项目名

1.3 进入项目目录

1.4 启动项目
npm start

2 项目准备
2.1  index.js react的入口文件
2.2  引入核心的模块
2.3  把对一个的内容渲染到id为root的标签上
2.4  hello world 程序展示


3 vscode中设置js文件中识别 标签
incode Lanuages

    "elemnet.includeLanuages":{
        "javascript":"javascriptreact"
    },
    "element.tiggerExpansionOnTab": true,

4 书写第一个 react  组件
4.1 根标签
4.2 

5 JSX语法的注意事项
    1 className
    2 style={{}}
    3 导入组件
    4 导入样式  css文件  直接导入路径
    5 


6 虚拟dom和原生dom的区别：
    1 虚拟dom属性更少  解析更高效

7 jsx 语法中 插入 变量 三元运算符 和 数组
    1 插入变量值  {} 
    2 三运算符的写法
    3 map遍历的写法
        list.map((value,key)=>{
                return(
                    <li>{value}</li>
                )
        })
        value : 是数组中的每一个元素
        key ： 是每一个元素的唯一标识
    4     

8  安装react的扩展
    1 rcc 创建类组件
    2 


9  事件的基本使用
    1 onClick={this.handleClick}
    2 constructor(){}
    3 super()
    4 组件的内部数据 this.state{}
    5 bind方法 改变 this的指向
    6 


10 react中的数据的 双向绑定
    1 e 
    2 e.traget
    3 e.traget.value

11 tab栏案例         


12 react 创建组件的俩种方式

