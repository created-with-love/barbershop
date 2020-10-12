  const sliderFirstItem = document.querySelector('.slide-1');
  const sliderSecondItem = document.querySelector('.slide-2');
  const sliderThirdItem = document.querySelector('.slide-3');
  const sliderBtnNext = document.querySelector('[data-btn-next]');
  const sliderBtnPrev = document.querySelector('[data-btn-prev]');
  const activeSlide = document.querySelector('[data-active]');
  const sliderItems = document.querySelectorAll('[data-item]');
    
  const firstRadioBtn = document.querySelector('#first-slider-btn');
  const secondRadioBtn = document.querySelector('#second-slider-btn');
  const thirdRadioBtn = document.querySelector('#third-slider-btn');
    
  const nextActiveSlide = activeSlide.nextElementSibling;
  const prevActiveSlide = activeSlide.previousElementSibling;


function onSideSliderNavClick(e) {

  if (e.target.nodeName !== 'INPUT') return;

  sliderItems.forEach(item => {
    item.classList.replace('[data-active]', 'visuallyhidden');
  });

  switch (e.target.dataset.sliderBtn) {
    case 'first':
      sliderFirstItem.classList.replace('visuallyhidden', '[data-active]');
      e.target.previousElementSibling.checked = true;
      sliderBtnNext.disabled = false;
      sliderBtnPrev.disabled = true;
      break;
    case 'second':
      sliderSecondItem.classList.replace('visuallyhidden', '[data-active]');
      e.target.previousElementSibling.checked = true;
      sliderBtnNext.disabled = false;
      sliderBtnPrev.disabled = false;
      break;
    case 'third':
      sliderThirdItem.classList.replace('visuallyhidden', '[data-active]');
      e.target.previousElementSibling.checked = true;
      sliderBtnNext.disabled = true;
      sliderBtnPrev.disabled = false;
      break;
  }
}


function onSliderBtnClick(e) {
  if (e.target.nodeName !== 'BUTTON') return;

  if (e.target === sliderBtnNext) {
    if (sliderFirstItem === activeSlide) {
      sliderBtnNext.disabled = false;
      sliderBtnPrev.disabled = false;
      secondRadioBtn.checked = true;
    }

    if (sliderSecondItem === activeSlide) {
      sliderBtnNext.disabled = true;
      sliderBtnPrev.disabled = false;
      thirdRadioBtn.checked = true;
    }

    if (sliderThirdItem === activeSlide) return;

    activeSlide.classList.replace('[data-active]', 'visuallyhidden');
    nextActiveSlide.classList.replace('visuallyhidden', '[data-active]');
  }

  if (e.target === sliderBtnPrev) {
    if (sliderFirstItem === activeSlide) return;

    if (sliderSecondItem === activeSlide) {
      sliderBtnNext.disabled = false;
      sliderBtnPrev.disabled = true;
      firstRadioBtn.checked = true;
    }

    if (sliderThirdItem === activeSlide) {
      sliderBtnNext.disabled = false;
      sliderBtnPrev.disabled = false;
      secondRadioBtn.checked = true;
    }

    activeSlide.classList.replace('[data-active]', 'visuallyhidden');
    prevActiveSlide.classList.replace('visuallyhidden', '[data-active]');
  }
}


// установка первого слайда открытым

sliderFirstItem = document.querySelector('.slide-1');
sliderBtnsList = document.querySelector('.hero-section__buttons');

sliderFirstItem.classList.replace('visuallyhidden', '[data-active]');
document.querySelector('#first-slider-btn').checked = true;

// слайдер - переключение через радио-кнопки
sliderRadioList.addEventListener('click', onSideSliderNavClick);

// слайдер - переключение кнопками назад и вперед 
sliderBtnsList.addEventListener('click', onSliderBtnClick);