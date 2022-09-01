const fs = require('fs');
const path = require('path');

/**
 * fs.writeFile(file, data[, options], callback)
 * 方法默认有两个特点:1) 如果没有该文件，则尝试创建;2) writeFile是覆盖写入（可以通过options去改变）
 * file: 要写的文件的路径，绝对和相对路径均可
 * data: 要写入的字符串
 * options:
 *  类型是string 字符集（可选，默认是utf8）
 *  类型是object 包含 {encoding, mode, flag}。默认编码为 utf8, 模式为 0666 ， flag 为 'w'
 *    w  以写入模式打开文件，如果文件不存在则创建;
 *    w+ 以读写模式打开文件，如果文件不存在则创建;
 *    a  以追加模式打开文件，如果文件不存在则创建;
 *    a+ 以读取追加模式打开文件，如果文件不存在则创建。
 * callback: 写入完成后触发的回调函数，该函数有一个参数 err
 *  如果文件写入成功 err的值为null
 *  如果文件写入失败 err的值为错误对象
 */
fs.writeFile(path.join(__dirname, '../../files/output.txt'), '你干嘛~哈哈~哎呦~', (err) => {
  // console.log(err);
  if (err) {
    return console.log('文件写入失败！' + err.message);
  }
  console.log('文件写入成功！');
});

/**
 * fs.writeFileSync(filename, data[, options]) 同步写入文件
 *  如果文件写入成功 err的值为null
 *  如果文件写入失败 err的值为错误对象
 */
try {
  fs.writeFileSync(path.join(__dirname, '../../files/outputSync.txt'), '你干嘛~哈哈~哎呦~', { flag: 'w+' });
  console.log('文件同步写入成功！');
} catch (error) {
  console.log('文件同步写入失败' + error.message);
}
