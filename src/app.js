import "./style.css";

window.onload = function() {
  let suit = generateRandomSuit();
  console.log(suit);
  document.getElementById("card").classList.add(generateRandomSuit());
  document.getElementById("card-number").innerHTML = generateRandomNumber();
  let iconTop = document.getElementById("icon-top");
  let iconBottom = document.getElementById("icon-bottom");
  iconTop.innerHTML = suit;
  iconBottom.innerHTML = suit;
  if (suit === "♥" || suit === "♦") {
    iconTop.style.color = "red";
    iconBottom.style.color = "red";
  }
};
let generateRandomNumber = () => {
  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let indexNumbers = Math.floor(Math.random() * numbers.length);
  console.log(numbers[indexNumbers]);
  return numbers[indexNumbers];
};

const generateRandomSuit = () => {
  let suit = ["♥", "♣", "♦", "♠"];
  let indexSuit = Math.floor(Math.random() * suit.length);
  return suit[indexSuit];
};
