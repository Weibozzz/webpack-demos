import _ from 'lodash'
import xmlData from './data.xml'
import csvData from './csvdemo2.csv'
import printMe from './print.js';
import './index.css'
function component() {
  var element = document.createElement('div');

  // Lodash（目前 通过一个 script 脚本引入）对于执行这一行是必需的
  element.innerHTML = _.join(['Hello', 'webpack 你好'], ' ');
  return element;
}
printMe()
console.log('xmlData:', xmlData)
console.log('csvData:', csvData)
document.body.appendChild(component());
