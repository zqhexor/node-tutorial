const http = require('http');
const querystring = require('querystring');

// 1.创建web服务器实例
const server = http.createServer();

// 2.为服务器实例绑定request事件
server.on('request', (req, res) => {
  // 客户端请求的url地址
  const url = req.url;
  // 客户端请求的method类型
  const method = req.method;

  const path = url.split('?')[0];
  // 提取query参数
  const query = querystring.parse(url.split('?')[1]);

  const str = `
  你的请求 url is ${url},<br/>
  and request method is ${method},<br/>
  and path is ${path},<br/>
  and query is ${JSON.stringify(query)},<br/>
  `;
  console.log(str);

  // res.setHeader()解决中文乱码问题
  res.setHeader('Content-Type', 'text/html;charset=utf-8');
  // res.end()，想客户端响应一些内容
  res.end(str);
});

// 3.启动服务器
/**
 * server.listen(port, cb)
 */
server.listen(8080, () => {
  console.log('server is running at http://127.0.0.1:8080');
});
