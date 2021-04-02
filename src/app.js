import "./style.css";

window.onload = function() {
  let suit = generateRandomSuit();
  document.getElementById("card").classList.add(generateRandomSuit());
  document.getElementById("card-number").innerHTML = generateRandomNumber();
  document.getElementById("icon-top").innerHTML = suit;
  document.getElementById("icon-bottom").innerHTML = suit;
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
  let suit = ["&diams;", "&hearts;", "&spades;", "&clubs;"];
  let indexSuit = Math.floor(Math.random() * suit.length);
  return suit[indexSuit];
};

/*function randIcons() {
  let icons = ["♦", "♥", "♠", "♣"];
  let rand = Math.floor(Math.random() * icons.lenght);
  return icons[rand];
}*/

/*function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}*/
