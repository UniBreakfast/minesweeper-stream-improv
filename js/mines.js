export { placeMines, showMines }

import { board } from './elements.js'
import { shuffle } from './utils.js'
import { mineCounter } from './elements.js'

function placeMines(mineCount, row, col) {
  const boardBody = board.firstElementChild
  const cells = [...boardBody.querySelectorAll('td')]

  cells.splice(row * boardBody.rows[0].cells.length + col, 1)

  const minedCells = shuffle(cells).slice(0, mineCount)

  minedCells.forEach(cell => cell.dataset.mine = true)

  mineCounter.innerText = String(mineCount).padStart(3, '0')
}

function showMines() {
  const cells = board.querySelectorAll('[data-mine]')

  for (const cell of cells) cell.classList.add('open')
}
