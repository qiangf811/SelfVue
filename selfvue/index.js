const Observer = require('./observer')
const Watcher = require('./watcher')
module.exports = class SelfVue {
  constructor (data, el, exp) {
    let self = this
    self.data = data
    Object.keys(data).forEach(key => {
      self.proxyKeys(key)
    })
    Observer(data) // 构造数据监视器
    el.innerHTML = self.data[exp] // 初始化模板数据的值
    Watcher(self, exp, value => { // 添加订阅者，监听具体字段
      el.innerHTML = value
    })
    return self
  }
  proxyKeys (key) {
    let self = this
    Object.defineProperty(this, key, {
      configurable: true,
      enumerable: true,
      get: () => {
        return self.data[key]
      },
      set: (newVal) => {
        self.data[key] = newVal
      }
    })
  }
}
