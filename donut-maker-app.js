import { DonutMaker } from "./donut-maker.js";

const donutCount = document.querySelector(".donut_count");
const autoClickerCount = document.querySelector(".auto_count");
const multiplierCount = document.querySelector(".multi_count");
const multiplierValue = document.querySelector('.multiplier_value');
const fredModal = document.getElementById("fred_modal");
const inspModal = document.getElementById("insp_modal");
const contactModal = document.getElementById("contact_modal");
const fredClose = document.getElementsByClassName("fred_close")[0];
const inspClose = document.getElementsByClassName("insp_close")[0];
const contactClose = document.getElementsByClassName("contact_close")[0];
const navButtonFred = document.querySelector("#fred_baker");
const navButtonInsp = document.querySelector("#inspiration");
const navButtonContact = document.querySelector("#contact");
const donutButton = document.querySelector(".donut_button");
const autoClickButton = document.querySelector(".buy_autoClicker");
const multiplierButton = document.querySelector(".buy_multiplier");
const autoClickerCost = document.querySelector(".auto_cost");
const multiplierCost = document.querySelector(".multi_cost");
const resetGameButton = document.querySelector(".reset_button");

//Nav Menu Control
navButtonFred.onclick = function () {
  fredModal.style.display = "block";
};
fredClose.onclick = function () {
  fredModal.style.display = "none";
};
navButtonInsp.onclick = function () {
  inspModal.style.display = "block";
};
inspClose.onclick = function () {
  inspModal.style.display = "none";
};
navButtonContact.onclick = function () {
  contactModal.style.display = "block";
};
contactClose.onclick = function () {
  contactModal.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == fredModal) {
    fredModal.style.display = "none";
  }
  if (event.target == inspModal) {
    inspModal.style.display = "none";
  }
  if (event.target == contactModal) {
    contactModal.style.display = "none";
  }
};

//app functionality
const appDonutMaker = new DonutMaker();

updateView();

function updateView() {
  donutCount.innerHTML = "Number of Donuts: " + appDonutMaker.donutCount;
  multiplierValue.innerHTML = "Current click multiplier: " + appDonutMaker.multiplier.toFixed(2);
  autoClickerCount.innerHTML =
    "Number of Auto-Clickers: " + appDonutMaker.numAutoClicker;
  autoClickerCost.innerHTML =
    "Cost for next Auto-Clicker: " + appDonutMaker.autoCost.toFixed(2);
  multiplierCount.innerHTML =
    "Number of Multipliers: " + appDonutMaker.donutMultiCount;
  multiplierCost.innerHTML =
    "Cost for next click multiplier: " +
    appDonutMaker.donutMultiCost.toFixed(2);

  if ((appDonutMaker.numDonut >= appDonutMaker.autoCost) && !autoClickButton.classList.contains("available_button")) {
    autoClickButton.classList.toggle("available_button");
  } else if ((appDonutMaker.numDonut < appDonutMaker.autoCost) && autoClickButton.classList.contains("available_button")) {
    autoClickButton.classList.toggle("available_button");
  }
  
  if ((appDonutMaker.numDonut >= appDonutMaker.donutMultiCost) && !multiplierButton.classList.contains("available_button")) {
    multiplierButton.classList.toggle("available_button");
  } else if ((appDonutMaker.numDonut < appDonutMaker.donutMultiCost) && multiplierButton.classList.contains("available_button")) {
    multiplierButton.classList.toggle("available_button");
  }
}

donutButton.addEventListener("click", () => {
  appDonutMaker.addDonuts();
  updateView();
});

autoClickButton.addEventListener("click", () => {
  appDonutMaker.addAutoClicker();
  updateView();
});

multiplierButton.addEventListener("click", () => {
  appDonutMaker.increaseDonutMultiplier();
  updateView();
});

setInterval(() => {
  appDonutMaker.autoClickerEvent();
  updateView();
}, 1000);

resetGameButton.addEventListener("click", () => {
  appDonutMaker.resetGame();
  updateView();
});
