export default function () {
  const button = document.createElement('button')
  button.textContent = 'add Item'
  button.onclick = () => {
    const item = document.createElement('p')
    item.textContent = 'item'
    item.classList.add('item')
    document.body.appendChild(item)
  }
  document.body.appendChild(button)
}
