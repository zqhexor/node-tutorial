const fs = require('fs');
const path = require('path');

/**
 * 流式写入适用于大文件写入或者频繁写入
 */
const ws = fs.createWriteStream(path.join(__dirname, '../../files/春夜喜雨.txt'));

ws.write('春夜喜雨\r\n');
ws.write('好雨知时节\r\n');
ws.write('当春乃发生\r\n');
ws.write('随风潜入夜\r\n');
ws.write('润物细无声\r\n');

// 关闭通道（可选：脚本执行完成自动关闭）
ws.close();
