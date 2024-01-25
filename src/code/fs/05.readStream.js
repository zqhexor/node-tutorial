/**
 * 复制文件： 流式读取和写入联系
 */
const fs = require('fs');
const path = require('path');

const rs = fs.createReadStream(path.resolve(__dirname, '../../files/春夜喜雨.txt'));
const ws = fs.createWriteStream(path.resolve(__dirname, '../../files/春夜喜雨2.txt'));

// 方式一
// rs.pipe(ws);

// 方式二
// 绑定 data 事件（每个chunk 65536字节 => 64KB）
rs.on('data', chunk => {
  console.log(chunk.toString());
  ws.write(chunk);
});

rs.on('end', () => {
  ws.end();
  console.log('文件复制完成');
});
