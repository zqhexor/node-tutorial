const fs = require('fs');
const path = require('path');

/**
 * fs.readFile(filename[, options], callback)
 *  filename: 要读取文件的存放路径
 *  options: 读取文件时候采用的编码格式（可选，默认二进制）
 *  callback: 回调函数
 *    如果文件读取成功 err的值为null， dataStr的值为文件内容
 *    如果文件读取失败 err的值为错误对象， dataStr的值为undefined
 */
/**
 * __dirname 表示当前文件所处目录
 * path.join()
 */
fs.readFile(path.join(__dirname, '../../files/input.txt'), 'utf8', (err, dataStr) => {
  // console.log(err, dataStr);
  if (err) {
    return console.log('读取文件失败！' + err.message);
  }
  console.log('读取文件成功！' + dataStr);
});

/**
 * fs.readFileSync(filename[, options]) 同步读取文件
 *  filename: 要读取文件的存放路径
 *  options: 读取文件时候采用的编码格式（可选，默认二进制）
 *    如果文件读取成功 返回文件内容
 *    如果文件读取失败 抛出异常
 */
try {
  const result = fs.readFileSync(path.join(__dirname, '../files/input.txt'), 'utf8');
  console.log('result: ', result);
} catch (error) {
  console.log('同步读取文件失败！' + error.message);
}
