const fs = require('fs');

/**
 * fs.writeFile()
 * 方法有两个特点:1) 如果没有该文件，则尝试创建;2) writeFile是覆盖写入
 * param1: 要写的文件的路径，绝对和相对路径均可
 * param2: 要写入的字符串
 * param3: 字符集（可选，默认是utf8）
 * param4: 写入完成后触发的回调函数，该函数有一个参数 err
 *  如果文件写入成功 err的值为null
 *  如果文件写入失败 err的值为错误对象
 */

fs.writeFile('../../files/output.txt', '你干嘛~哈哈~哎呦~', (err) => {
  // console.log(err);
  if (err) {
    return console.log('文件写入失败！' + err.message);
  }
  console.log('文件写入成功！');
});
