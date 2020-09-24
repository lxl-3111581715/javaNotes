var ojb = {"name":"lxlx","age":"18","gender":"汉"};

// ja中的对象 只有 js  能识别

// 将js对象  转换为 任何语言都能识别的信息

// 字符串  

// JSON 就是 特殊格式的  字符串 

// 好处 这个字符串可以被任意的语言 并且可以转换为任意语言中的对象

// 在开发中用来数据的传递

// javasript object notation js对象表示法

// js的格式和 json 的 格式一样  json中 属性名 必须加 双引号  其他的 js 一致

/**
 * json分类
 *  1 对象
 *    {}
 *  2 数组
 *    []
 * 
 * 3 json 中允许的 值  不能有函数 
 * 
 * 
 */

 /**
  * 1 将JSON字符串转换为对象
  * 2 js中的工具类 JSON
  * 3 方法   JSON.parse()
  */
 var ojb1 = '{"name":"lxlx","age":"18","gender":"汉"}';

 // 将 JSON 对象转换为 js对象  

 var obj2 = JSON.parse(ojb1);
 console.log(obj2);


 /**
  * 将js对象 转换为 JSON 字符串
  * 
  * 1 方法： JSON.stringify(ojb3);
  */
 var ojb3 = {name:"lxlx",age:"18",gender:"汉"};

 var obj4 = JSON.stringify(ojb3);
 console.log(obj4);


 /**
  * eval()
  *     这个函数可以用来执行 一段字符串形式的代码  并将执行结果返回
  *     执行得代码块中  有 {}  则会当作 代码块处理
  * 
  *     解决：  使用 ()  处理
  *     
  */
 var str = "alert('1211');";
 eval(str);



 

