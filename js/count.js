export { setCounts }

import { board } from './elements.js'

function setCounts() {
  const cells = board.querySelectorAll('td')

  for (const cell of cells) {
    if (cell.dataset.mine) continue

    let count = 0

    const row = cell.parentElement.rowIndex
    const col = cell.cellIndex

    for (let i = row - 1; i <= row + 1; i++) {
      for (let j = col - 1; j <= col + 1; j++) {
        if (i < 0 || i >= board.rows.length) continue
        if (j < 0 || j >= board.rows[i].cells.length) continue
        if (board.rows[i].cells[j].dataset.mine) count++
      }
    }

    if (count > 0) cell.dataset.count = count
  }
}
