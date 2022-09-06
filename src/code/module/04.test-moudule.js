/**
 * Tips:
 *  1.使用 require() 方法加载其他模块时，会执行被加载模块中的代码
 *  2.在使用 require() 加载用户自定义模块时，可以省略 .js 后缀名
 *  3.使用 require() 导入一个自定义模块时，得到的成员就是，那个模块通过 module.exports 指向的对象
 */
const module1 = require('./01.module1');
console.log('module1: ', module1); // {}

const module2 = require('./02.module2');
console.log('module2: ', module2);

const module3 = require('./03.module3');
console.log('module3: ', module3);
