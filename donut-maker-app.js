import { DonutMaker } from "./donut-maker.js";

const donutCount = document.querySelector(".donut_count");
const autoClickerCount = document.querySelector(".auto_count");
const multiplierCount = document.querySelector(".multi_count");
const navButtonFred = document.querySelector("#fred_baker");
const fredContent = document.querySelector(".fred_content");
const navButtonInsp = document.querySelector("#inspiration");
const inspContent = document.querySelector(".inspiration_content");
const navButtonContact = document.querySelector("#contact");
const contactContent = document.querySelector(".contact_content");
const donutButton = document.querySelector(".donut_button");
const autoClickButton = document.querySelector(".buy_autoClicker");
const multiplierButton = document.querySelector(".buy_multiplier");
const autoClickerCost = document.querySelector(".auto_cost");
const multiplierCost = document.querySelector(".multi_cost");
const resetGameButton = document.querySelector(".reset_button");

const appDonutMaker = new DonutMaker();

updateView();

function updateView() {
  donutCount.innerHTML = "Number of Donuts: " + appDonutMaker.donutCount;
  autoClickerCount.innerHTML =
    "Number of Auto-Clickers: " + appDonutMaker.numAutoClicker;
  autoClickerCost.innerHTML =
    "Cost for next Auto-Clicker: " + appDonutMaker.autoCost.toFixed(2);
  multiplierCount.innerHTML =
    "Number of Multipliers: " + appDonutMaker.donutMultiCount;
  multiplierCost.innerHTML =
    "Cost for next click multiplier: " +
    appDonutMaker.donutMultiCost.toFixed(2);
  if (appDonutMaker.numDonut >= appDonutMaker.autoCost) {
    autoClickButton.classList.toggle("available_button");
  }
  if (appDonutMaker.numDonut >= appDonutMaker.donutMultiCost) {
    multiplierButton.classList.toggle("available_button");
  }
}
navButtonFred.addEventListener("click", () => {
  fredContent.classList.toggle("show");
});
navButtonInsp.addEventListener("click", () => {
  inspContent.classList.toggle("show");
});
navButtonContact.addEventListener("click", () => {
  contactContent.classList.toggle("show");
});

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
