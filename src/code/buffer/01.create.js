/**
 * Buffer用于表示固定长度的字节序列，本质是一段内存空间没专门处理二进制数据
 *  大小固定且无法调整
 *  性能较好，可以直接对计算机内存进行操作
 *  每个元素的大小为1字节(byte)
 */

/**
 * 方式一:alloc
 */
const buf = Buffer.alloc(10);
console.log(buf);

/**
 * 方式二:allocUnsafe
 * 可能会包含旧的内存数据
 */
const buf_2 = Buffer.allocUnsafe(10);
console.log(buf_2);

/**
 * 方式三:from
 * 可将字符串和数组转换为Buffer
 */
const buf_3 = Buffer.from('hello');
console.log(buf_3);

const buf_4 = Buffer.from([1, 2, 3]);
console.log(buf_4);
