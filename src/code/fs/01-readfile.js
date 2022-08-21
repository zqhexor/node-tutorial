const fs = require('fs');

/**
 * readfile
 * param1: 读取文件的存放路径
 * param2: 读取文件时候才用的编码格式
 * param3: 回调函数
 *  如果文件读取成功 err的值为null
 *  如果文件读取失败 err的值为错误对象， dataStr的值为undefined
 */
fs.readFile('../../files/input.txt', 'utf8', (err, dataStr) => {
  console.log(err, dataStr);
});
