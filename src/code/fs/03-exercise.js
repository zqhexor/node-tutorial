const fs = require('fs');
const path = require('path');

fs.readFile(path.join(__dirname, '../../files/原始成绩.txt'), 'utf8', (err, dataStr) => {
  // console.log(err, dataStr);
  if (err) {
    return console.log('读取文件失败！' + err.message);
  }
  const data = dataStr.split(' ');
  let result = data.reduce((pre, cur) => {
    const i = cur.replace('=', '：');
    return pre + i + '\r\n';
  }, '');
  result = result.slice(0, result.length - 3);

  fs.writeFile(path.join(__dirname, '../../files/整理后的成绩.txt'), result, (err) => {
    // console.log(err);
    if (err) {
      return console.log('文件写入失败！' + err.message);
    }
    console.log('文件写入成功！');
  });
});
