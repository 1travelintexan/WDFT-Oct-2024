//make all the variables at the top
const startScreen = document.querySelector("#start-screen");
//get element by id does not need the #
const gameScreen = document.getElementById("game-screen");
//query selector you need to say... class with a . and id with a #
const endScreen = document.querySelector("#end-screen");
//query selector can grab elements inside others via the advance selectors
const startBtn = document.querySelector("#start-screen button");
//target the h1 on the start screen
const startScreenH1 = document.querySelector("#start-screen h1");
const gameScreenH1 = document.querySelector("#game-screen h1");
const pElement = document.querySelector("#game-screen p");
const addRandomPetElement = document.querySelector("#game-screen button");
// console.log("everything connected", startScreen, gameScreen);
//when you have an element, you can 'listen' to that element for events such as a 'click'
//addEventListener expects two things, the type ('click') and then a callback to be invoked when clicked
const petList = ["Ragnar", "Buddy", "Babush", "Diego", "Sashi"];

startBtn.addEventListener("click", () => {
  console.log("clicked");
  //we can change the style of the h1 on the start screen when we click start
  startScreenH1.style.color = "red";
  startScreenH1.style.fontSize = "4rem";
  //you can also change the text of a element
  startScreenH1.innerText = "Hello World";
  //to hide the start screen
  startScreen.style.display = "none";
  //show the next screen or the game screen
  gameScreen.style.display = "block";
  //this calls the create list function
  createList();
});
pElement.addEventListener("click", () => {
  console.log("p tag clicked");
  //this adds a class
  //   gameScreenH1.classList.add("spin")
  //this removes a class
  // gameScreenH1.classList.remove("spin")
  //this toggles the class, if it is already there then it removes it, else it adds
  gameScreenH1.classList.toggle("spin");
  createImg();
});
addRandomPetElement.addEventListener("click", addRandomPet);

//you can call functions inside of the event listeners
function createList() {
  //you can create html elements like this
  const myUl = document.createElement("ul");
  //you can update the innerText or the innerHtml like this
  // myUl.innerHTML = "<li>Ragnar</li> <li>Buddy</li>";
  // console.log("created list called", myUl);
  const myH3 = document.createElement("h3");
  myH3.innerText = "Pet List:";
  gameScreen.appendChild(myH3);
  //Once your element is correct, then you can add it to the page
  gameScreen.appendChild(myUl);
  for (let i = 0; i < petList.length; i++) {
    //make variable for current pet in loop
    const currentPet = petList[i];
    //create an li in the loop
    const liElement = document.createElement("li");
    //change the innerhtml to the current pet and a delete button
    liElement.innerHTML = `${currentPet} <button >delete</button>`;
    //target the button(NOT from the document, but from liElement)
    const delelteBtn = liElement.querySelector("button");
    //add a click event to the delete button
    delelteBtn.addEventListener("click", () => {
      console.log("delete clicked");
      liElement.remove();
    });
    //finally add the li to the list
    myUl.appendChild(liElement);
  }
}

function createImg() {
  const myImage = document.createElement("img");
  myImage.setAttribute("src", "../images/icesuring.jpg");
  myImage.setAttribute("alt", "surring picture");
  myImage.classList.add("surf-image");
  gameScreen.appendChild(myImage);
}

function addRandomPet() {
  //same formula for finding a random index
  const randomIndex = Math.floor(Math.random() * petList.length);
  const randomPet = petList[randomIndex];
  const newLi = document.createElement("li");
  newLi.innerHTML = randomPet;
  const theNewUl = document.querySelector("ul");
  theNewUl.appendChild(newLi);
}
