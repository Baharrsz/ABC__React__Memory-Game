function shuffle(array) {
  let order = [...Array(array.length).keys()];
  let shuffled = [];
  array.forEach((element) => {
    let i = Math.floor(Math.random() * order.length);
    shuffled[order[i]] = element;
    order.splice(i, 1);
  });
  return shuffled;
}

function colorPicker(cardNum) {
  let colors = [];
  for (let i = 1; i <= cardNum; i++) {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    colors.push(`rgb(${r}, ${g}, ${b})`);
  }
  return colors;
}

function createCards(cardNum) {
  cardNum = cardNum / 2;
  let colors = colorPicker(cardNum);
  colors = colors.concat(colors);

  return shuffle(colors.map((color, idx) => ({ id: `_${idx}`, color: color })));
}

export { createCards };
