export { shuffle }

function shuffle(arr) {
  const items = arr.splice(0)

  while (items.length) {
    const index = random(0, items.length)
    arr.push(items.splice(index, 1)[0])
  }

  return arr 
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}
