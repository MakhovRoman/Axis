"use strict"

//============= Заполнение формы количества гостей =============

let buttonAdultMinus = document.querySelector('#guestAdultMinus');
let buttonAdultPlus = document.querySelector('#guestAdultPlus');
let buttonChildMinus = document.querySelector('#guestChildMinus');
let buttonChildPlus = document.querySelector('#guestChildPlus');
let guestAdult = document.querySelector('#guestAdult');
let guestChild = document.querySelector('#guestChild');

function checkGuest(target, minValue, minTargetValue, maxValue, maxTargetValue) { // проверка на соответствие заявки мин и макс количеству мест в домиках
  if(target.value <= minValue) {
    target.value = minTargetValue;
  } if (target.value >= maxValue) {
    target.value = maxTargetValue;
  }
}

function guestPlus(button, target, minValue, minTargetValue, maxValue, maxTargetValue) {
  button.addEventListener('click', function(event) { //увеличение количества гостей
    event.preventDefault();
    target.value ++;
    checkGuest(target, minValue, minTargetValue, maxValue, maxTargetValue);
  });
}

function guestMinus(button, target, minValue, minTargetValue, maxValue, maxTargetValue) {
  button.addEventListener('click', function(event) { //уменьшение количества гостей
    event.preventDefault();
    target.value --;
    checkGuest(target, minValue, minTargetValue, maxValue, maxTargetValue);
  });
}

guestMinus(buttonAdultMinus, guestAdult, 0, 1, 43, 42); // работа кнопок - и +, а также проверка input в Гости/взрослые
guestPlus(buttonAdultPlus, guestAdult, 0, 1, 43, 42);
checkGuest(guestAdult);
guestAdult.addEventListener('focusout', () => {
  if(guestAdult.value <= 0) {
    guestAdult.value = 1;
  } if (guestAdult.value >= 43) {
    guestAdult.value = 42;
  }
});

guestMinus(buttonChildMinus, guestChild, 0 , 0, 43, 42); // работа кнопок - и +, а также проверка input в Гости/дети
guestPlus(buttonChildPlus, guestChild, 0, 0, 43, 42);
checkGuest(guestChild);
guestChild.addEventListener('focusout', () => {
  if(guestChild.value <= 0) {
    guestChild.value = 0;
  } if (guestChild.value >= 43) {
    guestChild.value = 42;
  }
});


//============= Анимация текста slideText =============

let bannerLink = document.querySelector('.banner__booking-link');
bannerLink.addEventListener('mouseout', function() {
  bannerLink.style.animation = 'slideTextBackward 0.4s ease forwards';
  setTimeout( () => {bannerLink.style.animation = null}, 500);
});

let payLink = document.querySelector('.pay__booking');
payLink.addEventListener('mouseout', function() {
  payLink.style.animation = 'slideTextBigBackward 0.4s ease forwards';
  setTimeout( () => {payLink.style.animation = null}, 500);
})

let contactsSubmit = document.querySelector('.contacts__form-submit');
contactsSubmit.addEventListener('mouseout', function() {
  contactsSubmit.style.animation = 'slideTextBackward 0.4s ease forwards';
  setTimeout( () => {contactsSubmit.style.animation = null}, 500);
})



//============= Слайдеры =============

let paySliderList = document.querySelectorAll('.pay__slider-item');
let paySliderWrapper = document.querySelector('.pay__slider-wrapper');
let paySliderCount = document.querySelector('#slider__counter');
let paySliderPlus = document.querySelector('#slider__plus');
let paySliderMinus = document.querySelector('#slider__minus');

function sliderForward(slider, count) {
  let i = Number(count.textContent);
  i++;
  if (i>=4) i = 4;
  count.textContent = i;
  slider.style.transform = `translateX(${-(i-1)*100/4}%)`;
}

function sliderBackward(slider, count) {
  let i = Number(count.textContent);
  i--;
  if (i<=1) i = 1;
  count.textContent = i;
  slider.style.transform = `translateX(${-(i-1)*100/4}%)`;
}

paySliderPlus.addEventListener('click', function() {
  sliderForward(paySliderWrapper, paySliderCount);
});
paySliderMinus.addEventListener('click', function() {
  sliderBackward(paySliderWrapper, paySliderCount);
});

//слайдер в Showplace

let showplaceSliderCount = document.querySelector('#sliderShowplace__counter');
let showplaceSliderPlus = document.querySelector('#sliderShowplace__plus');
let showplaceSliderMinus = document.querySelector('#sliderShowplace__minus');
let showplaceSlider = document.querySelector('.services__showplace-slider');

showplaceSliderPlus.addEventListener('click', function() {
  sliderForward(showplaceSlider, showplaceSliderCount);
});
showplaceSliderMinus.addEventListener('click', function() {
  sliderBackward(showplaceSlider, showplaceSliderCount);
})

//слайдер в Services

let servicesButtonMinus = document.querySelector('#services__button-minus');
let servicesButtonPlus = document.querySelector('#services__button-plus');
let servicesButtonBlock = document.querySelector('.services__slider1-buttons');
let servicesMarker = document.querySelector('.services__slider1-marker');
let servicesSlider = document.querySelector('.services__slider1');
let servicesSliderList = document.querySelectorAll('.services__slider1-content');
let servicesSliderLength = servicesSliderList.length;
let servicesSliderMargin = servicesSliderList[1].style.marginLeft;
let servicesCount = 0;

function sliderServicesForward(marker, slider) {
  servicesCount++;
  if (servicesCount >= servicesSliderLength-4) servicesCount = servicesSliderLength-4;
  marker.style.transform = `translateX(${(servicesCount + 4)*25}%)`;
  slider.style.transform = `translateX(calc(${-servicesCount* 278}px - 106px * ${servicesCount}))`;
}

function sliderServicesBackward(marker, slider) {
  servicesCount--;
  if (servicesCount <= 0) servicesCount = 0;
  marker.style.transform = `translateX(${servicesCount*25}%)`;
  slider.style.transform = `translateX(calc(${-servicesCount* 278}px - 106px * ${servicesCount}))`;
}

function sliderServicesOpacity(count, sliderList) {
  for(let i = 0; i <= sliderList.length; i ++) {
    if (i == count) {
      sliderList[i].style.opacity = '1';
    } else if (i > count){
      sliderList[i].style.opacity = '0.15';
    } else if (i < count) {
      sliderList[i].style.opacity = '0';
    }
  }
}

servicesButtonPlus.addEventListener('click', function() {
  sliderServicesForward(servicesMarker, servicesSlider);
});

servicesButtonMinus.addEventListener('click', function() {
  sliderServicesBackward(servicesMarker, servicesSlider);
});



//============= Маска телефона =============
let contactsTel = document.querySelector('#contacts__tel');
