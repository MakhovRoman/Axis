"use strict"

let buttonAdultMinus = document.querySelector('#guestAdultMinus');
let buttonAdultPlus = document.querySelector('#guestAdultPlus');
let buttonChildMinus = document.querySelector('#guestChildMinus');
let buttonChildPlus = document.querySelector('#guestChildPlus');
let guestAdult = document.querySelector('#guestAdult');
let guestChild = document.querySelector('#guestChild');

function checkGuest(target) { // проверка на соответствие заявки мин и макс количеству мест в домиках
  if(target.value <= 0) {
    target.value = 1;
  } if (target.value >= 43) {
    target.value = 42;
  }
}

function guestPlus(button, target) {
  button.addEventListener('click', function(event) { //увеличение количества гостей
    event.preventDefault();
    target.value ++;
    checkGuest(target);
  });
}

function guestMinus(button, target) {
  button.addEventListener('click', function(event) { //уменьшение количества гостей
    event.preventDefault();
    target.value --;
    checkGuest(target);
  });
}

guestMinus(buttonAdultMinus, guestAdult);
guestPlus(buttonAdultPlus, guestAdult);
checkGuest(guestAdult);

guestMinus(buttonChildMinus, guestChild);
guestPlus(buttonChildPlus, guestChild);
checkGuest(guestChild);
