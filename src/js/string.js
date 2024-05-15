export default {
  /* 首字母大写 */
  capitalizeEveryWord: str => str.replace(/\b[a-z]/g, char => char.toUpperCase()),
  // 去除前后空格
  trim(str){
    if (Object.prototype.toString.call(str) === '[object String]') {
      return str.trim()
    }
    return str
  },

  // 字符串省略号处理
  textFlow(value='', len = 8) {
    let str = value + ''
    if (str.length > len) str = str.substring(0, len) + '...'
    return str
  },
  /************************************************************
   * @description		将字符串转换为全大写或全小写
   * @author			hauner
   * @param {String} str 传入的字符串
   * @param {Int} type 0转小写；1转大写
   * @date			2023-03-21
   ************************************************************/
  toLUGroup(str = '', type = 1) {
    str += ''
    let list = str.split('')
    let s = ''
    list.forEach(el => (s += el[type ? 'toUpperCase' : 'toLowerCase']()))
    return s
  }
}