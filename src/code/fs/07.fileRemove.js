const fs = require('fs');
const path = require('path');

/**
 * fs.unlink(path, callback)
 */
fs.unlink(path.resolve(__dirname, '../../files/春夜喜雨2.txt'), (err) => {
  if (err) {
    console.log('文件删除失败！');
    return;
  }
  console.log('文件删除成功！');
});

/**
 * fs.rm(path[, options], callback) node 14.4
 *  recursive 默认false 是否支持递归删除
 */
fs.rm(path.resolve(__dirname, '../../files/春夜喜雨2.txt'), (err) => {
  if (err) {
    console.log('文件删除失败！');
    return;
  }
  console.log('文件删除成功！');
});
