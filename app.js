import { limitNumberInputs } from './js/limit-inputs.js'
import { prepareBoard } from './js/board.js'
import { newGameForm, customDifficultyRadio } from './js/elements.js'

limitNumberInputs()

onresize = limitNumberInputs

newGameForm.onsubmit = () => {
  const difficultyRadio = newGameForm.querySelector('[name="difficulty"]:checked')
  const [width, height, mineCount] = difficultyRadio.value.split(/\D/).map(Number)

  prepareBoard(width, height)
}

newGameForm.onchange = e => {
  if (e.target.type == 'number') {
    const numberInputs = newGameForm.querySelectorAll('[type="number"]')
    const [width, height, mineCount] = [].map.call(numberInputs, input => Number(input.value))

    customDifficultyRadio.value = `${width}x${height}/${mineCount}`
    customDifficultyRadio.checked = true
  }
}
