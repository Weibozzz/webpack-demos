import printMe from './print.js'
import addItem from './addItem'
import './index.css'
function component () {
  var element = document.createElement('div')
  var btn = document.createElement('button')
  // Lodash（目前 通过一个 script 脚本引入）对于执行这一行是必需的
  element.innerHTML = 'hello'
  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe
  element.appendChild(btn);
  return element
}
document.body.appendChild(component())
addItem()
