import { DonutMaker } from "./donut-maker.js";

const donutCount = document.querySelector(".donut_count");
const autoClickerCount = document.querySelector(".auto_count");
const multiplierCount = document.querySelector(".multi_count");
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
const resetGameButton = document.querySelector(".reset_button");
const randomButton = document.querySelector(".rand_button");
const audio = new Audio("./resources/sounds/click-sound.WAV");
const newDonutButton = document.querySelector(".new_donut");
const newDonutCostDisp = document.querySelector(".new_donut_cost");
const pinkFrosting = document.querySelector(".pink_frosting");
const cruller = document.querySelector(".cruller");
const glazed = document.querySelector(".glazed");
const maple = document.querySelector(".maple");
const cake = document.querySelector(".cake");
const cinnamon = document.querySelector(".cinnamon");
const jelly = document.querySelector(".jelly");
const fancy = document.querySelector(".fancy");

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
  donutCount.innerHTML =
    "Number of Donuts: " +
    appDonutMaker.donutCount +
    "<br>Current click multiplier: " +
    appDonutMaker.multiplier.toFixed(2);

  autoClickerCount.innerHTML =
    "Number of Auto-Clickers: " +
    appDonutMaker.numAutoClicker +
    "<br>Cost for next Auto-Clicker: " +
    appDonutMaker.autoCost.toFixed(0) +
    " Donuts";

  multiplierCount.innerHTML =
    "Number of Multipliers: " +
    appDonutMaker.donutMultiCount +
    "<br>Cost for next click multiplier: " +
    appDonutMaker.donutMultiCost.toFixed(0) + " Donuts";

  newDonutCostDisp.innerHTML = "Cost to make new donuts: " + appDonutMaker.newDonutCost;

  if (
    appDonutMaker.numDonut >= appDonutMaker.autoCost &&
    !autoClickButton.classList.contains("available_button")
  ) {
    autoClickButton.classList.toggle("available_button");
  } else if (
    appDonutMaker.numDonut < appDonutMaker.autoCost &&
    autoClickButton.classList.contains("available_button")
  ) {
    autoClickButton.classList.toggle("available_button");
  }

  if (
    appDonutMaker.numDonut >= appDonutMaker.donutMultiCost &&
    !multiplierButton.classList.contains("available_button")
  ) {
    multiplierButton.classList.toggle("available_button");
  } else if (
    appDonutMaker.numDonut < appDonutMaker.donutMultiCost &&
    multiplierButton.classList.contains("available_button")
  ) {
    multiplierButton.classList.toggle("available_button");
  }

  if (
    appDonutMaker.numDonut >= appDonutMaker.newDonutCost &&
    !newDonutButton.classList.contains("new_donut_available")
  ) {
    newDonutButton.classList.toggle("new_donut_available");
  } else if (
    appDonutMaker.numDonut < appDonutMaker.newDonutCost &&
    newDonutButton.classList.contains("new_donut_available")
  ) {
    newDonutButton.classList.toggle("new_donut_available");
  }

  // logic to add new donuts
  if(appDonutMaker.newDonutCount>=1){
    pinkFrosting.style.visibility = "visible";
    if(appDonutMaker.newDonutCount>=2){
      cruller.style.visibility = "visible";
      if(appDonutMaker.newDonutCount>=3) {
        glazed.style.visibility = "visible";
        if(appDonutMaker.newDonutCount>=4) {
          maple.style.visibility = "visible";
          if(appDonutMaker.newDonutCount>=5) {
            cake.style.visibility = "visible";
            if(appDonutMaker.newDonutCount>=6) {
              cinnamon.style.visibility = "visible";
              if(appDonutMaker.newDonutCount>=7) {
                jelly.style.visibility = "visible";
                if(appDonutMaker.newDonutCount>=8) {
                  fancy.style.visibility = "visible";
                }
              }
            }
          }
        }
      }
    }
  }
}

donutButton.addEventListener("click", () => {
  appDonutMaker.addDonuts();
  audio.play();
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

randomButton.addEventListener("click", () => {
  appDonutMaker.randomEvent();
  audio.play();
  updateView();
});

setInterval(() => {
  randomButton.style.display = "block";
  randomButton.onclick = () => {
    randomButton.style.display = "none";
  }
  setInterval(() => {
    randomButton.style.display = "none";
    randomButton.style.transition = "opacity 1s ease-out";
  }, 5000);
}, Math.floor(Math.random()*(300000-60000 +1)+60000));

newDonutButton.addEventListener("click", () => {
  appDonutMaker.makeNewDonuts();
  updateView();
});

