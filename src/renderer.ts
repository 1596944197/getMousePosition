const tooltip: HTMLDivElement = document.querySelector('#tooltip')

window.updatePosition((ev, { x, y }) => {
  tooltip.style.left = `${x}px`
  tooltip.style.top = `${y}px`
  tooltip.innerHTML = `${x}——${y}`
});

function run() {
  requestAnimationFrame(() => {
    window.getPosition()
    run()
  })
}

run()
