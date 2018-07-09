module.exports = class Dep {
  constructor () {
    this.subs = []
  }
  /**
   * 添加订阅者
   * @param {Watcher} sub 订阅者实例
   */
  addSub (sub) {
    this.subs.push(sub)
  }
  /**
   * 通知所有订阅者
   * @return {Null}
   */
  notify () {
    this.subs.forEach(sub => {
      sub.update()
    })
  }
}
