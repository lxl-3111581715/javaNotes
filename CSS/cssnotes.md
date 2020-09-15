# ccs基础

## 1  css01
    ### 1 分类：
        1 内联样式 行内样式
        2 内部样式表  只能对一个网页有效
        3 外部样式表  
            再网页的文件中引用外部css样式表
            <link rel="stylesheet" href="">
    ### 2 css编写的位置
        1 行内
        2 heade 的 style 标签中
        3 外部css文件
    ### 3 css选择器
        1 标签选择器



## 2 css语法

```
1  CSS注释
2  选择器  声明块
    <style>
        /* 
            选择器【selectors】：声明块
            声明块： 
                1 声明由名值对组成
                2 ：连接  ;结尾   
        */
    </style>
```

## 3  基本选择器

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!-- 引入外部样式表 -->
    <link ref="stylesheet" href="./css.css">
    <!-- 内部样式表 -->
    <!-- <style>
        /* css选择器 */
        /* 标签选择器 */
        p{
           color:red;font-size:20px;
        }
    </style> -->
</head>
<body>
    <!-- 
css声明块key:
    color: 字体颜色
    font-size: 字体大小
-->
    <!-- 元素选择器
        1 根据【标签名】选中指定的元素
-->
    <!-- id选择器 #
    1 根据一个元素的id 选择一个元素
    2 id唯一  
    3 不能重复
    2 语法：
        #id属性值
    -->
    <p id="pred"></p>
    <!-- 类选择器 .
    1 根据类名进行选择
    2 可以设置相同的类名
    3 语法：
        .类名
    -->
    <!-- 通配选择器
            1 选中页面中所有的元素
            2 语法
                *{

                }
        -->
    <!-- 复合选择器  交集选择器
            1 交集选择器中 如果有元素选择器 必须以元素选择器开头
        -->
    <!-- 选择器分组  并集选择器
        1 同时选择多个选择器对应的的元素
        2 
    -->
    <!-- 关系选择器
            1  子元素选择器
                语法： 父元素>子元素{

                }
        -->
    <!-- 后代元素选择器
            1 作用  选中指定元素内的指定后代元素
            2 语法：祖先 后代
            3 
        -->
    <!-- 兄弟元素选择器
            1 选择下一个兄弟  选择前一个后面的一个元素
            2 语法：
                前一个+下一个
            3 语法：
                前一个+下一个
                选择前一个后面所有的兄弟元素    
        -->
    <!-- 属性选择器 attribute selectors
            1 [属性名] 选择含有指定属性的元素
            2 [属性名=属性值] 选择含有属性名等于属性值的元素 全等于
            3 [属性名^=属性值] 选择属性值以指定值开头的元素 开头匹配即可
            4 [属性名$=属性值] 选择属性值以指定值结尾的元素 结尾匹配即可
            5 [属性名*=属性值] 选择属性值存在的元素 只要有匹配即可
        -->
    <!-- 伪类选择器
        1 伪类 
                1 不存在的类 特殊的类 用来描述一个元素特殊的状态
                2 伪类一般情况下使用 ： 开头
                3 first-child
                4 last-child
                5 nth-child(n) 选中第n个元素
                    特殊的值： n : 0往后的都选
                              even/2n: 选中偶数
                              odd/2n+1：选中基数的元素
                6 以上伪类是根据所有的元素排序
                7 从同类型里找 只找相同类型中的
                    3 first-of-child
                    4 last-of-child
                    5 nth-of-child(n)
                8 否定伪类：
                    1 除了 将符合条件的元素剔除
                    2 
        2 伪元素
        3 伪类选择器
        -->
    <!-- 超链接的伪类
                1 没访问过的链接 :link
                2 访问过的链接 :visited  只能修改链接的颜色
                3 鼠标滑过 :hover
                4 鼠标按下 :avtive
                -->
    <!-- 为元素选择器
                   1 伪元素    
                   2 表示页面中一些特殊的并不真实存在的元素’
                   3 伪类选择器用 :: 开头表示
                   常见伪类
                   4 ::first-letter  表示第一个元素
                   5 ::first-line 表示第一行
                   6 ::selection  表示给选中你的元素设置样式
                   7 ::before 表示元素起始的位置
                   8 ::after 表示元素最后的位置
                        结合content属性使用
                   9 伪元素不能被选中          
    -->
    <!-- 选择器优先级 -->
    <!--  -->
</body>
</html>
```

## 4 练习

```
https://flukeout.github.io/  
选择器练习
```



## 5  样式的继承

```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!-- 引入外部样式表 -->
    <link ref="stylesheet" href="./css.css">
    <!-- 内部样式表 -->

</head>

<body>
    <!-- 继承
            1 样式的继承  我们为一个元素设置的样式 同时也会被他的后代继承
            2 继承的设计是为了方便开发 
            3 并不是所有的样式都会被继承 
                背景
                布局
        -->
</body>
</html>
```

## 6 选择器的权重

```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!-- 引入外部样式表 -->
    <link ref="stylesheet" href="./css.css">
    <!-- 内部样式表 -->
</head>

<body>
<!-- 选择器的权重
        1 样式的冲突
            1 当用不同的选择器选中相同的元素，并且为相同的元素设置相同的样式
            2 此时发生了样式的冲突
            3 发生样式的冲突应用哪一个样式由选择器的权重决定
            4 选择器的权重排序
                    1 内联样式
                    2 id选择器
                    3 类选择器 伪类选择器
                    4 元素选择器
            5 权重可以相加计算 和最高的权重最高
            6 分组选择器的权重是单独计算的
            7 选择器的累加不会超过最大的权重值
            8 如果优先级计算相等 样式最后的覆盖前面的
            9 通配选择器的优先级为0 
            10 继承的样式没有优先级
            11 可以在样式的后面加  !import  此时优先级最高
            12 在开发中慎用
            13     
-->
</body>

</html>
```

## 7 像素和百分比

```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!-- 引入外部样式表 -->
    <link ref="stylesheet" href="./css.css">
    <!-- 内部样式表 -->

</head>

<body>
<!-- 
    像素和百分比
        1 长度单位：
            像素：

            百分比：
               1  可以设置为相对于父元素属性的百分比‘
               2  设置百分比可以让子元素相对于父元素变化
        2  
        3 em
            1 10em  代表 160像素
            2 相对于字体大小计算
            3 默认字体大小16px
            4 em 根据字体的大小变化
            5    
        4 rem 移动端的适配
            1 相对于自身字体大小
            2 相对于根元素的字体大小 html
 -->
</body>

</html>
```

## 8 颜色单位

```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!-- 引入外部样式表 -->
    <link ref="stylesheet" href="./css.css">
    <!-- 内部样式表 -->

</head>

<body>
<!-- 
    颜色单位
            1 在css中可以直接使用颜色名来设置颜色
            2 GRB值：
                通过三种颜色的不同的浓度来调配出不同的颜色’
                red green  bule
            3 每一种颜色的范围 0-255  0%-100%
            4 语法
                GRB(12,12,12) 关的三元色
            5 RGBA 
                a : 透明度 0 表示完全透明 .5表示半透明
            6 十六进制的RGB值 
                语法：#红色绿色蓝色
                    颜色浓度 00-ff
                    如果颜色俩位俩位重复可以简写    
            7 HSL值
                1   H 色相 0-360
                2   S 饱和度 颜色的浓度 0-100%
                3   L 亮度 0-100%
            8 HSLA值
                1 A 透明度                             
 -->
</body>
</html>
```

## 9   文档流

```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!-- 引入外部样式表 -->
    <link ref="stylesheet" href="./css.css">
    <!-- 内部样式表 -->

</head>

<body>
<!-- 
    布局：
        文档流：normal flow
         1 网页是一个多层的结构，一层压着一层
         2 一层一层设置样式 立体的结构
         3 用户看到的是平面结构
         4 这些层 中最底层的 叫做文档流
         5 我们创建的元素在文档流中的
         6 对于我们来说元素有俩个状态
            1 在文档流上
            2 不在文档流上
        7 块和行内元素在文档流中的特点：
            1 块 元素
                1 块元素在页面中总会独占一行、
                2 默认宽度:是父元素的全部
                3 默认高度:被子元素撑开
                4 自上向下垂直排列
            2 行内元素
                1 不会独占一行
                2 只占自身的大小 自左向右水平排列
                3 一行中不能容纳 换行继续自左向右
                4 宽度和高度都是被内容撑开
        8 当块和行内元素脱离了文档里之后
            1 特性会发生变换    
 -->
</body>

</html>
```

## 10 盒模型

```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!-- 引入外部样式表 -->
    <link ref="stylesheet" href="./css.css">
    <!-- 内部样式表 -->

</head>

<body>
    <!-- 盒模型
        box model
            1 布局
            2 css将页面所有的元素都设置了一个矩矩形的盒子
            3 将元素设置为矩形后 对应的页面就是讲矩形摆放到不同的位置
            4 盒子组成
                1 内容区 content 
                        元素中所以有的子元素和文本内容都在内容区中排列
                            内容区的大小由  width： height：俩个属性来设置
                2 内边距 padding 盒子的大小
                        1 内容区和边框之间的聚=距离是内边距
                        2 一共有四个方向上的内边距
                            1 padding-top
                            2 padding-left
                            3 padding-right
                            4 padding-bootom
                            5 padding 可有 1 2 3 4 个值
                        3 内边距的设置会影响到盒子的大小
                        4 背景颜色会延伸到内边距
                        5 盒子的可见框又盒子 边框 内边距 内容区一起组成
                3 边框 border
                    1 设置边框至少要三个属性
                        1 边框宽度 border-width
                                1 border-width；10px; 全部
                                2 border-width: 10Px.10px,10px,10px; 上右下左
                                3 border-width: 10Px.10px,10px; 上左右下
                                4 border-width: 10Px.10px; 上下 左右
                                5 border-top/right/bottom/left-wigth
                                6 不写有默认值
                        2 边框颜色 border-color 
                                1  border-top/right/bottom/left-color
                                2  可以指定四个方向的边框的颜色
                                3 不写有默认值
                        3 边框的样式 border-style
                                1  border-top/right/bottom/left-style
                                2 取值
                                    solid
                                    dotted
                                    dashed
                                    double
                                3 默认值none
                        4 border简写： 
                                1 border: 宽度 颜色 样式
                        5 bordre-xxx
                                1  宽度 颜色 样式       
                        4 边框的大小会影响盒子的大小
                        5 
                4 外边距 margin 俩个盒子的间距
                        1 不会影响盒子的大小 影响盒子实际占用网页空间的大小
                        2 影响盒子的布局
                        3 取值
                            margin-top : 设置一个正值 元素向下移动
                            margin-right：默认情况下无作用
                            margin-bootom： 元素在页面中
                            margin-left
                        4 设置左上 会移动元素本身 设置下右元素 会移动其他元素
                        5 可是设置负值 向相反的方向走
                        6 margin：上 右 下 左
                5 子元素在父元素中的水平方向上的布局
                        1 元素在其父元素中水平方向的位置
                        2 由以下几个元素 共同决定
                            1 margin-left   
                            2 border-left
                            3 padding-left
                            4 width
                            5 padding-right
                            6 border-right
                            7 margin-rigth
                        4 一个元素在父元素中的水平布局，必须满足以下等式
                            父元素内容区的宽度 = margin-left+ border-left+ padding-left+width+ padding-right+border-right+margin-rigt   
                        5 过度约束  margin-right
                        6 auto : 改变过度约束的值   auot的值
                        7 width的值默认就是 auto
                        8 如果宽度和一个外边距的值为 auto 那么宽度会调整为最大，auto的外边距为0
                        9 如果将宽度和外边距的值都设置为 auto 那么外边距都为0 宽度最大
                        10 如果将俩个外边距设置为 auto, 宽度固定值  那么会将外边距设置为相同的值
                                可以用来设置元素在父元素中水平位置居中
                        11 margin可以是负值     
                6 子元素的垂直方向上的布局
                        1 不设置高度 默认情况下父元素 的 内容 被子元素的高度撑开 
                        2 子元素高度超出父元素高度 子元素溢出
                        3 使用 overflow 来设置 父元素如何处理子元素的溢出
                            可选值： visible 默认值 子元素在父元素超出的部分默认显示
                                    hidden 溢出的内容裁剪        
                                    scroll 变为滚动内容 生成俩个滚动条
                                    auto 根据需要生成滚动条
                        4 overflow-x
                        5 overflow-y 
                7 外边距的折叠
                        1 垂直外边距的重叠
                             1 相邻的垂直方向上的外边距会发生重叠
                             2 兄弟元素 之间的 垂直相邻外边距 会取俩者中间的较大值  都是正值
                             3 如果一正一负 取和
                             4 都是负值  取绝对值较大
                             5 父子元素的相邻外边距 子元素的会传递给父元素（上外边距）
                             6 父子外边距的折叠会影响整体的布局
                8 行内元素的和模型
                        1 行内元素不支持设置宽度和高度
                        2 行内元素可以设置padding 但是垂直方向padding不会影响页面的布局
                        3 boder
                        4 margin
                        5 dispaly  用来设置显示元素的类型
                                1 inline： 设置为行内元素
                                2 block: 将元素设置为块元素
                                3 inline-block: 将元素设置为行内块元素
                                    行内块： 既可以设置宽高 又不会独占一行
                                4 none: 隐藏一个元素 none
                        6 visibility: 
                                1 hidden 隐藏 但是位置依然有     
                                2 visable  显示              
    -->
</body>
</html>
```

总结：

```
盒模型介绍

边框

外边距

内边距

子元素在父元素中的布局


```

![image-20200913063439060](C:\Users\31115\AppData\Roaming\Typora\typora-user-images\image-20200913063439060.png)

![image-20200913070103672](C:\Users\31115\AppData\Roaming\Typora\typora-user-images\image-20200913070103672.png)

## 11  浏览器的默认样式

```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!-- 引入外部样式表 -->
    <link ref="stylesheet" href="./css.css">
    <!-- 内部样式表 -->

</head>

<body>
<!-- 浏览器的默认样式
        1 通常情况 浏览器会给元素设置一些默认的样式
        2 默认样式的存在会影响页面的布局  通常情况下要去除默认的样式
        3 如何查看默认的样式
            1    
        4 去掉对应的外边距
        5 list-styel: none 去掉无序列表的项目符号 
        6 去掉浏览器的默认样式
            1 *{
                margin:0
                padding:0 
            }  
        7 常见的重置样式表
            1 自己找 github         
-->
</body>
</html>
```

## 12 联系1 【布局练习】

```2
1 
```

## 13 练习2 

```

```

## 14 盒子的大小

```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>document </title>
    <!-- 引入外部样式表 -->
    <link ref="stylesheet" href="./css.css">
    <!-- 内部样式表 -->
    <style>

    </style>

</head>

<body>
<!-- 
    盒子的大小;
        1 盒子可见框大小由内容区 内边距 边框 共同决定
        2 box-sizing: content-box; 
            1 用来设置盒子尺寸的计算方式 width height 
            2 context-box: 宽度和高度用来计算内容区的大小
            3 border-box:  width heigth 内容区 内边距 边框
 -->
</body>
</html>
```

## 15 轮廓阴影和圆角

```
	 <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>document </title>
    <!-- 引入外部样式表 -->
    <link ref="stylesheet" href="./css.css">
    <!-- 内部样式表 -->
    <style>
    </style>
</head>

<body>
    <!-- 
    轮廓  阴影
        1 outline : 
                1 用来设置元素的轮廓 用法 
                2 和boder一样
                3 不会影响课件框的大小
        2 box-shadow: 
                1 设置元素的阴影效果
                2 偏移量 偏移量 阴影的模糊效果 阴影颜色
        3 圆角
            1  属性
                1 border-radius:
                2 border-top-left-radius:
                3 border-top-right-radius:
                4 border-bottom-left-radius:
                5 border-bottom-rightradius:
            2 设置圆角的半径    
                1 12px
                2 可以有俩个方向上的半径
 -->
</body>

</html>
```

## 16 浮动特点

```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>document </title>
    <!-- 引入外部样式表 -->
    <link ref="stylesheet" href="./css.css">
    <!-- 内部样式表 -->
    <style>
    </style>
</head>

<body>
    <!-- 
        浮动的简介：
            1 通过浮动可以将元素向左侧或者向右侧移动
            2 float
               可选值
                     1 none； 默认值 元素不浮动
                     2 left:
                     3 right:
            3 元素设置设置浮动之后，水平布局的等式便不需要强制成立
            4 元素设置浮动之后 会完全从文档流中脱离 不再占用文档流的位置
            5 浮动元素会完全脱离文档流
            6 设置浮动都元素会向父元素的右侧  或者 左侧移动
            7 元素移动时 浮动元素默认不会从父元素中移除
            8 浮动元素想左或者向右移动的时候不会覆盖其他的浮动元素
            9 浮动元素的上面是一个没有浮动的元素 上不去、
        浮动的特点：
            1 浮动元素不会盖住文字 文字自动环绕再图片的周围
            2 元素脱离文档流后的特点 从文档流中脱离后 元素的特点也会发生变化
                    1 块元素：不再独占页面一行
                    2 块元素 元素的宽度默认为内容的宽度
                    3 行内元素 浮动后宽高生效
                    4 总结 ： 脱离文档流之后 不需要区分 块元素 和  行内元素
                    5            
 -->
</body>
</html>
```

## 17  浮动练习 【导航条】

```

```

## 18  网页的布局

```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>document </title>
    <!-- 引入外部样式表 -->
    <link ref="stylesheet" href="./css.css">
    <!-- 内部样式表 -->
    <style>
    </style>
</head>

<body>
    <!-- 
       网页的布局
            1 常见的网页布局
            2       
 -->
</body>

</html>
```

## 19 高度塌陷

```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>document </title>
    <!-- 引入外部样式表 -->
    <link ref="stylesheet" href="./css.css">
    <!-- 内部样式表 -->
    <style>
    </style>
</head>

<body>
    <!-- 
        高度塌陷
            1 原父元素不指定高度是跟随子元素的高度变化 子元素浮动以后 父元素的高度不能被撑开
            2 父元素高度塌陷之后 父元素下面的元素会自动的上移  导致页面布局混乱
            3 
        BFC:
            1 block fromatting context  块级格式化环境
            2 css中隐含的属性
            3 元素开启BFC后 该元素会变为一个独立的区域
            4 开启BFC后不会被浮动元素替代
            5 开启BFC 子元素和父元素的外边距不会被重叠
            6 开启BFC可以包含浮动的子元素
            7 可以通过特殊的方式开启 BFC
                1 给元素设置浮动
                2 将元素设置为行内块元素
                3 将元素的 overflow 设置为 非 visible 的值
                    1 hidden
                    2 auto
        BFC的演示:
            1             
 -->
</body>
</html>
```

## 20 clear  清除其他元素的浮动对当前元素的影响

```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>document </title>
    <!-- 引入外部样式表 -->
    <link ref="stylesheet" href="./css.css">
    <!-- 内部样式表 -->
    <style>
    </style>
</head>

<body>
    <!-- 
         clear
            1  如果我们不希望某一个元素因为其他元素的浮动而受到影响
            2  可以通过clear属性来清除浮动元素对于当前元素的影响
            3  clear 可选值：
                  1 left: 清除左侧 浮动元素 对当前元素的影响、
                  2 right： 清除右侧 浮动元素 对当前元素的影响
                  3 both: 清除俩测最大影响的一个元素的影响 
                  3 原理：
                    1 清除浮动以后浏览器会自动为元素添加一个外上边距 
                    2 
         clear 解决高端塌陷的问题：
            1 加html标签 
            2 clear
            3 
         使用 alter 伪类解决高度塌陷
            1 通过css加标签 原理和 加html标签一样
            1 ::after
            2 .box::agter{ // 创建伪类元素
                content:"hello",
                clear:both,
                dispaly:block,  // 将行内元素转换为块元素
            }              
 -->
</body>
</html>
```

## 21 clearfix

```

```

## 22 相对定位

```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>document </title>
    <!-- 引入外部样式表 -->
    <link ref="stylesheet" href="./css.css">
    <!-- 内部样式表 -->
    <style>
    </style>
</head>
<body>
    <!-- 
        定位的简介:
             1 positon
             2 相对定位：
                1 更加高级的布局手段
                2 通过定位可以将元素摆放在任意的位置
                3 可选值：
                     1  static 默认值 元素静止 没有开启定位
                     2  relative  相对定位
                     3  absolute  绝对定位
                     4  fixed 开启元素的固定定位
                     5  sticky 开启元素的粘滞定位
     -->
</body>
</html>
```

## 属性

```
1 font-size
2 color
3 width
4 height
5 loop
6 controls
7 backgroud-color
8 list-styel: none 去掉无序列表的项目符号 
```

