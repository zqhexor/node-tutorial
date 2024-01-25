/**
 * Buffer.toString() 与字符串的转换
 */
const buf = Buffer.from('Hello World', 'utf-8');
console.log(buf.toString());

/**
 * 通过[] 索引的方式更改
 */
const buf_2 = Buffer.from('hello');
// 用于进制转换，此处转为2进制
console.log(buf_2[0].toString(2)); // 110 1000
buf_2[0] = 95;
console.log(buf_2.toString()); // _ello


/**
 * 溢出：高位舍弃
 */
const buf_3 = Buffer.from('hello');
buf_3[0] = 361; // 舍弃高位 0001 0110 1001 => 0110 1001
console.log(buf_3[0].toString(2));

/**
 * 中文： utf-8的中文一个汉字占3个字节
 */
const buf_4 = Buffer.from('你好');
console.log(buf_4);
