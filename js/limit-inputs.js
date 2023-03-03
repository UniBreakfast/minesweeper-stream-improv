export {limitNumberInputs}

import { widthInput, heightInput, mineCountInput, header } from './elements.js'

function limitNumberInputs() {
  const maxColumnCount = innerWidth / 16 | 0
  const maxRowCount = (innerHeight - header.offsetHeight) / 16 | 0
  
  widthInput.max = maxColumnCount
  heightInput.max = maxRowCount
  mineCountInput.max = maxColumnCount * maxRowCount - 1

  if (widthInput.value > maxColumnCount) widthInput.value = maxColumnCount
  if (heightInput.value > maxRowCount) heightInput.value = maxRowCount
  if (mineCountInput.value > maxColumnCount * maxRowCount - 1) 
    mineCountInput.value = maxColumnCount * maxRowCount - 1
}
