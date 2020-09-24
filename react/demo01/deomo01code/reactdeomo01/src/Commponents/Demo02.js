
/**
 * // 第二中创建组件的方式
 * 创建类 并通过 controctor  挂载实例属性
 */
// 并为组件传递 props 数据
import React, { Component } from 'react'


/**
 * js中的 类介绍
 */
//  传统面向对象 使用构造函数 创建对象

// function Demo02(name, age) {
//     this.name = name    通过new出来的实例 访问到的属性  叫做 实例属性
//     this.age = age

// }

// const d = new Demo02("111",2)


/**
 * 使用  calss  创建实例  并 通过constructor 挂载实例属性  实例属性
 */

// class Demo02 {
//     // 使用构造函数来接受参数
//     // 构造器的作用  就是 每当 new 对象的时候 先执行构造器中的代码  实例属性
//     // 
//     constructor(name,age) {
//         this.name = name   // 在构造器中 通过 this 分配的属性也可以叫做实例属性
//         this.age= age

//     }
// }
// const d2 = new Demo02("11111",156)


/**
 * 使用 static 创建静态属性
 *  通过 构造函数直接访问到的属性叫做  静态属性
 */

// class Demo02 {
//     // 使用构造函数来接受参数
//     // 构造器的作用  就是 每当 new 对象的时候 先执行构造器中的代码
//     // 
//     constructor(name,age) {
//         this.name = name   // 在构造器中 通过 this 分配的属性也可以叫做实例属性
//         this.age= age

//     }

//     static info = 'dddddddddd'  // 在class内部 通过 static 修饰的属性  就是 静态属性
// }
// const d2 = new Demo02("11111",156)

// // 静态属性
// // Demo02.info
// // 实例属性
// // d2.age

/**
 * 实例方法  和 静态方法
 */

// class Demo02 {
//     // 使用构造函数来接受参数
//     // 构造器的作用  就是 每当 new 对象的时候 先执行构造器中的代码
//     // 
//     constructor(name,age) {
//         this.name = name   // 在构造器中 通过 this 分配的属性也可以叫做实例属性
//         this.age= age

//     }

//     static info = 'dddddddddd'  // 在class内部 通过 static 修饰的属性  就是 静态属性
// }
// const d2 = new Demo02("11111",156)


/**
 * 总结：
 * class中只能写  构造方法  静态属性  静态方法  实例属性
 */




 /**
  * 使用 extends 实现 子类继承父类
  *   关键字  extends
  *    
  * 
  */


  /**
   * 子类访问父类的实例方法
   * 
   */


   /**
    * class 中 构造函数  cotroctor 中 super() 方法的使用
    * 
    * 使用继承之后
    * 必须使用 super()方法
    * super 是父类的 构造器
    * 其实就是父类中  构造器的引用
    * 
    * 
    */

/**
 * 为子类挂载独有的实例属性和实例方法
 */





export default Demo02