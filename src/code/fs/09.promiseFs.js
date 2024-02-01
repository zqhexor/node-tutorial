const fsPromises = require('fs/promises');
const path = require('path');

const init = async() => {
  try {
    // 创建一个控制器对象,通过使用AbortSignal对象完成与异步操作的通信
    const controller = new AbortController();
    // 返回一个AbortSignal对象实例，可用于与异步操作通信或中止异步操作（只读）
    const { signal } = controller;
    const promise = fsPromises.readFile(path.resolve(__dirname, '../../files/input.txt'), { signal });

    // Abort the request before the promise settles.
    // controller.abort();

    const data = await promise;
    console.log(data.toString());
  } catch (err) {
    // When a request is aborted - err is an AbortError
    console.error(err);
  }
};

init();
