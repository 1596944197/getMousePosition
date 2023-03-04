const tooltip: HTMLDivElement = document.querySelector('#tooltip')

tooltip.style.transition = 'opacity 0.3s ease'

let isFocus = false

window.updatePosition((ev, { x, y }) => {
  const { width, height } = tooltip.getBoundingClientRect();
  const left = x + width >= window.innerWidth ? `${window.innerWidth - width}px` : `${x}px`
  const top = y + height >= window.innerHeight ? `${window.innerHeight - height}px` : `${y}px`
  tooltip.style.left = left
  tooltip.style.top = top
  tooltip.innerHTML = `x=${x}\xa0\xa0 y=${y}`
});

function run() {
  if (!isFocus) return
  requestAnimationFrame(() => {
    window.getPosition()
    run()
  })
}

function showElement(ele: HTMLElement) {
  ele.style.opacity = '1'
}
function hiddenElement(ele: HTMLElement) {
  ele.style.opacity = '0'
}
window.start(() => {
  isFocus = true
  run()
  showElement(tooltip)
})

window.end(() => {
  isFocus = false
  hiddenElement(tooltip)
})