const number = document.querySelector(".number");
const adviceParagraph = document.querySelector(".advice");
const dice = document.querySelector(".dice");

dice.addEventListener("click", nextAdvice);

async function nextAdvice() {
  const response = await fetch("https://api.adviceslip.com/advice");
  const responseJson = await response.json();

  adviceParagraph.innerText = `${responseJson.slip.advice}`;
  number.innerText = `${responseJson.slip.id}`;
}

nextAdvice();
