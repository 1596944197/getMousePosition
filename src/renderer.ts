const tooltip: HTMLDivElement = document.querySelector('#tooltip')

const { width, height } = tooltip.getBoundingClientRect();
window.updatePosition((ev, { x, y }) => {
  const left = x + width >= window.innerWidth ? `${window.innerWidth - width}px` : `${x}px`
  const top = y + height >= window.innerHeight ? `${window.innerHeight - height}px` : `${y}px`
  tooltip.style.left = left
  tooltip.style.top = top
  tooltip.innerHTML = `x:${x}\xa0\xa0 y:${y}`
});

function run() {
  requestAnimationFrame(() => {
    window.getPosition()
    run()
  })
}

run()
