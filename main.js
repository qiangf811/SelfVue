// import $ from 'jquery'
require('jquery')
const jsonp = require('jsonp')
const SelfVue = require('./selfVue')
var ele = document.querySelector('#name')
var selfVue = new SelfVue({
  name: 'hello-worldssss '
}, ele, 'name')
window.setTimeout(function () {
  selfVue.name = 'change'
  jsonp('http://www.fengleaf.cn/api/skills',function(err, data){
    console.log(err, data)
  })
}, 2000)
/**
 * 图片懒加载
 */
var aImg = document.querySelectorAll('img')
var len = aImg.length
var n = 0; // 存储图片加载到的位置，避免每次都从第一张图片开始遍历
window.onscroll = function () {
  var seeHeight = document.documentElement.clientHeight
  var scrollTop = document.body.scrollTop || document.documentElement.scrollTop
  for (var i = n; i < len; i++) {
    if (aImg[i].offsetTop < seeHeight + scrollTop) {
      if (aImg[i].getAttribute('src') == '') {
        aImg[i].src = aImg[i].getAttribute('data-src')
      }
      n = i + 1
      console.log('n = ' + n)
    }
  }
}
window.onscroll()

var ff = function(){}
Promise.try(ff({id: ''}))
  .then(()=>{
	console.log('then')
})
  .catch(e=>{
console.log(e)
	})
