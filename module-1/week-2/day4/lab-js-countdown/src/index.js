let remainingTime = 10; // Countdown starting from 10
let timer = null; // Variable to store the interval
const startBtn = document.querySelector("#start-btn");
const timeElement = document.getElementById("time");
const toastElement = document.querySelector("#toast");
const closeToastElement = document.getElementById("close-toast");
const toastMessageElement = document.querySelector("#toast-message");

// ITERATION 1: Add event listener to the start button
startBtn.addEventListener("click", () => {
  startCountdown();
});
closeToastElement.addEventListener("click", () => {
  closeToast();
});

// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("start Countdown called!");
  resetEverything();
  //call the show toast to show the first message
  showToast("⏰ Final countdown! ⏰");
  timer = setInterval(() => {
    //this decreses the variable in JS
    remainingTime--;
    console.log("remaining time", remainingTime);
    //this updates the visual html to equal the variable
    timeElement.innerText = remainingTime;
    //when the remaining time reaches 0, stop the timer
    if (remainingTime === 0) {
      clearInterval(timer);
      showToast("Lift off! 🚀");
      startBtn.disabled = false;
    } else if (remainingTime === 5) {
      showToast("Start the engines! 💥");
    }
  }, 1000);
}
// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");
  //making the toast card visiable
  toastElement.classList.add("show");
  //update the text inside the toast
  toastMessageElement.innerText = message;
  //after 3 seconds hide the toast card
  setTimeout(() => {
    toastElement.classList.remove("show");
  }, 3000);
}
function closeToast() {
  toastElement.classList.remove("show");
}
function resetEverything() {
  //resetting all variables and the Dom to restart the counter
  remainingTime = 10;
  timeElement.innerText = remainingTime;
  toastElement.classList.remove("show");
  startBtn.disabled = true;
}
