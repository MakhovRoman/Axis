const medaiaQuery500 = window.matchMedia('(max-width: 500px)');                       //медиазапрос максимальной ширины 500px


let burger = document.createElement('div');                                           //создаю бургер
burger.classList.add('burger');                                                       //присваиваю класс
let burgerMenu = document.createElement('div');                                       //создаю бургер-меню
burgerMenu.classList.add('burger__menu');                                             //присваиваю класс



medaiaQuery500.matches ? addBurger() : removeBurger();

function addBurger() {
  burger.innerHTML = '<div class="burger__button"></div>'; //создаю элементы управления бургером
  headerBot.append(burger);
  headerTop.append(burgerMenu);

  burger.addEventListener('click', function() {
    burgerMenu.classList.toggle('burger__menu_visible');
    document.querySelector('.burger__button').classList.toggle('burger__button_active');
  })
}
