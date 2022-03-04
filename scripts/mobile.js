const medaiaQuery500 = window.matchMedia('(max-width: 500px)');                       // медиазапрос максимальной ширины 500px


let burger;
let burgerMenu;
let footerHeader;
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


  medaiaQuery500.matches ? addBurger() : removeBurger();

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
    })
  } else {
    servicesSlider1Count.remove();

    textHeadTop = 265;
    bannerHeight = parseInt(getComputedStyle(document.querySelector('.banner')).height) / 2 ;

    header.apepend(headerBot);

    if (footerHeader) {
      footerHeader.remove();
    }
  }

  //изменяю положение кнопок управления слайдерами
  setSliderControlPosition(paySliderControl, paySliderImage);
  setSliderControlPosition(servicesShowplaceSliderControls, servicesShowplaceImage);
}

function burgerAction() {                                       // добавляю обработчик по клику на бургер
  burgerMenu.classList.toggle('burger__menu_visible');
  html.classList.toggle('html__hidden');
  document.querySelector('.burger__button').classList.toggle('burger__button_active');
  headerBot.classList.toggle('header__bot_animated')

  if (burgerMenu.classList.contains('burger__menu_visible')) {
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

}

function addBurger() {
  if (!burger) {
    burger = document.createElement('div');                                           // создаю бургер
    burger.classList.add('burger');                                                       // присваиваю класс
    burgerMenu = document.createElement('div');                                       // создаю бургер-меню
    burgerMenu.classList.add('burger__menu');                                             // присваиваю класс

    burger.innerHTML = '<div class="burger__button"></div>';                            // создаю элементы управления бургером
    headerBot.append(burger);
    headerTop.append(burgerMenu);
    burgerMenu.append(headerContact);
    burgerMenu.append(headerSocials);

    burger.addEventListener('click', burgerAction);
  }
}

function removeBurger () {                                                            // удаляю бургер меню
  if (burger) {
    burger.removeEventListener('click', burgerAction);
    burger.remove();
  }


    headerTop.append(headerContact);                                                    // возвращаю элементы в HeaderTop
    headerTop.append(headerSocials);


}

function setSliderControlPosition(controls, obj) {
  if (medaiaQuery500.matches) {
    controls.style.top = `${parseInt(getComputedStyle(obj).height) + 40}px`; // изменяю положение кнопок управления слайдером
  } else {
    controls.style.top = 'unset';
  }
}

checkMeadiaQuery();
window.addEventListener('resize', checkMeadiaQuery);