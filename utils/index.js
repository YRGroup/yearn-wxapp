const WxParse = require('../components/wxParse/wxParse.js');
const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const formatNewsTitle = (str) => {
  let reg = /^<.+>(.+)<.+>$/;
  return str.match(reg)
}

/*
@input arr html文本
@output array 输出的数组名
@that 页面指向  
*/
const parseHtml = (input, output, that) => {
  for (let i = 0; i < input.length; i++) {
    WxParse.wxParse('content' + i, 'html', input[i], that);
    if (i === input.length - 1) {
      WxParse.wxParseTemArray(output, 'content', input.length, that)
    }
  }
}
export {
  formatTime,
  formatNewsTitle,
  parseHtml
}