export { runSecondCounter }

import { timer } from './elements.js'

function runSecondCounter() {
  let seconds = 0

  timer.textContent = String(seconds).padStart(3, '0')

  const timerId = setInterval(() => {
    if (timer.textContent == '999') clearInterval(timerId)
    
    seconds++
    timer.textContent = String(seconds).padStart(3, '0')
  }, 1000)
}
