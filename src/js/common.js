export default {
  // 是否为对象
  isObject(value) {
    const type = typeof value
    return value !== null && (type === 'object' || type === 'function')
  }
}