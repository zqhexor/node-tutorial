const childProcess = require('child_process');
const util = require('util');
const path = require('path');

// 利用命令行进行拷贝
function copy(source, target, callback) {
  childProcess.exec(
    util.format('cp -r %s/* %s', source, target),
    callback
  );
}

copy(path.resolve(__dirname, '../../files'), path.resolve(__dirname, '../../files2'), (err) => {
  if (err) {
    console.log('复制失败');
    return;
  }
  console.log('复制失败');
});
