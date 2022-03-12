let burger = document.querySelector('.burger');
let burgerMenu ;
let footerHeader;
let burgerButton = document.querySelector('.burger__button');
let html = document.querySelector('html');
let footer = document.querySelector('footer');

let footerConnection = document.querySelector('.footer__connection');


let headerContact = document.querySelector('.header__contact');
let headerSocials = document.querySelector('.header__socials');

let paySliderControl = document.querySelector('.slider__control');
let paySliderImage = document.querySelector('.pay__slider-image');

let servicesShowplaceImage = document.querySelector('.services__showplace-image');
let servicesShowplaceSliderControls = document.querySelector('.showplace__slider-control');

let servicesSliderColunterArea = document.querySelector('.services__slider1-counter');
let servicesSlider1Count = document.createElement('div');                                        // создаю числовой счетчик слайдера

let headerNav = document.querySelector('.header__nav');
let headerNavLinkList = document.querySelectorAll('.header__nav-link:not(.footer__nav-link)');

function checkMeadiaQuery() {
  if (medaiaQuery500.matches) {
    servicesSlider1Count.classList.add('services__slider1-count');                              // добавляю числовой счетчик в слайдер1
    servicesSlider1Count.innerHTML = '<span class="services__slider1-current"></span> / <span class="services__slider1-total"></span>';
    servicesSliderColunterArea.append(servicesSlider1Count);

    textHeadTop = parseInt(getComputedStyle(document.querySelector('.banner__heading')).marginTop) * 0.58;
    bannerHeight = parseInt(getComputedStyle(document.querySelector('.banner')).height) * 0.8;

    document.querySelector('.services__slider1-current').textContent = `${servicesCountMobile}`;
    document.querySelector('.services__slider1-total').textContent = `${servicesSliderLength}`;

    if (!footerHeader) {
      footerHeader = document.createElement('h2');                                      // создаю заголовок в футере
      footerHeader.classList.add('footer__heading');                                        // присваиваю класс
      footerConnection = document.querySelector('.footer__connection');
      footerConnection.prepend(footerHeader);
      footerHeader.textContent = 'Контакты';
    }

    header.prepend(headerBot);

    Array.from(headerNavLinkList).forEach( (item) => {
      item.addEventListener('click', burgerAction);
    });

    //dafdsf

    if (!burgerMenu) {
      burgerMenu = document.createElement('div');                                       // создаю бургер-меню
      burgerMenu.classList.add('burger__menu');                                             // присваиваю класс
    }

    headerBot.append(burger);
    headerTop.append(burgerMenu);

    burgerMenu.append(headerContact);
    burgerMenu.append(headerSocials);

    burger.addEventListener('click', burgerAction);
    document.querySelector('.modal__tab_checkInOut .modal__label').textContent = 'Заезд - Выезд';

    modalWindow.append(calendar);
  } else {
    servicesSlider1Count.remove();

    textHeadTop = 265;
    bannerHeight = parseInt(getComputedStyle(document.querySelector('.banner')).height) / 2 ;

    headerTop.append(headerContact);                                                    // возвращаю элементы в HeaderTop
    headerTop.append(headerSocials);

    header.prepend(headerTop);

    if (footerHeader) {
      footerHeader.remove();
    }

    //34534534
    if (getComputedStyle(burger).display == 'flex') {
      burger.removeEventListener('click', burgerAction);

      burger.remove();
      burgerMenu.remove();
    }

    document.querySelector('.modal__tab_checkInOut .modal__label').textContent = 'Заезд - Выезд';
    document.querySelector('script').before(calendar);
    headerNav.classList.remove('header__nav_burger');

    Array.from(headerNavLinkList).forEach( (item) => {
      item.removeEventListener('click', burgerAction);
    });
  }

  //изменяю положение кнопок управления слайдерами
  setSliderControlPosition(paySliderControl, paySliderImage);
  setSliderControlPosition(servicesShowplaceSliderControls, servicesShowplaceImage);
}

function burgerAction() {                                       // добавляю обработчик по клику на бургер
  burgerMenu.classList.toggle('burger__menu_visible');
  html.classList.toggle('html__hidden');
  burgerButton.classList.toggle('burger__button_active');
  headerBot.classList.toggle('header__bot_animated');

  if (burgerMenu.classList.contains('burger__menu_visible') && medaiaQuery500.matches) {
    burgerMenu.prepend(bannerBookingLinkTab);
    bannerBookingLinkTab.classList.add('banner__booking-tab_link_burger');
    headerNav.classList.add('header__nav_burger');
    bannerBookingLinkTab.after(headerNav);
  } else {
    setTimeout( () => {
      document.querySelectorAll('.banner__booking-item')[3].append(bannerBookingLinkTab);
      bannerBookingLinkTab.classList.remove('banner__booking-tab_link_burger');
      headerNav.classList.remove('header__nav_burger');
      document.querySelector('.header__logo').after(headerNav);
    }, 410)
  }

  if (modal.classList.contains('modal_visible')) {
    html.classList.remove('html__hidden');
    closeModal();
  } else if (modal.classList.contains('modal_visible') && !burgerMenu.classList.contains('burger__menu_visible')) {
    burgerButton.classList.remove('burger__button_active');
    burgerMenu.classList.remove('burger__menu_visible')
  }

  if (burgerButton.classList.contains('burger__button_active') && modal.classList.contains('modal_visible')) {
    burgerButton.classList.remove('burger__button_active');
    headerBot.classList.remove('header__bot_animated');
  }
}

function setSliderControlPosition(controls, obj) {
  if (medaiaQuery500.matches) {
    controls.style.top = `${parseInt(getComputedStyle(obj).height) + 40}px`; // изменяю положение кнопок управления слайдером
  } else {
    controls.style.top = 'unset';
  }
}

window.addEventListener('DOMContentLoaded', checkMeadiaQuery);
window.addEventListener('resize', checkMeadiaQuery);
window.addEventListener('load', checkMeadiaQuery);
