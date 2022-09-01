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
 *  path:这是用于提取文件名的文件路径。
 *  extension:它是一个可选的文件扩展名，将从返回的字符串中删除扩展名
 */
const filename = path.basename('./index.js', '.js');
console.log('filename: ', filename);

/**
 * path.extname(path, extension) 获取文件路径的扩展名部分
 *  path:这是用于提取文件名的文件路径。
 */
const extname = path.extname('./index.js');
console.log('extname: ', extname);
