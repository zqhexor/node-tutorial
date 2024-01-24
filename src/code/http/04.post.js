const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
  let postData = '';

  req.on('data', (chunk) => {
    postData += chunk.toString();
  });

  req.on('end', () => {
    console.log('postData', postData);
    res.end('post received');
  });

  console.log('content-type', req.headers['content-type']);
});

server.listen(8083, () => {
  console.log('server is running at http://127.0.0.1:8083');
});
