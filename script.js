// script.js

document.getElementById("rollBtn").addEventListener("click", () => {
  const dice = document.getElementById("dice");
  const result = document.getElementById("result");

  const roll = Math.floor(Math.random() * 6) + 1;

  dice.src = `images/dice${roll}.png`;
  dice.alt = `Dice shows ${roll}`;
  result.textContent = `You rolled a ${roll}!`;
});
