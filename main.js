const yesButton2 = document.querySelector(".yes-button");
const noButton = document.querySelector(".no-button");
const confettiWrapper = document.getElementById("confetti-wrapper");

yesButton2.addEventListener("click", () => {
  makeItRain();
});

noButton.addEventListener("click", () => {
  alert("Oops, something went wrong!");
  removeConfetti();
});