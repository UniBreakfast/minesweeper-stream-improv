export { startGame }

import { board, mineCounter } from './elements.js'
import { placeMines, showMines } from './mines.js'
import { setCounts } from './count.js'
import { runSecondCounter } from './timer.js'

function startGame(mineCount) {
  board.onclick = e => {
    if (e.target.matches('td')) {
      const cell = e.target
      const row = cell.parentElement.rowIndex
      const col = cell.cellIndex

      placeMines(mineCount, row, col)
      setCounts()
      runSecondCounter()
      open(cell)

      board.onclick = e => {
        if (e.target.matches('td:not(.flag)')) open(e.target)
      }

      board.oncontextmenu = e => {
        if (e.target.matches('td:not(.open)')) {
          e.preventDefault()
          e.target.classList.toggle('flag')

          const flags = board.querySelectorAll('.flag')

          mineCounter.innerText = String(mineCount - flags.length).padStart(3, '0')
        }
      }
    }
  }
}

function open(cell) {
  const colCount = board.rows[0].cells.length
  const rowCount = board.rows.length

  cell.classList.add('open')
  cell.classList.remove('flag')

  if (cell.dataset.mine) {
    showMines()
    cell.style.backgroundColor = 'red'

    board.onclick = null
    board.oncontextmenu = null

    return
  } 

  if (!cell.dataset.count) {
    const row = cell.parentElement.rowIndex
    const col = cell.cellIndex

    for (let i = row - 1; i <= row + 1; i++) {
      for (let j = col - 1; j <= col + 1; j++) {
        if (i < 0 || i >= rowCount) continue
        if (j < 0 || j >= colCount) continue
        if (board.rows[i].cells[j].classList.contains('open')) continue

        open(board.rows[i].cells[j])
      }
    }
  }
}
