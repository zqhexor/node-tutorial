/**
 * 练习：提取html文件中的css和jss，分离文件
 */
const fs = require('fs');
const path = require('path');

// 01.创建匹配style和script标签的正则
const styleReg = /<style>[\s\S]*<\/style>/;
const scriptReg = /<script>[\s\S]*<\/script>/;

// 02.使用fs模块读取需要被处理的html文件
fs.readFile(path.join(__dirname, '../../document/clock.html'), 'utf8', (err, dataStr) => {
  if (err) return console.log('读取文件失败！' + err.message);
  console.log('读取文件成功！' + dataStr);
  // 03.resolveCss
  resolveCss(dataStr);
  // 04.resolveJs
  resolveJs(dataStr);
  // 05.resolveHtml
  resolveHtml(dataStr);
});

/**
 * 正则补充知识：
 *  方法一：
 *    regObj.exec(str) 用于检索字符串中的正则表达式的匹配
 *    该函数返回一个数组，其中存放匹配的结果。如果未找到匹配，则返回值为 null。
 *  方法二：
 *    stringObj.replace(regexp/substr,replacement) 它的返回值是一个新的字符串，并没有更改原有字符串，是用 replacement 替换了 regexp 的第一次匹配或所有匹配之后得到的
 *    regexp/substr 必需。字符串中要替换的子串或正则RexExp（old）
 *    replacement 必需。替换文本或生成替换文本的函数（new）
 */
const resolveCss = (str) => {
  const result = styleReg.exec(str);
  const resultStr = result?.[0] ?? '';
  const newCss = resultStr.replace('<style>', '').replace('</style>', '');
  /**
   * tips: fs.writeFile()方法只能用来创建文件，不能用来创建路径
   *  故要先创建clock目录
   */
  fs.writeFile(path.join(__dirname, '../../files/clock/index.css'), newCss, (err) => {
    if (err) return console.log('写入 CSS 样式失败！' + err.message);
    console.log('写入 CSS 样式成功！');
  });
};

const resolveJs = (str) => {
  const result = scriptReg.exec(str);
  const resultStr = result?.[0] ?? '';
  const newJs = resultStr.replace('<script>', '').replace('</script>', '');
  fs.writeFile(path.join(__dirname, '../../files/clock/index.js'), newJs, (err) => {
    if (err) return console.log('写入 JS 失败！' + err.message);
    console.log('写入 JS 成功！');
  });
};

const resolveHtml = (str) => {
  const newHtml = str.replace(styleReg, '<link rel="stylesheet" href="./index.css" />')
    .replace(scriptReg, '<script src="./index.js"></script>');
  fs.writeFile(path.join(__dirname, '../../files/clock/index.html'), newHtml, (err) => {
    if (err) return console.log('写入 Html 失败！' + err.message);
    console.log('写入 Html 成功！');
  });
};
