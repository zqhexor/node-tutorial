/**
 * Tips:
 *  虽然 exports 和 module.exports 默认指向同一个对象，但是
 *    require() 模块时，得到的永远是 module.exports 指向的对象
 */
// 对象没改变，属性合并
module.exports.age = 12;

exports.userName = '王五';
