// const { override,fixBableImprots} = require('customize-cra');
// module.exports = override(
//     // 针对 antd 实现按需打包 ：根据import 来打包 {=使用 babel-plugin-import}
//     fixBableImprots('import',{
//         libraryName: 'antd',
//         libraryDirectory:'es',
//         style:'css',  // 自动打包相关的样式
//     }),
// );

// 项目根目录下，新增文件 config-overrides.js
// const { override, fixBabelImports, addLessLoader } = require('customize-cra');

// module.exports = override(
// fixBabelImports('import', {
//   libraryName: 'antd',
//   libraryDirectory: 'es',
//   style: true,
// }),
// // 使用 less-loader 对源码中的 less 变量 进行 重新指定
// addLessLoader({
//     javascriptEnabled:true,
//     modifyVars:{ '@primary-color': '##1DA57A'}
// })
// );

const { override, fixBabelImports, addLessLoader } = require('customize-cra');
 
module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { '@primary-color': '#1DA57A' },
  }),
);