const SelfVue = require('./selfVue')
var ele = document.querySelector('#name')
var selfVue = new SelfVue({
  name: 'hello-world '
}, ele, 'name')
window.setTimeout(function () {
  selfVue.name = 'change'
}, 2000)
