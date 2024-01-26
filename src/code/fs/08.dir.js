const fs = require('fs');
const path = require('path');

/**
 * 创建文件夹
 * fs.mkdir(path[, options], callback)
 *  path: 路径
 *  options:
 *    recursive 默认false 是否支持递归创建
 *    mode
 *  callback：
 */
fs.mkdir(path.resolve(__dirname, '../../files/a/b/c'), { recursive: true }, (err) => {
  if (err) {
    console.log('文件夹创建失败');
    return;
  }
  console.log('文件夹创建成功');
});

/**
 * 读取文件夹下的内容
 * fs.readdir(path[, options], callback)
*  path: 路径
 *  options:
 *    encoding  默认 utf-8
 *    withFileTypes 默认 false  设置为true，则files数组将包含 <fs.Dirent>对象
 *  callback：
 */
fs.readdir(path.resolve(__dirname, '../../files'), (err, files) => {
  if (err) {
    console.log('读取失败');
    return;
  }
  console.log(files);
});

/**
 * fs.rm(path[, options], callback) node 14.4
 *  recursive 默认false 是否支持递归删除
 */
fs.rm(path.resolve(__dirname, '../../files/a'), { recursive: true }, (err) => {
  if (err) {
    console.log('文件夹删除失败！');
    return;
  }
  console.log('文件夹删除成功！');
});
