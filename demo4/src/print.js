export default function printMe() {
  function component () {
    var element = document.createElement('div')
    element.innerHTML = '1111w'
    return element
  }
  document.body.appendChild(component())
  console.log('updatee');
}
