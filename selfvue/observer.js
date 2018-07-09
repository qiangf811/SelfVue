const Dep = require('./dep')

class Observer {
  constructor (data) {
    this.defineData(data)
  }
  defineData (obj) {
    if (!obj || typeof obj !== 'object') {
      return
    }
    Object.keys(obj).forEach(key => {
      this.defineReactive(obj, key, obj[key])
    })
  }
  defineReactive (obj, key, val) {
    this.defineData(val)
    let dep = new Dep()
    Object.defineProperty(obj, key, {
      configurable: true,
      enumerable: true,
      set: newVal => {
        if (val !== newVal) {
          console.log(key + '改变了', val + '变成了' + newVal)
          val = newVal
          dep.notify()
        }
      },
      get: () => {
        if (Dep.target) {
          dep.addSub(Dep.target)
        }
        return val
      }
    })
  }
}

module.exports = function (data) {
  return new Observer(data)
}
