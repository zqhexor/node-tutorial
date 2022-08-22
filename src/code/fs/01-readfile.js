const fs = require('fs');

/**
 * fs.readfile()
 * param1: 要读取文件的存放路径
 * param2: 读取文件时候采用的编码格式（可选，默认二进制）
 * param3: 回调函数
 *  如果文件读取成功 err的值为null， dataStr的值为文件内容
 *  如果文件读取失败 err的值为错误对象， dataStr的值为undefined
 */
fs.readFile('../../files/input.txt', 'utf8', (err, dataStr) => {
  // console.log(err, dataStr);
  if(err) {
    return console.log('读取文件失败！' + err.message);
  }
  console.log('读取文件成功！' + dataStr);
});
