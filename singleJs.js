//----- 数组去重
const uniqueArr = arr => [...new Set(arr)]
// console.log(uniqueArr([1,2,3,4,5,3,4,5]))

//----- 从url获取参数并转为对象
const getParams = url => JSON.parse(`{"${decodeURI(url.split("?")[1]).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"')}"}`)
// console.log(getParams("https://www.google.com.hk/search?q=js+md&newwindow=1"))

// 检查对象是否为空
const isEmpty = obj => Reflect.ownKeys(obj).length === 0 && obj.constructor === Object;

// 反转字符串
const reverse = str => str.split('').reverse().join('');

// 生成随机十六进制 生成随机颜色
const randomHexColor = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`

// 检查浏览器当前选项卡是否在后台
const isTabActive = () => !document.hidden;

// 检测元素是否处于焦点
// activeElement 属性返回文档中当前获得焦点的元素。
const elementIsInFocus = (el) => (el === document.activeElement);

// 检查设备类型
// 使用navigator.userAgent 判断是移动设备还是电脑设备：
const judgeDeviceType = () => /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|OperaMini/i.test(navigator.userAgent) ? 'Mobile' : 'PC';

// 文字复制到剪贴板
// Clipboard API 它的所有操作都是异步的，返回 Promise 对象，不会造成页面卡顿。而且，它可以将任意内容（比如图片）放入剪贴板。
const copyText = async (text) => await navigator.clipboard.writeText(text)

// 获取选定的文本
const getSelectedText = () => window.getSelection().toString();

// 查询某天是否为工作日
const isWeekday = (date) => date.getDay() % 6 !== 0;

// 两日期之间相差的天数
const dayDiff = (date1, date2) => Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000);

// 将 RGB 转换为十六进制
const rgbToHex = (r, g, b) => "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);

// 计算数组平均值
const average = arr => arr.reduce((a, b) => a + b) / arr.length



