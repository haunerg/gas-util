export default {
  /* 首字母大写 */
  capitalizeEveryWord: str => str.replace(/\b[a-z]/g, char => char.toUpperCase()),
  // 去除前后空格
  trim(str){
    if (Object.prototype.toString.call(str) === '[object String]') {
      return str.trim()
    }
    return str
  }
}