export { runSecondCounter, stopSecondCounter }

import { timer } from './elements.js'

let timerId

function runSecondCounter() {
  let seconds = 0

  timer.textContent = String(seconds).padStart(3, '0')

  timerId = setInterval(() => {
    if (timer.textContent == '999') clearInterval(timerId)

    seconds++
    timer.textContent = String(seconds).padStart(3, '0')
  }, 1000)
}

function stopSecondCounter() {
  clearInterval(timerId)
}
