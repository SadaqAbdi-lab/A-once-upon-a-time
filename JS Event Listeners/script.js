// JS Event Listeners

// An event is an action performed b the user on a website
//  E.g. clicking a button, pressing a keboard key

document.getElementById("pizza-btn").addEventListener("click", orderPizza);

function orderPizza() {
  var size = prompt("What size pizza?");
  var topping1 = prompt("First topping?");
  var topping2 = prompt("Second topping?");

  var output = `Your ${size} pizza with ${topping1} and ${topping2} will be ready in 15 minutes`;

  alert(output);
}

// create s button that, when clicked, asks the user for their name and city.
// In the CONSOLE,display: Hello,<name> form <city>

document.getElementById("greet-btn").addEventListener("click", greet);

function greet() {
  let userName = prompt("What is your name");
  let userCity = prompt("What is city are you from");

  let output = "Hello, " + userName + " from " + userCity + "!";

  console.log(output);
}

document.getElementById("animal-btn").addEventListener("click", animals);

function animals() {
  // Input
  let animal1 = prompt("What animal do you like the most");
  let animal2 = prompt("What is your second most liked animal");

  let output = "You like " + animal1 + "and " + animal2 + ".";

  alert(output);
}

document.getElementById("Phrse").addEventListener("click", Phrse);

function Phrse1() {
  PhrseOne = "disguise";

  alert(PhrseOne);
}

document.getElementById("Phrse2").addEventListener("click", Phrse2);

function Phrse1() {
  PhrseOne = "disguise";

  alert(PhrseOne);
}

document.getElementById("Phrse3").addEventListener("click", Phrse3);

function Phrse1() {
  PhrseOne = "disguise";

  alert(PhrseOne);
}

document.getElementById("Phrse4").addEventListener("click", Phrse4);

function Phrse1() {
  PhrseOne = "disguise";

  alert(PhrseOne);
}

document.getElementById("Phrse5").addEventListener("click", Phrse5);

function Phrse1() {
  PhrseOne = "disguise";

  alert(PhrseOne);
}
