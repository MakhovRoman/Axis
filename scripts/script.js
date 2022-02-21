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
let paySliderLength = document.querySelector('#slider__length')
let paySliderPlus = document.querySelector('#slider__plus');
let paySliderMinus = document.querySelector('#slider__minus');

function sliderForward(slider, count, length) {
  let i = Number(count.textContent);
  i++;
  if (i>=length) i = length;
  count.textContent = i;
  slider.style.transform = `translateX(${-(i-1)*100/length}%)`;
}

function sliderBackward(slider, count, length) {
  let i = Number(count.textContent);
  i--;
  if (i<=1) i = 1;
  count.textContent = i;
  slider.style.transform = `translateX(${-(i-1)*100/length}%)`;
}

//слайдер в Pay

paySliderLength.textContent = `${paySliderList.length}`;               // добавляю количество слайдеров в счетчик
paySliderWrapper.style.width = `calc(100% * ${paySliderList.length})`; // задаю ширину слайдера, в зависимости от количества слайдов
Array.from(paySliderList).forEach( (item, index, array) => {                         // задаю ширину каждого слайда
  item.style.width = `calc(100% / ${array.length})`;
});

paySliderPlus.addEventListener('click', function() {
  sliderForward(paySliderWrapper, paySliderCount, paySliderList.length);
});
paySliderMinus.addEventListener('click', function() {
  sliderBackward(paySliderWrapper, paySliderCount, paySliderList.length);
});

//слайдер в Showplace

let showplaceSliderCount = document.querySelector('#sliderShowplace__counter');
let showplaceSliderLength = document.querySelector('#sliderShowplace__length');
let showplaceSliderPlus = document.querySelector('#sliderShowplace__plus');
let showplaceSliderMinus = document.querySelector('#sliderShowplace__minus');
let showplaceSlider = document.querySelector('.services__showplace-slider');
let showplaceSliderList = document.querySelectorAll('.services__showplace-item');

showplaceSliderLength.textContent = `${showplaceSliderList.length}`;        // добавляю количество слайдеров в счетчик
showplaceSlider.style.width = `calc(100% * ${showplaceSliderList.length})`; // задаю ширину слайдера, в зависимости от количества слайдов
Array.from(showplaceSliderList).forEach( (item, index, array) => {          // задаю ширину каждого слайда
  item.style.width = `calc(100% / ${array.length})`;
});
showplaceSliderPlus.addEventListener('click', function() {
  sliderForward(showplaceSlider, showplaceSliderCount, showplaceSliderList.length);
});
showplaceSliderMinus.addEventListener('click', function() {
  sliderBackward(showplaceSlider, showplaceSliderCount, showplaceSliderList.length);
});

//слайдер в Services

let servicesButtonMinus = document.querySelector('#services__button-minus');
let servicesButtonPlus = document.querySelector('#services__button-plus');
let servicesButtonBlock = document.querySelector('.services__slider1-buttons');
let servicesMarker = document.querySelector('.services__slider1-marker');
let servicesSlider = document.querySelector('.services__slider1');
let servicesSliderList = document.querySelectorAll('.services__slider1-content');
let servicesSliderLength = servicesSliderList.length;
let servicesSliderMargin = parseInt(getComputedStyle(servicesSliderList[1]).marginLeft);
let servicesSliderWidth = parseInt(getComputedStyle(servicesSliderList[1]).width);
let servicesCount = 0;

function sliderServicesForward(marker, slider) {
  servicesCount++;
  if (servicesCount >= servicesSliderLength-4) servicesCount = servicesSliderLength-4;
  marker.style.transform = `translateX(${(servicesCount)*100/((servicesSliderLength - 4) / 2)}%)`;
  slider.style.transform = `translateX(calc(${-servicesCount * servicesSliderWidth}px - ${servicesSliderMargin}px * ${servicesCount}))`;
}

function sliderServicesBackward(marker, slider) {
  servicesCount--;
  if (servicesCount <= 0) servicesCount = 0;
  marker.style.transform = `translateX(${(servicesCount)*100/((servicesSliderLength - 4) / 2)}%)`;
  slider.style.transform = `translateX(calc(${-servicesCount * servicesSliderWidth}px - ${servicesSliderMargin}px * ${servicesCount}))`;
}

function sliderServicesOpacity(count, sliderList) {
  let lastCount = count + 4;
   for(let i = 0; i < sliderList.length; i ++) {
    if (i >= count && i < lastCount) {
      sliderList[i].style.opacity = '1';
    } else if (i >= lastCount){
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

servicesButtonBlock.addEventListener('click', function() {
  sliderServicesOpacity(servicesCount, servicesSliderList);
})


//============= Маска телефона =============
window.addEventListener('DOMContentLoaded', function() {
  let inputs = document.querySelectorAll('input[type="tel"]');

  Array.prototype.forEach.call(inputs, function(input) {
    new InputMask({
      selector: input, // в качестве селектора может быть элемент, или, собственно css селектор('#input', '.input', 'input'). Если селектор - тег или класс - будет получен только первый элемент
      layout: input.dataset.mask
    })
  })

})

function InputMask(options) {
    this.el = this.getElement(options.selector);
    if (!this.el) return console.log('Что-то не так с селектором');
    this.layout = options.layout || '+_ (___) ___-__-__';
    this.maskreg = this.getRegexp();

    this.setListeners();
}

InputMask.prototype.getRegexp = function() {
    let str = this.layout.replace(/_/g, '\\d')
    str = str.replace(/\(/g, '\\(')
    str = str.replace(/\)/g, '\\)')
    str = str.replace(/\+/g, '\\+')
    str = str.replace(/\s/g, '\\s')

    return str;
}

InputMask.prototype.mask = function(e) {
    let _this = e.target,
        matrix = this.layout,
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = _this.value.replace(/\D/g, "");

    if (def.length >= val.length) val = def;

    _this.value = matrix.replace(/./g, function(a) {
        return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
    });

    if (e.type == "blur") {
        var regexp = new RegExp(this.maskreg);
        if (!regexp.test(_this.value)) _this.value = "";
    } else {
        this.setCursorPosition(_this.value.length, _this);
    }
}

InputMask.prototype.setCursorPosition = function(pos, elem) {
    elem.focus();
    if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
    else if (elem.createTextRange) {
        var range = elem.createTextRange();
        range.collapse(true);
        range.moveEnd("character", pos);
        range.moveStart("character", pos);
        range.select()
    }
}

InputMask.prototype.setListeners = function() {
    this.el.addEventListener("input", this.mask.bind(this), false);
    this.el.addEventListener("focus", this.mask.bind(this), false);
    this.el.addEventListener("blur", this.mask.bind(this), false);
}

InputMask.prototype.getElement = function(selector) {
    if (selector === undefined) return false;
    if (this.isElement(selector)) return selector;
    if (typeof selector == 'string') {
        var el = document.querySelector(selector);
        if (this.isElement(el)) return el;
    }
    return false
}

InputMask.prototype.isElement = function(element) {
    return element instanceof Element || element instanceof HTMLDocument;
}

//============= Поле с именем и фамилией =============
function noDigits(event) {
  if ("1234567890".indexOf(event.key) != -1) event.preventDefault();
}

let contactsName = document.querySelector('#contacts__name');
contactsName.addEventListener('keypress', noDigits);


//============= Header =============

let header = document.querySelector('.header');
let headerTop = document.querySelector('.header__top');
let headerBot = document.querySelector('.header__bot');
let headerBotHeight = parseInt(getComputedStyle(headerBot).height);
let headerTopHeight = parseInt(getComputedStyle(headerTop).height);
let bannerHeight = parseInt(getComputedStyle(document.querySelector('.banner')).height);
let bannerBookingLink = document.querySelector('.banner__booking-link');
let modal = document.querySelector('.modal');
let headerPositionTop;
let pageScroll;
let headerLastScrollTop = 0;
let bannerBooking = document.querySelector('.banner__booking');

function headerScroll() {
  pageScroll = window.pageYOffset;
  let scrollTop = pageScroll;


  /*
  let timerId = setTimeout( () => {
    if (pageScroll > headerTopHeight) {
      headerPositionTop = headerBotHeight + headerTopHeight;
      header.style.top = `${-headerPositionTop}px`;
    } else {
      return;
    }
  }, 5000);
  */
  if (pageScroll > headerTopHeight) {
    headerPositionTop = headerTopHeight;
    header.style.top = `${-headerPositionTop}px`;

  } else {
    /*clearTimeout(timerId);*/
    headerPositionTop = 0;
    header.style.top = `${-headerPositionTop}px`;

  }

  if (pageScroll > 265) {
    header.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
  } else {
    header.style.backgroundColor = 'transparent';
  }

  if (pageScroll > (bannerHeight / 2)) {                        //при скроле вниз хайдится хедер
    if (scrollTop > headerLastScrollTop) {
      headerPositionTop = headerTopHeight + headerBotHeight;
    } else {
      headerPositionTop = headerTopHeight;
    }
    header.style.top = `${-headerPositionTop}px`;

  }

  if (scrollTop > headerLastScrollTop) {                        //при скроле вниз добавляется класс к форме заявки
    bannerBooking.classList.add('banner__booking_scroll');
  } else {
    bannerBooking.classList.remove('banner__booking_scroll');
  }

  headerLastScrollTop = scrollTop;
}




window.addEventListener('scroll', headerScroll);

//============= Modal =============

window.addEventListener('keydown', function(e) {              // закрытие модального окна по клавише ESC
  if (e.which == 27) modal.classList.remove('modal_visible')
});

bannerBookingLink.addEventListener('click', function() {
  modal.classList.add('modal_visible');
});
