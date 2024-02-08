const countNum = document.querySelector("#count");
let sayac = 0;

const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function getRandomColor() {
  let birinciRenk = getRandomIntInclusive(0, 359);
  let ikinciRenk = getRandomIntInclusive(0, 100);
  let ucuncuRenk = getRandomIntInclusive(0, 100);
  let bgColor = `hsl(${birinciRenk}, ${ikinciRenk}%, ${ucuncuRenk}%)`;

  if (ucuncuRenk < 50) {
    countNum.style.color = "#f2f2f2";
  } else {
    countNum.style.color = "#000";
  }
  countNum.style.backgroundColor = bgColor;
}

getRandomColor();

function increase() {
  const btnDom = document.getElementById("count");
  sayac += 1;
  btnDom.textContent = `${sayac}`;
  getRandomColor();
}

function reset() {
  const btnDom = document.getElementById("count");
  sayac = 0;
  btnDom.textContent = `${sayac}`;
  getRandomColor();
}

function decrease() {
  const btnDom = document.getElementById("count");
  sayac -= 1;
  btnDom.textContent = `${sayac}`;
  getRandomColor();
}
