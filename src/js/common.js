export default {
  // 是否为对象
  isObject(value) {
    const type = typeof value
    return value !== null && (type === 'object' || type === 'function')
  },

  // 是否为数组
  isArray(value) {
    const _isArray =
      Array.isArray || (_arg => Object.prototype.toString.call(_arg) === '[object Array]')
    return _isArray(value)
  },

  // 是否为字符串
  isString(value) {
    return Object.prototype.toString.call(value) === '[object String]'
  },

  // 是否为数字
  isNumber(value) {
    return typeof value === 'number' && !isNaN(value)
  }
}