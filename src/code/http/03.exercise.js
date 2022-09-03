/**
 * 访问http://127.0.0.1:8082/clock/index.html
 * 可以访问到clock文件夹下的文件
 */

const fs = require('fs');
const path = require('path');
const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
  const url = req.url;
  let filePath = '';
  if (url === '/') {
    filePath = path.join(__dirname, '../../files/clock/index.html');
  } else {
    filePath = path.join(__dirname, '../../files/clock', req.url);
  }
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.log('读取文件失败');
      data = '<h1>404 Not Found</h1>';
    }
    res.setHeader('Content-Type', 'text.html;charset=utf-8');
    res.end(data);
  });
});

server.listen(8082, () => {
  console.log('server is running at http://127.0.0.1:8082');
});
