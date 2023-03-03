export { prepareBoard }

import { board } from './elements.js'

function prepareBoard(width, height) {
  const boardBody = board.firstElementChild

  boardBody.replaceChildren()

  board.style.width = `${width * 16}px`
  board.style.height = `${height * 16}px`

  for (let i = 0; i < height; i++) {
    const row = boardBody.insertRow()

    for (let j = 0; j < width; j++) {
      row.insertCell()
    }
  }
}
