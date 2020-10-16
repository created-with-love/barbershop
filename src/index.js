import "./sass/main.scss";
import * as markup from "./js/markup.js"
import * as burger from './js/burger.js';
// import * as slider1 from './js/slider1.js';
import { onSideSliderNavClick, onSliderBtnClick } from './js/slider.js';
import * as formSend from './js/form-send.js';


// установка первого слайда открытым
const sliderFirstItem = document.querySelector('.slide-1');
const sliderBtnsList = document.querySelector('.hero-section__buttons');
const sliderRadioList = document.querySelector('.slider-lines__form');

sliderFirstItem.classList.replace('hidden', 'active-slide');
document.querySelector('#first-slider-btn').checked = true;

// слайдер - переключение через радио-кнопки
sliderRadioList.addEventListener('click', onSideSliderNavClick);

// слайдер - переключение кнопками назад и вперед 
sliderBtnsList.addEventListener('click', onSliderBtnClick);