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

const appDonutMaker = new DonutMaker();
renderPage();
function renderPage() {
  updateView();
}

function updateView() {
  donutCount.innerHTML = "Number of Donuts: " + appDonutMaker.numDonut;
  autoClickerCount.innerHTML =
    "Number of Auto-Clickers: " + appDonutMaker.numAutoClicker;
  multiplierCount.innerHTML =
    "Number of Multipliers: " + appDonutMaker.donutMultiCount;
  navButtonFred.addEventListener("click", () => {
    fredContent.classList.toggle("show");
  });
  navButtonInsp.addEventListener("click", () => {
    inspContent.classList.toggle("show");
  });
  navButtonContact.addEventListener("click", () => {
    contactContent.classList.toggle("show");
  });
}
