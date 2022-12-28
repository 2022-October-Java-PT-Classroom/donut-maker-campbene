import {DonutMaker} from "./donut-maker.js";

const donutCount = document.querySelector(".donut_count");
const autoClickerCount = document.querySelector('.auto_count');
const multiplierCount = document.querySelector('.multi_count');
const navButtonFred = document.querySelector('#fred-baker');
const fredContent = document.querySelector('.fred-content');

const navButtonInsp = document.querySelector('#inspiration');
const navButtonContact = document.querySelector('#contact');


const appDonutMaker = new DonutMaker();
renderPage();
function renderPage() {
  donutCount.innerHTML= "Number of Donuts: " + appDonutMaker.numDonut;
  autoClickerCount.innerHTML = "number of Auto-Clickers: " + appDonutMaker.numAutoClicker;
  multiplierCount.innerHTML = "number of click multipliers: " + appDonutMaker.donutMultiCount;
  navButtonFred.addEventListener('click', ()=>{
    fredContent.classList.toggle('show');
  });
  
}