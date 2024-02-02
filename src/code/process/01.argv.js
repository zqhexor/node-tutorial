/**
 * process是一个全局变量，可通过process.argv获得命令行参数
 *  argv[0]固定等于NodeJS执行程序的绝对路径，
 *  argv[1]固定等于主模块的绝对路径，
 *  因此第一个命令行参数从argv[2]这个位置开始
 */

console.log(0, process.argv[0]);
console.log(1, process.argv[1]);
console.log(2, process.argv[2]);
console.log(3, process.argv[3]);
