"use strict"

//============= Заполнение формы количества гостей =============

let buttonAdultMinus = document.querySelectorAll('.guestAdultMinus');
let buttonAdultPlus = document.querySelectorAll('.guestAdultPlus');
let buttonChildMinus = document.querySelectorAll('.guestChildMinus');
let buttonChildPlus = document.querySelectorAll('.guestChildPlus');
let guestAdult = document.querySelector('#guestAdult');
let guestChild = document.querySelector('#guestChild');
let modalGuestAdult = document.querySelector('#modalGuestAdult');
let modalGuestChildren = document.querySelector('#modalGuestChildren');

const medaiaQuery500 = window.matchMedia('(max-width: 500px)');

function checkGuest(target, minValue, minTargetValue, maxValue, maxTargetValue) { // проверка на соответствие заявки мин и макс количеству мест в домиках
  if(target.value <= minValue) {
    target.value = minTargetValue;
  } if (target.value >= maxValue) {
    target.value = maxTargetValue;
  }
}

function guestPlus(button, target, minValue, minTargetValue, maxValue, maxTargetValue, modalTarget) {
  Array.from(button).forEach( item => item.addEventListener('click', function(event) { //увеличение количества гостей
    event.preventDefault();
    target.value ++;
    checkGuest(target, minValue, minTargetValue, maxValue, maxTargetValue);
    modalTarget.value = target.value;
    setModalGuests(modalAdult, modalChildren, guestAdult, guestChild);
  }));
}

function guestMinus(button, target, minValue, minTargetValue, maxValue, maxTargetValue, modalTarget) {
  Array.from(button).forEach( item => item.addEventListener('click', function(event) { //увеличение количества гостей
    event.preventDefault();
    target.value --;
    checkGuest(target, minValue, minTargetValue, maxValue, maxTargetValue);
    modalTarget.value = target.value;
    setModalGuests(modalAdult, modalChildren, guestAdult, guestChild);
  }));
}

guestMinus(buttonAdultMinus, guestAdult, 0, 1, 43, 42, modalGuestAdult); // работа кнопок - и +, а также проверка input в Гости/взрослые
guestPlus(buttonAdultPlus, guestAdult, 0, 1, 43, 42, modalGuestAdult);
checkGuest(guestAdult);
guestAdult.addEventListener('focusout', () => {
  if(guestAdult.value <= 0) {
    guestAdult.value = 1;
  } if (guestAdult.value >= 43) {
    guestAdult.value = 42;
  }
});

guestMinus(buttonChildMinus, guestChild, 0 , 0, 43, 42, modalGuestChildren); // работа кнопок - и +, а также проверка input в Гости/дети
guestPlus(buttonChildPlus, guestChild, 0, 0, 43, 42, modalGuestChildren);
checkGuest(guestChild);
guestChild.addEventListener('focusout', () => {
  if(guestChild.value <= 0) {
    guestChild.value = 0;
  } if (guestChild.value >= 43) {
    guestChild.value = 42;
  }
});


//============= Анимация текста slideText =============

function animateSlideText(target) {
  target.addEventListener('mouseout', function() {
    target.style.animation = 'slideTextBackward 0.4s ease forwards';
    setTimeout( () => {target.style.animation = null}, 500);
  });
}

let bannerLink = document.querySelector('.banner__booking-link');
animateSlideText(bannerLink);

let payLink = document.querySelector('.pay__booking');
animateSlideText(payLink);

let contactsSubmit = document.querySelector('.contacts__form-submit');
animateSlideText(contactsSubmit);

let detailedLink = document.querySelectorAll('.detailed__link');
Array.from(detailedLink).forEach( (item) => {
  animateSlideText(item);
});

let contactsFormSubmit = document.querySelector('.contacts__form-submit');
animateSlideText(contactsFormSubmit);




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
let servicesCountMobile = 1;

function checkVariables() {
servicesSliderLength = servicesSliderList.length;
servicesSliderMargin = parseInt(getComputedStyle(servicesSliderList[1]).marginLeft);
servicesSliderWidth = parseInt(getComputedStyle(servicesSliderList[1]).width);
  if (medaiaQuery500.matches) {
    servicesSlider.style.width = `calc(100% * ${servicesSliderList.length})`;
  }
}
window.addEventListener('DOMContentLoaded', checkVariables);
window.addEventListener('resize', checkVariables);

function sliderServicesForward(marker, slider) {
  servicesCount++;
  if (servicesCount >= servicesSliderLength-4) servicesCount = servicesSliderLength-4;
  marker.style.transform = `translateX(${(servicesCount)*100/((servicesSliderLength - 4) / 2)}%)`;
  slider.style.transform = `translateX(calc(${-servicesCount * servicesSliderWidth}px - ${servicesSliderMargin}px * ${servicesCount}))`;

  if (medaiaQuery500.matches) {
    servicesCountMobile++;          // счетчик в мобильной версии
    if (servicesCountMobile >= servicesSliderLength) servicesCountMobile = servicesSliderLength;
    document.querySelector('.services__slider1-current').textContent = `${servicesCountMobile}`;
    slider.style.transform = `translateX(calc(-${100 / servicesSliderList.length * (servicesCountMobile - 1)}%))`;
  }
}

function sliderServicesBackward(marker, slider) {
  servicesCount--;
  if (servicesCount <= 0) servicesCount = 0;
  marker.style.transform = `translateX(${(servicesCount)*100/((servicesSliderLength - 4) / 2)}%)`;
  slider.style.transform = `translateX(calc(${-servicesCount * servicesSliderWidth}px - ${servicesSliderMargin}px * ${servicesCount}))`;

  if (medaiaQuery500.matches) {
    servicesCountMobile--;          // счетчик в мобильной версии
    if (servicesCountMobile <= 1) servicesCountMobile = 1;
    document.querySelector('.services__slider1-current').textContent = `${servicesCountMobile}`;
    slider.style.transform = `translateX(calc(-${100 / servicesSliderList.length * (servicesCountMobile - 1)}%))`;
  }
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

servicesButtonPlus.addEventListener('click', function servicesSliderPlus() {
  sliderServicesForward(servicesMarker, servicesSlider);
});

servicesButtonMinus.addEventListener('click', function servicesSliderMinus() {
  sliderServicesBackward(servicesMarker, servicesSlider);
});

servicesButtonBlock.addEventListener('click', function servicesSliderOpacity() {
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

let modalName = document.querySelector('#modal__name');
modalName.addEventListener('keypress', noDigits);

//============= Header =============

let header = document.querySelector('.header');
let headerTop = document.querySelector('.header__top');
let headerBot = document.querySelector('.header__bot');
let headerBotHeight = parseInt(getComputedStyle(headerBot).height);
let headerTopHeight = parseInt(getComputedStyle(headerTop).height);
let bannerHeight;
let bannerBookingLink = document.querySelector('.banner__booking-link');
let bannerBookingLinkTab = document.querySelectorAll('.banner__booking-tab')[2];

let modal = document.querySelector('.modal');
let headerPositionTop;
let pageScroll;
let headerLastScrollTop = 0;
let bannerBooking = document.querySelector('.banner__booking');
let textHeadTop;

function headerScroll(textHeadTop, bannerHeight) {
  pageScroll = window.pageYOffset;
  let scrollTop = pageScroll;

  if (pageScroll > headerTopHeight) {
    headerPositionTop = headerTopHeight;
    header.style.top = `${-headerPositionTop}px`;
  } else {
    headerPositionTop = 0;
    header.style.top = `${-headerPositionTop}px`;
  }

  if (pageScroll > textHeadTop) {
    header.style.backgroundColor = medaiaQuery500.matches ? 'rgba(0, 0, 0, 0.9)' : 'rgba(0, 0, 0, 1)';
  } else {
    header.style.backgroundColor = 'transparent';
  }

  if (pageScroll > (bannerHeight)) {                        //при скроле вниз хайдится хедер
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

  if (pageScroll > bannerHeight / 10 && medaiaQuery500.matches) {
    bannerBookingLink.classList.add('banner__booking-link_dark');
  } else {
    bannerBookingLink.classList.remove('banner__booking-link_dark');
  }
};




window.addEventListener('scroll', () => headerScroll(textHeadTop, bannerHeight));


//============= Modal =============

let modalHeight, apartamentsHeight;
let body          = document.querySelector('.body');
let modalAdult    = document.querySelector('.modal__adult');
let modalChildren = document.querySelector('.modal__children');
let modalSubmit   = document.querySelector('.modal__submit');

let modalTextarea = document.querySelector('#modal__textarea');
if (modalTextarea.value == '') modalTextarea.style.height = '60px';

let modalButtonGuests = document.querySelector('#modal__button_guests');
let modalWindow = document.querySelector('.modal__window');
let modalWrapper = document.querySelector('.modal__wrapper');
let modalSubguestsList = document.querySelectorAll('.modal__tab_subguests');


function setModalGuests(adultTarget, childrenTarget, adultSource, childrenSource) {
  let phrase = ['взрослый', 'взрослых', 'ребенок', 'ребенка', 'детей'];

  if (adultSource.value > 1) {
    adultTarget.textContent = `${adultSource.value} ${phrase[1]}`;
  } else if(adultSource.value == 1) {
    adultTarget.textContent = `${adultSource.value} ${phrase[0]}`;
  }

  if (childrenSource.value == 1) {
    childrenTarget.textContent = `, ${childrenSource.value} ${phrase[2]}`;
  } else if (childrenSource.value > 1 && childrenSource.value <= 4) {
    childrenTarget.textContent = `, ${childrenSource.value} ${phrase[3]}`;
  } else if (childrenSource.value > 4) {
    childrenTarget.textContent = `, ${childrenSource.value} ${phrase[4]}`;
  } else if (childrenSource.value == 0) {
    childrenTarget.textContent = null;
  }
}

function auto_grow(element) {    // изменение высота textarea
  element.style.height = "5px";
  element.style.height = (element.scrollHeight)+"px";
  if (modalTextarea.value == '') modalTextarea.style.height = '60px';
}

function closeModal() {                                       // функция, описывающая действия при закрытии модального окна
  modal.classList.remove('modal_visible');
  body.style.overflowY = 'unset';
  modalSubmit.style.transition = '0s';
  modalWrapper.classList.remove('modal__wrapper_drift');
  modalWindow.classList.remove('modal__window_large');
  modalSubguestsList.forEach( item => item.classList.remove('modal__tab_subguests_visible'));
  headerBot.classList.remove('header__bot_modal');
  modalWindow.classList.remove('modal__window_calendar');
  setTimeout( () => {
    modalSubmit.style.transition = 'all 0.4s ease';
  }, 100);

  if (calendar.classList.contains('calendar__hide')) calendar.classList.remove('calendar__hide');
}

window.addEventListener('keydown', function(e) {              // закрытие модального окна по клавише ESC
  if (e.which == 27) closeModal();
});

modal.addEventListener('click', function(event) {            // закрытие модального окна вне поля
  let el = event.target;
  if (el.className === 'modal modal_visible' && !medaiaQuery500.matches) closeModal();
})

document.querySelector('.modal__close').addEventListener('click', closeModal);

bannerBookingLink.addEventListener('click', function() {
  modal.classList.add('modal_visible');
  body.style.overflowY = 'hidden';

  if (modal.classList.contains('modal_visible') && medaiaQuery500.matches) {
    headerBot.classList.add('header__bot_modal');
  } else {
    headerBot.classList.remove('header__bot_modal');
  }

  if (!document.querySelector('.burger__button').classList.contains('burger__button_active') && medaiaQuery500.matches) {
    document.querySelector('.burger__button').classList.add('burger__button_active')
  }

  if (!burgerMenu.classList.contains('burger__menu_visible') && medaiaQuery500.matches) {
    setTimeout( () => burgerMenu.classList.add('burger__menu_visible'), 300);
    headerBot.classList.add('header__bot_animated');
  }

  setModalGuests(modalAdult, modalChildren, guestAdult, guestChild);
});

modalButtonGuests.addEventListener('click', function(e) {
  e.preventDefault();
})
modalButtonGuests.addEventListener('click', addSaubguests);

function addSaubguests() {
  modalWindow.classList.toggle('modal__window_large');
  modalWrapper.classList.toggle('modal__wrapper_drift');
  modalSubguestsList.forEach( item => item.classList.toggle('modal__tab_subguests_visible'));
}
