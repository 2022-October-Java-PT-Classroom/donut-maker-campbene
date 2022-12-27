// const container = (document.querySelector('.container').innerText =
//   'mmmmmmmmm doughnuts.... ahhhhhhh!');
import {DonutMaker} from './DonutMaker';

const navButtonFred = document.querySelector('#fred-baker');
const fredContent = document.querySelector('.fred-content');
navButtonFred.addEventListener('click', function(){
  fredContent.classList.toggle('show');
});
