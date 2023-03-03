export { startGame }

import { board } from './elements.js'
import { placeMines, showMines } from './mines.js'
import { setCounts } from './count.js'

function startGame(mineCount) {
  board.onclick = e => {
    if (e.target.matches('td')) {
      const cell = e.target
      const row = cell.parentElement.rowIndex
      const col = cell.cellIndex

      placeMines(mineCount, row, col)
      setCounts()
      open(cell)

      board.onclick = e => {
        if (e.target.matches('td:not(.flag)')) open(e.target)
      }

      board.oncontextmenu = e => {
        if (e.target.matches('td:not(.open)')) {
          e.preventDefault()
          e.target.classList.toggle('flag')
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
