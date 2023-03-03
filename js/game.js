export { startGame }

import { board } from './elements.js'

function startGame(mineCount) {
  board.onclick = e => {
    if (e.target.matches('td')) {
      const cell = e.target
      const row = cell.parentElement.rowIndex
      const col = cell.cellIndex

      // alert(`Clicked on cell ${row}, ${col}`)

      
    }
  }
}
