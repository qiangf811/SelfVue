const Dep = require('./dep')

class Watcher {
  constructor (vm, exp, cb) {
    this.cb = cb
    this.vm = vm
    this.exp = exp
    this.value = this.get()
  }
  update () {
    this.run()
  }
  run () {
    let value = this.vm.data[this.exp]
    let oldVal = this.value
    if (value !== oldVal) {
      this.value = value
      this.cb.call(this.vm, value, oldVal)
    }
  }
  get () {
    Dep.target = this
    // 缓存自己
    var value = this.vm.data[this.exp] // 强制执行监听器里的get函数
    Dep.target = null // 释放自己
    return value
  }
}
module.exports = function (vm, exp, cb) {
  return new Watcher(vm, exp, cb)
}
