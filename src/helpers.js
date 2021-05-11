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
  let sArray = [20, 40, 60, 80, 100];
  let h = Math.floor(Math.random() * (360 / cardNum));
  for (let i = 0; i < cardNum; i++) {
    h = h + Math.floor(360 / cardNum);
    let s = sArray[i % 4];
    let l = 20 + Math.floor(Math.random() * 60);

    colors.push(`hsl(${h}, ${s}%, ${l}%)`);
  }
  return colors;
}

function createCards(cardNum) {
  cardNum = cardNum / 2;
  let colors = colorPicker(cardNum);
  colors = colors.concat(colors);

  return shuffle(colors.map((color, idx) => ({ id: `_${idx}`, color: color })));
}

function calculateScore(matched, score, clickCount, cardNum) {
  let steps = Math.ceil(clickCount / (2 * cardNum));
  const increment = matched ? 100 / cardNum : -(100 / (2 * cardNum * steps));
  return +(score + increment).toFixed(1);
}

export { createCards, calculateScore };
