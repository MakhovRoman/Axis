"use strict"

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
  setTimeout( () => {bannerLink.style.animation = null}, 600);
});

let payLink = document.querySelector('.pay__booking');
payLink.addEventListener('mouseout', function() {
  payLink.style.animation = 'slideTextBigBackward 0.4s ease forwards';
  setTimeout( () => {payLink.style.animation = null}, 600);
})
