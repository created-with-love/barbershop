export function onSideSliderNavClick(e) {
  const sliderFirstItem = document.querySelector('.slide-1');
  const sliderSecondItem = document.querySelector('.slide-2');
  const sliderThirdItem = document.querySelector('.slide-3');
  const sliderBtnNext = document.querySelector('[data-btn-next]');
  const sliderBtnPrev = document.querySelector('[data-btn-prev]');
  const sliderItems = document.querySelectorAll('[data-item]');
   
  if (e.target.nodeName !== 'INPUT') return;

  sliderItems.forEach(item => {
    item.classList.replace('active-slide', 'hidden');
  });
 
  switch (e.target.dataset.sliderBtn) {
    case 'first':
      sliderFirstItem.classList.replace('hidden', 'active-slide');
      e.target.previousElementSibling.checked = true;
      sliderBtnNext.disabled = false;
      sliderBtnPrev.disabled = true;
      break;
    case 'second':
      sliderSecondItem.classList.replace('hidden', 'active-slide');
      e.target.previousElementSibling.checked = true;
      sliderBtnNext.disabled = false;
      sliderBtnPrev.disabled = false;
      break;
    case 'third':
      sliderThirdItem.classList.replace('hidden', 'active-slide');
      e.target.previousElementSibling.checked = true;
      sliderBtnNext.disabled = true;
      sliderBtnPrev.disabled = false;
      break;
  }
}


export function onSliderBtnClick(e) {
  if (e.target.nodeName !== 'BUTTON') return;


  const sliderFirstItem = document.querySelector('.slide-1');
  const sliderSecondItem = document.querySelector('.slide-2');
  const sliderThirdItem = document.querySelector('.slide-3');
  const sliderBtnNext = document.querySelector('[data-btn-next]');
  const sliderBtnPrev = document.querySelector('[data-btn-prev]');
  const activeSlide = document.querySelector('active-slide');
  const firstRadioBtn = document.querySelector('#first-slider-btn');
  const secondRadioBtn = document.querySelector('#second-slider-btn');
  const thirdRadioBtn = document.querySelector('#third-slider-btn');
  const nexActiveSlide =activeSlide.nextElementSibling;
  const preActiveSlide =activeSlide.previousElementSibling;

  if (e.target === sliderBtnNext) {
    if (sliderFirstItem ===activeSlide) {
      sliderBtnNext.disabled = false;
      sliderBtnPrev.disabled = false;
      secondRadioBtn.checked = true;
    }

    if (sliderSecondItem ===activeSlide) {
      sliderBtnNext.disabled = true;
      sliderBtnPrev.disabled = false;
      thirdRadioBtn.checked = true;
    }

    if (sliderThirdItem ===activeSlide) return;

    activeSlide.classList.replace('active-slide', 'hidden');
    nexActiveSlide.classList.replace('hidden', 'active-slide');
  }

  if (e.target === sliderBtnPrev) {
    if (sliderFirstItem ===activeSlide) return;

    if (sliderSecondItem ===activeSlide) {
      sliderBtnNext.disabled = false;
      sliderBtnPrev.disabled = true;
      firstRadioBtn.checked = true;
    }

    if (sliderThirdItem ===activeSlide) {
      sliderBtnNext.disabled = false;
      sliderBtnPrev.disabled = false;
      secondRadioBtn.checked = true;
    }

    activeSlide.classList.replace('active-slide', 'hidden');
    preActiveSlide.classList.replace('hidden', 'active-slide');
  }
}

