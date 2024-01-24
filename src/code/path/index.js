const path = require('path');
/**
 * __dirname 表示当前文件所处目录
 */

const pathA = __dirname;
console.log('pathA: ', pathA);

/**
 * path.join() 拼接路径
 */
const pathB = path.join('/a/b', './c', 'd/e', '../f');
console.log('pathB: ', pathB);

/**
 * path.basename(path, extension) 获取文件路径的文件名部分
*   path:这是用于提取文件名的文件路径。
 *  extension:它是一个可选的文件扩展名，将从返回的字符串中删除扩展名
 */
const filename = path.basename('/abc/index.js', '.js');
console.log('filename: ', filename);

/**
 * path.extname(path, extension) 获取文件路径的扩展名部分
 *  path:这是用于提取文件名的文件路径。
 */
const extname = path.extname('./index.js');
console.log('extname: ', extname);

/**
 * path.dirname(path, extension) 获取文件路径的目录名称
 */
const dirname = path.dirname('/abc/efg/index.js');
console.log('dirname: ', dirname);

/**
 * path.resolve([...paths]) 将一系列路径或路径段解析为绝对路径
 * 如果没有path传递任何段，path.resolve()将返回当前工作目录的绝对路径。
 */
const resolve = path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif');
console.log('resolve: ', resolve);