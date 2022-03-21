<?php
if(isset($_POST) AND count($_POST)>=2 AND strlen(implode('',$_POST)) > 5) {

  $body='';
  foreach($_POST as $key=>$val) {

    if ($key == 'modalGuestAdult') {
      $key_label = "Взрослых гостей";
    } elseif ($key == 'modalGuestChildren') {
      $key_label = "Количество детей";
    } elseif ($key == 'modal__name') {
      $key_label = "Имя";
    } elseif ($key == 'modal__tel') {
      $key_label = "Телефон";
    } elseif ($key == 'modal__textarea') {
      $key_label = "Вопрос";
    } elseif ($key == 'modal__checkIn_reserve') {
      $key_label = "Дата заезда";
    } elseif ($key == 'modal__checkOut_reserve') {
      $key_label = "Дата выезда";
    } elseif ($key == 'modalPersonalData') {
      $key_label = "Согласие на обработку данных";
    } else {
      $key_label = $key;
    }

    $body.='<b>'.$key_label.'</b>: '.$val.'<br />';

  }

$headers  = "Content-type: text/html; charset=utf8 \r\n";
$headers .= "From: <send@axis-hotel.ru>\r\n";
$headers .= "Reply-To: send@axis-hotel.ru\r\n";

mail('chepurnov@nelset.com', '[AXIS-HOTEL.RU]', $body,$headers);
mail('info@axis-hotel.ru', '[AXIS-HOTEL.RU]', $body,$headers);
header("Location: ?send=ok&time=".time()."#openModal");
}
?>

<!DOCTYPE html>

<html lang="ru">

<head>

  <meta charset="UTF-8">

  <meta http-equiv="X-UA-Compatible" content="IE=edge">

  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <link rel="stylesheet" href="style/style.css">
  <link rel="stylesheet" href="style/custom.css">
  <link rel="icon" href="picture/icons/favicon.png" type="image/x-icon">
  <title>Апартаменты в Архызе | Apart-отель Axis</title>
  <meta name="description" content="Апартаменты в горнолыжном курорте Архыз — отель Axis. Комплекс из 7 двухэтажных коттеджей с домашним уютом и гостиничным сервисом. Бронируйте онлайн прямо сейчас!"/>

</head>

<body class="body">

  <header class="header">

    <section class="header__top">

      <div class="header__contact">

        <a href="tel:+79288112211" class="header__tel link">

          <div class="header__contact-img">

            <img src="picture/icons/phone.svg" alt="">

          </div>

          <span class="header__contact-text">+7 928 811 22 11</span>

        </a>

        <a href="mailto:info@axis-hotel.ru" class="header__mail link">

          <div class="header__contact-img">

            <img src="picture/icons/envelope.svg" alt="">

          </div>

          <span class="header__contact-text">info@axis-hotel.ru</span>

        </a>

      </div>

      <div class="header__socials">

        <a href="https://www.instagram.com/axis_hotel/" class="header__socials-link"><img src="picture/icons/instagram.svg" alt="instagram"></a>

        <!-- <a href="#" class="header__socials-link"><img src="picture/icons/facebook.svg" alt=""></a> -->

        <a href="#" class="header__socials-link"><img src="picture/icons/booking.svg" alt="booking"></a>

        <!-- <a href="#" class="header__socials-link"><img src="picture/icons/vkontakte.svg" alt=""></a>

        <a href="#" class="header__socials-link"><img src="picture/icons/odnoklassniki.svg" alt=""></a> -->

      </div>

    </section>

    <section class="header__bot">

      <div class="header__logo">

        <a href="/" class="header__logo-link">

          <picture>

            <source srcset="picture/full_logo.svg" media="(min-width: 800px)">

            <source srcset="picture/mobile/mobile__logo.svg" media="(max-width: 500px)">

            <img src="picture/full_logo.svg" alt="">

          </picture>

        </a>

      </div>

      <nav class="header__nav">

        <ul class="header__nav-list">

          <li class="header__nav-item"><a href="#aboutUs" class="header__nav-link link">О нас</a></li>

          <li class="header__nav-item"><a href="#apartaments" class="header__nav-link link">Апартаменты</a></li>

          <li class="header__nav-item"><a href="#pay" class="header__nav-link link">Оплата</a></li>

          <li class="header__nav-item"><a href="#ski" class="header__nav-link link">Ski</a></li>

          <li class="header__nav-item"><a href="#food" class="header__nav-link link">Ресторан</a></li>

          <li class="header__nav-item"><a href="#services" class="header__nav-link link">Сервис</a></li>

          <li class="header__nav-item"><a href="#contacts" class="header__nav-link link">Контакты</a></li>

        </ul>

      </nav>

      <div class="header__feedback">

        <a href="#" class="header__feedback-link link">Заказать звонок</a>

      </div>

      <div class="burger">

        <div class="burger__button"></div>

      </div>

    </section>

  </header>

  <section class="banner" id="aboutUs">

    <picture>

      <source srcset="picture/mobile/mobile__banner.png" media="(max-width: 500px)">

      <source srcset="picture/BG.png" media="(min-width: 800px)">

      <img src="picture/BG.png" alt="" class="banner__img">

    </picture>

    <div class="banner__wrapper content__wrapper">

      <div class="banner__container content__container">

        <h1 class="banner__heading">Уютные Апартаменты в центре горнолыжного курорта</h1>

        <form class="banner__booking content__wrapper" name="booking" method="post">

          <div class="banner__booking-item">

            <p class="banner__booking-title">Заезд – Выезд</p>

            <div class="banner__booking-calendar">

              <div class="banner__booking_date">

                <span id="booking__checkIn">Заезд</span><span id="booking__checkOut"> — Выезд</span>

              </div>

              <button id="showCalendar">

                <img src="picture/icons/date_picker.svg" alt="">

              </button>

            </div>

          </div>

          <div class="banner__booking-item">

            <p class="banner__booking-title">Гости</p>

            <div class="banner__booking-tab">

              <label for="adults" class="banner__booking-label">Взрослые</label>

              <button class="banner__booking-button guestAdultMinus" id="guestAdultMinus">

                <img src="picture/icons/minus.svg" alt="" class="button__sign">

              </button>

              <input type="number" class="banner__booking-input" id="guestAdult" name="adults" value="2" min="1" max="42">

              <button class="banner__booking-button guestAdultPlus" id="guestAdultPlus">

                <img src="picture/icons/plus.svg" alt="" class="button__sign">

              </button>

            </div>

          </div>

          <div class="banner__booking-item">

            <p class="banner__booking-title">Гости</p>

            <div class="banner__booking-tab">

              <label for="child" class="banner__booking-label">Дети</label>

              <button class="banner__booking-button guestChildMinus" id="guestChildMinus">

                <img src="picture/icons/minus.svg" alt="" class="button__sign">

              </button>

              <input type="number" class="banner__booking-input" id="guestChild" name="child" value="0" min="0" max="42">

              <button class="banner__booking-button guestChildPlus" id="guestChildPlus">

                <img src="picture/icons/plus.svg" alt="" class="button__sign">

              </button>

            </div>

          </div>

          <div class="banner__booking-item">

            <div class="banner__booking-tab banner__booking-tab_link">

              <a href="#" class="banner__booking-link link">

                Забронировать

                <img src="picture/icons/arrow.svg" alt="">

              </a>

            </div>

          </div>

        </form>

      </div>

    </div>

  </section>

  <main class="main">

    <section class="apartaments" id="apartaments">

      <div class="apartaments__wrapper content__wrapper">

        <div class="apartments__container content__container content__container_left">

          <div class="apartaments__photo">

            <picture>

              <source srcset="picture/mobile/mobile__front__photo.png" media="(max-width: 500px)">

              <source srcset="picture/front_photo.png" media="(min-width: 800px)">

              <img src="picture/front_photo.png" alt="">

            </picture>

          </div>

          <div class="apartaments__info">

            <h2 class="apartments__heading section__heading">Отдых в Архызе европейскоего уровня</h2>

            <p class="apartaments__paragraph content__paragraph">

              Апарт-отель «Axis» — это комплекс из 7 двухэтажных коттеджей с домашним уютом и гостиничным сервисом.

            </p>

            <p class="apartaments__paragraph content__paragraph">

              В отличие от обычного отеля, здесь больше пространства, комфорта и свободы действий.

            </p>

            <p class="apartaments__paragraph content__paragraph">

              Мы подготовили универсальные апартаменты для любых типов поездок: горнолыжные развлечения, туристические выходные для двоих, путешествие в компании друзей и семьи или новый формат бизнес-встреч «pleasure», в котором объединяются работа и отдых.

            </p>

            <div class="apartaments__icons">

              <div class="apartament__icons-item">

                <img src="picture/icons/house.svg" alt="">

                <p class="apartament__icon-label">Уютные шале</p>

              </div>

              <div class="apartament__icons-item">

                <img src="picture/icons/bed.svg" alt="">

                <p class="apartament__icon-label">2 спальни</p>

              </div>

              <div class="apartament__icons-item">

                <img src="picture/icons/guests.svg" alt="">

                <p class="apartament__icon-label">до 6 гостей</p>

              </div>

              <div class="apartament__icons-item">

                <img src="picture/icons/lift.svg" alt="">

                <p class="apartament__icon-label">200м до подъемников</p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>

    <section class="pay" id="pay">

      <div class="pay__wrapper content__wrapper">

        <div class="pay__container content__container">

          <div class="pay__info">

            <h2 class="pay__heading section__heading">

              Шале с видом на лес<br>и горнолыжную трассу

            </h2>

            <p class="pay__paragraph content__paragraph">

              На первом этаже кухня, гостиная и душ, а на втором — две спальни, с личными ванными комнатами.

            </p>

            <p class="pay__paragraph content__paragraph">

              У апартаментов есть широкие балконы, с которых удобно любоваться пейзажем и горнолыжной трассой. Площадка — хорошее место для памятных фототографий. Также предусмотрена бесплатная парковка и wi-fi.

            </p>

            <ul class="pay__list">

              <li class="pay__list-item"><div class="circle"></div>Цена: 45 000 р/сутки</li>

              <li class="pay__list-item"><div class="circle"></div>Заезд в 15:00</li>

              <li class="pay__list-item"><div class="circle"></div>Расчетный час в 12:00</li>

            </ul>

            <a href="#" class="pay__booking">

              Забронировать

              <img src="picture/icons/arrow_black.svg" alt="">

            </a>

          </div>

          <div class="pay__shale">

            <picture>

              <source srcset="picture/room/shale.png" media="(min-width: 800px)">

              <img src="picture/room/shale.png" alt="" class="pay__img">

            </picture>

          </div>

          <div class="pay__lines">

            <picture>

              <source srcset="picture/room/closely_bed.png" media="(min-width: 800px)">

              <img src="picture/room/closely_bed.png" alt="" class="pay__img">

            </picture>

          </div>

          <div class="pay__lamp">

            <picture>

              <source srcset="picture/room/lamp.png" media="(min-width: 800px)">

              <img src="picture/room/lamp.png" alt="" class="pay__img">

            </picture>

          </div>

          <div class="pay__bootle">

            <picture>

              <source srcset="picture/room/cups.png">

              <img src="picture/room/cups.png" alt="" class="pay__img">

            </picture>

          </div>

          <div class="pay__diningroom">

            <picture>

              <source srcset="picture/room/table.png" media="(min-width: 800px)">

              <img src="picture/room/table.png" alt="" class="pay__img">

            </picture>

          </div>

          <div class="pay__towel">

            <picture>

              <source srcset="picture/room/towel.png" media="(min-width: 800px)">

              <img src="picture/room/towel.png" alt="" class="pay__img">

            </picture>

          </div>

          <div class="pay__lamp2">

            <picture>

              <source srcset="picture/room/lamp2.png" media="(min-width: 800px)">

              <img src="picture/room/lamp2.png" alt="" class="pay__img">

            </picture>

          </div>

        </div>

        <div class="pay__slider">

          <div class="pay__slider-wrapper">

            <div class="pay__slider-item content__container content__container_right">

              <div class="slider__content">

                <h3 class="pay__slider-heading section__heading">Наше местоположение</h3>

                <p class="pay__slider-paragraph content__paragraph">

                  Шагните в элегантную зимнюю сказку вместе с «Axis».

                  <br>

                  Для любителей горнолыжного спорта у нас есть отличные новости — мы находимся всего в 200 метрах от канатной дороги.

                </p>

                <p class="pay__slider-paragraph content__paragraph">

                  В стоимость проживания включено: парковка — ваш транспорт будет под надежной защитой, и высокоскоростной wi-fi, чтобы всегда оставаться на связи с родными и делиться радостными моментами.

                </p>

              </div>

              <div class="pay__slider-image">

                <picture>

                  <source srcset="picture/snow.png" media="(min-width: 800px)">

                  <img src="picture/snow.png" alt="">

                </picture>

              </div>

            </div>

            <div class="pay__slider-item content__container content__container_right">

              <div class="slider__content">

                <h3 class="pay__slider-heading section__heading">Гостиная</h3>

                <p class="pay__slider-paragraph content__paragraph">

                  Во всех номерах отеля есть просторная гостиная зона с большим ЖК телевизором, где можно уютно расположиться большой компанией.

                </p>

                <p class="pay__slider-paragraph content__paragraph">Яркий и стильный дизайн украсит не только ваш досуг в горах, но и фотокарточки.</p>

              </div>

              <div class="pay__slider-image">

                <picture>

                  <source srcset="picture/living_room.png" media="(min-width: 800px)">

                  <img src="picture/living_room.png" alt="">

                </picture>

              </div>

            </div>

            <div class="pay__slider-item content__container content__container_right">

              <div class="slider__content">

                <h3 class="pay__slider-heading section__heading">Спальня</h3>

                <p class="pay__slider-paragraph content__paragraph">

                  На втором этаже – две спальни с мягкой двуспальной кроватью и личной ванной комнатой.

                </p>

                <p class="pay__slider-paragraph content__paragraph">Ценители более спокойного отдыха смогут полюбоваться колоритным пейзажем из панорамных окон апартаментов.</p>

              </div>

              <div class="pay__slider-image">

                <picture>

                  <source srcset="picture/bedroom.png" media="(min-width: 800px)">

                  <img src="picture/bedroom.png" alt="">

                </picture>

              </div>

            </div>

            <div class="pay__slider-item content__container content__container_right">

              <div class="slider__content">

                <h3 class="pay__slider-heading section__heading">Балкон</h3>

                <p class="pay__slider-paragraph content__paragraph">

                  Вид из апартаментов «Axis» — наша настоящая гордость.

                  <br>

                  У апартаментов есть широкие балконы, с которых удобно любоваться пейзажем и горнолыжной трассой.

                </p>

                <p class="pay__slider-paragraph content__paragraph">Площадка — хорошее место, чтобы насладиться тишиной и покоем, с чашечкой душистого чая в руках.</p>

              </div>

              <div class="pay__slider-image">

                <picture>

                  <source srcset="picture/balcony.png" media="(min-width: 800px)">

                  <img src="picture/balcony.png" alt="">

                </picture>

              </div>

            </div>

            <div class="pay__slider-item content__container content__container_right">

              <div class="slider__content">

                <h3 class="pay__slider-heading section__heading">Кухня</h3>

                <p class="pay__slider-paragraph content__paragraph">

                  Кухня в наших коттеджах устроена так, чтобы вы чувствовали себя, как дома — комфортно и уютно.

                </p>

                <p class="pay__slider-paragraph content__paragraph">

                  В наличии: холодильник, микроволновая печь, столовые приборы, тарелки, супницы, чайные кружки, бокалы, а также электрический чайник.

                </p>

              </div>

              <div class="pay__slider-image">

                <picture>

                  <source srcset="picture/broad_kitchen.png" media="(min-width: 800px)">

                  <img src="picture/broad_kitchen.png" alt="">

                </picture>

              </div>

            </div>

            <div class="pay__slider-item content__container content__container_right">

              <div class="slider__content">

                <h3 class="pay__slider-heading section__heading">Ванная комната</h3>

                <p class="pay__slider-paragraph content__paragraph">

                  Горячая ванная и душ позволят вам расслабиться после активного отдыха на горнолыжных склонах. В ванной комнате вы найдете все необходимое, чтобы чувствовать себя комфортно.

                </p>

              </div>

              <div class="pay__slider-image">

                <img src="picture/room/bathroom.png" alt="">

              </div>

            </div>

          </div>

          <div class="slider__control">

            <button class="slider__control-button" id="slider__minus">

              <img src="picture/icons/arrow_black.svg" alt="">

            </button>

            <div class="slider__control-line"></div>

            <button class="slider__control-button" id="slider__plus">

              <img src="picture/icons/arrow_black.svg" alt="">

            </button>

            <div class="slider__control-count"><span id="slider__counter">1</span>/<span id="slider__length"></span></div>

          </div>

        </div>

      </div>

    </section>

    <section class="ski" id="ski">

      <div class="ski__wrapper content__wrapper">

        <div class="ski__trace content__container content__container_left">

          <div class="ski__trace-image">

            <picture>

              <source srcset="picture/ski.png" media="(min-width: 800px)">

              <source srcset="picture/mobile/mobile__ski.png" media="(max-width: 500px)">

              <img src="picture/ski.png" alt="">

            </picture>

          </div>

          <div class="ski__trace-content">

            <h2 class="ski__heading section__heading">Горнолыжные трассы в шаге от апартаментов</h2>

            <p class="ski__paragraph content__paragraph">

              Поселок «Романтик», в котором находится наш apart-отель, является горнолыжным центром Архыза. На курорте открыты 6 трасс общей протяженностью 7,2 км.

            </p>

            <p class="ski__paragraph content__paragraph">

              Любители горнолыжного отдыха оценят удобное расположение комплекса. В шаговой доступности от коттеджей находятся подъемники, а из окон открывается вид на «зеленую» трассу.

            </p>

            <p class="ski__paragraph content__paragraph">

              К услугам наших постояльцев мы предлагаем лыжехранилище, где можно бесплатно хранить свое снаряжение.

            </p>

            <p class="ski__paragraph content__paragraph">

              Средняя продолжительность сезона – 115 дней: со второй половины декабря, по начало марта, поэтому желательно задуматься о бронировании апартаметов заблаговременно.

            </p>

            <a href="#contacts" class="detailed__link">

              Узнать подробности

              <img src="picture/icons/arrow_black.svg" alt="">

            </a>

          </div>

        </div>

        <div class="ski__food content__container content__container_right" id="food">

          <div class="ski__food-content">

            <h2 class="ski__heading section__heading">Доставка еды из<br>ресторана в апартаменты</h2>

            <p class="ski__paragraph content__paragraph">

              В горах помимо безупречных природных пейзажей, Вас неприменно порадуют изысканные блюда европейской и аутентичной кавказской кухни.

            </p>

            <p class="ski__paragraph content__paragraph">

              Для комфорта наших постояльцев мы доставляем заказанные блюда прямо в апартаменты.

            </p>

            <p class="ski__paragraph content__paragraph">

              Даже привычная еда в горах воспринимаеся по новому, все вкусы усиливаются, становятся необычными. Возможно так влияют общие впечатления от окружающей природы, воздуха и воды.

            </p>

            <p class="ski__paragraph content__paragraph">

              Для нас очень важно, чтобы вы получили удовольствие не только от ментального или активного отдыха в горах, но и от вкусной еды.

            </p>

            <a href="#contacts" class="detailed__link">

              Узнать подробности

              <img src="picture/icons/arrow_black.svg" alt="">

            </a>

          </div>

          <div class="ski__food-image">

            <picture>

              <source srcset="picture/food.png" media="(min-width: 800px)">

              <source srcset="picture/mobile/mobile__food.png" media="(max-width: 500px)">

              <img src="picture/food.png" alt="">

            </picture>

          </div>

        </div>

      </div>

    </section>

    <section class="services" id="services">

      <div class="services__wrapper content__wrapper">

        <div class="services__slider1-wrapper">

          <div class="services__slider1">

            <div class="services__slider1-content">

              <div class="services__slider1-icon">

                <img src="picture/icons/parking.svg" alt="парковка">

              </div>

              <h3 class="services__slider1-heading">Бесплатная парковка</h3>

              <p class="services__slider1-paragraph content__paragraph">

                В период «высокого» сезона на курорте возникает загруженность парковочных мест, поэтому мы предоставляем бесплатную стоянку на территории отеля.

              </p>

            </div>

            <div class="services__slider1-content">

              <div class="services__slider1-icon">

                <img src="picture/icons/wifi.svg" alt="бесплатный wi-fi">

              </div>

              <h3 class="services__slider1-heading">Бесплатный Wi-Fi</h3>

              <p class="services__slider1-paragraph content__paragraph">

                Мобильный интернет и роуминг в горах могут стать проблемой, но не у нас. Делитесь видео и фотографиями, общайтесь и делитесь впечатлениями!

              </p>

            </div>

            <div class="services__slider1-content">

              <div class="services__slider1-icon">

                <img src="picture/icons/cleaning.svg" alt="уборка">

              </div>

              <h3 class="services__slider1-heading">Ежедневная уборка</h3>

              <p class="services__slider1-paragraph content__paragraph">

                Для вашего комфорта мы каждый день проводим уборку апартаментов, чтобы никакая мелочь не испортила Ваш отдых!

              </p>

            </div>

            <div class="services__slider1-content">

              <div class="services__slider1-icon">

                <img src="picture/icons/transfer.svg" alt="трансфер">

              </div>

              <h3 class="services__slider1-heading">Трансфер</h3>

              <p class="services__slider1-paragraph content__paragraph">

                В горах слишком красиво, чтобы смотреть только на дорогу. При необходимости организуем трансфер от любого транспортного узла к нам в apart-отель.

              </p>

            </div>

            <div class="services__slider1-content">

              <div class="services__slider1-icon">

                <img src="picture/icons/washing_machine.svg" alt="прачечная">

              </div>

              <h3 class="services__slider1-heading">Прачечная</h3>

              <p class="services__slider1-paragraph content__paragraph">

                Для наших гостей доступны услуги прачечной и глаженья одежды. Чтобы не беспокоиться о мелочах и насладиться отдыхом.

              </p>

            </div>



          </div>

          <div class="services__slider1-controls slider__control">

            <div class="services__slider1-buttons">

              <button class="slider__control-button" id="services__button-minus">

                <img src="picture/icons/arrow_black.svg" alt="стрелка">

              </button>

              <div class="slider__control-line"></div>

              <button class="slider__control-button" id="services__button-plus">

                <img src="picture/icons/arrow_black.svg" alt="стрелка">

              </button>

            </div>

            <div class="services__slider1-counter">

              <div class="services__slider1-marker"></div>

            </div>

          </div>

        </div>

        <div class="services__showplace">

          <div class="services__showplace-slider">

            <div class="services__showplace-item content__container content__container_right">

              <div class="services__showplace-content">

                <h3 class="services__showplace-heading section__heading">Аланское городище</h3>

                <p class="services__showplace-paragraph content__paragraph">

                  Аланское городище занимает почти 100 гектаров земли<br>

                  Архыза. Предположительно, именно здесь располагался исчезнувший город Магас, упоминавшийся в византийских летописях.

                </p>

                <p class="services__showplace-paragraph content__paragraph">

                  Через него проходил Великий Шелковый путь, который использовали торговцы и миссионеры, стремившиеся нести христианство в разные страны.Сейчас Аланское городище в Архызе — музей под открытым небом со статусом памятника федерального значения.

                </p>

                <p class="services__showplace-paragraph content__paragraph">

                  В музее-заповеднике можно увидеть древние христианские храмы, языческие памятники, остатки древней обсерватории и многое другое. Также во время прогулки можно попробовать воду из святого источника и узнать о древних жителях этой местности.

                </p>

              </div>

              <div class="services__showplace-image">

                <picture>

                  <source srcset="picture/alanian_settlement.png" media="(min-width: 800px)">

                  <img src="picture/alanian_settlement.png" alt="">

                </picture>

              </div>

            </div>

            <div class="services__showplace-item content__container content__container_right">

              <div class="services__showplace-content">

                <h3 class="services__showplace-heading section__heading">Софийские водопады</h3>

                <p class="services__showplace-paragraph content__paragraph">

                  Софийские водопады представляют собой каскад из девяти мощных водных потоков.  Они по праву считаются самыми красивыми не только в Карачаево-Черкесии, но и на всём Кавказе.

                </p>

                <p class="services__showplace-paragraph content__paragraph">

                  Водопады расположены в ущелье реки Софии, на склоне одноименной горы и стекают с Софийского же ледника.

                </p>

                <p class="services__showplace-paragraph content__paragraph">

                  Весь маршрут до водопадов без преувеличения можно назвать самым эффектным во всем Архызе. На протяжении всего пути туристов окружает буйствующая зелень и касающиеся неба пики гор.

                </p>

              </div>

              <div class="services__showplace-image">

                <picture>

                  <source srcset="picture/sofia_waterfall.png" media="(min-width: 800px)">

                  <img src="picture/sofia_waterfall.png" alt="">

                </picture>

              </div>

            </div>

            <div class="services__showplace-item content__container content__container_right">

              <div class="services__showplace-content">

                <h3 class="services__showplace-heading section__heading">Озеро Любви</h3>

                <p class="services__showplace-paragraph content__paragraph">

                  Озеро любви, или Суук-Джюрек-Кёль, что в переводе означает «холодное сердце» — природный водоем уникальной формы, напоминающей сердце.

                </p>

                <p class="services__showplace-paragraph content__paragraph">

                  Озеро поселилось на плато Морг-Сырты на высоте 2500 метров над уровнем моря и входит в территорию Тебердинского заповедника. Прозрачная вода озера сверкает на солнце и переливается бирюзовым цветом, символизируя глубину и чистоту нежного чувства любви.

                </p>

                <p class="services__showplace-paragraph content__paragraph">

                  Сюда можно отправиться не только для того, чтобы покорить горные вершины, но и чтобы получить новые эмоции и провести самое романтическое свидание в своей жизни.

                </p>

              </div>

              <div class="services__showplace-image">

                <picture>

                  <source srcset="picture/lake_of_love.png" media="(min-width: 800px)">

                  <img src="picture/lake_of_love.png" alt="">

                </picture>

              </div>

            </div>

            <div class="services__showplace-item content__container content__container_right">

              <div class="services__showplace-content">

                <h3 class="services__showplace-heading section__heading">Баритовый водопад</h3>

                <p class="services__showplace-paragraph content__paragraph">

                  Баритовый водопад находится в 2 часах ходьбы от поселка Архыз. Тропа к водопаду пролегает по живописной баритовой балке, которая начинается сразу за поселком и круто «уходит» вверх за небольшой поляной.

                </p>

                <p class="services__showplace-paragraph content__paragraph">

                  По мере подъема лиственный лес сменяется хвойным, а ближе к водопаду начинается зона альпийских лугов. Все это великолепие открывает  роскошный вид на Архыз и долину реки Кизыч с ее горами и лесами.

                </p>

              </div>

              <div class="services__showplace-image">

                <picture>

                  <source srcset="picture/baritone_waterfall.png" media="(min-width: 800px)">

                  <img src="picture/baritone_waterfall.png" alt="">

                </picture>

              </div>

            </div>

          </div>

          <div class="slider__control showplace__slider-control">

            <button class="slider__control-button" id="sliderShowplace__minus">

              <img src="picture/icons/arrow_black.svg" alt="">

            </button>

            <div class="slider__control-line"></div>

            <button class="slider__control-button" id="sliderShowplace__plus">

              <img src="picture/icons/arrow_black.svg" alt="">

            </button>

            <div class="slider__control-count"><span id="sliderShowplace__counter">1</span>/<span  id="sliderShowplace__length"></span></div>

          </div>

        </div>

      </div>

    </section>

    <section class="contacts" id="contacts">

      <picture>

        <source srcset="picture/footer.png" media="(min-width: 800px)">

        <source srcset="picture/mobile/IMG_3853_1.png" media="(max-width: 500px)">

        <img src="picture/footer.png" alt="">

      </picture>

      <div class="contacts__wrapper content__wrapper">

        <div class="contacts__text">

          <h2 class="contacts__heading section__heading">Остались вопросы?</h2>

          <p class="contacts__paragraph">Наши контакты: <a href="tel:+79288112211">+7 928 811 22 11</a> <span class="separator">/</span> <a href="mailto:info@axis-hotel.ru">info@axis-hotel.ru</a><br>
          <span>Или оставьте номер телефона и мы перезвоним</span></p>

        </div>

        <form action="#" method="post" class="contacts__form content__container">

          <div class="contacts__form-item">

            <label for="contacts__name" class="contacts__form-label">Ваше имя</label>

            <input type="text" class="contacts__form-input" id="contacts__name" name="contacts__name" placeholder="Имя Фамилия" pattern="[a-zA-ZА-Яа-яёЁ\-\s\']" required>

          </div>

          <div class="contacts__form-item">

            <label for="contacts__tel" class="contacts__form-label">Номер телефона</label>

            <input type="tel" id="contacts__tel" class="contacts__form-input" name="contacts__tel" placeholder="+7 ХХХ ХХХ ХХ ХХ" data-mask="+7 ___ ___ ____" required>

          </div>

          <button type="submit" class="contacts__form-input contacts__form-submit">

            Отправить

            <img src="picture/icons/arrow.svg" alt="">

          </button>

            <div class="contacts__form-personal">

              <input type="radio" class="contacts__form-radio" name="personalData" value="1" id="personalData" checked>

              <label for="personalData" class="contacts__form-radioLabel">Даю согласие на обработку персональных данных.</label>

            </div>

        </form>

      </div>

    </section>

  </main>

  <footer class="footer">

    <div class="footer__wrapper content__wrapper">

      <div class="footer__content">

        <div class="footer__links">

          <div class="footer__logo">

            <a href="#">

              <picture>

                <source srcset="picture/full_logo.svg" media="(min-width: 800px)">

                <source srcset="picture/mobile/mobile__logo.svg" media="(max-width: 500px)">

                <img src="picture/full_logo.svg" alt="">

              </picture>

            </a>

          </div>

          <nav class="footer__nav">

            <ul class="header__nav-list footer__nav-list">

              <li class="header__nav-item"><a href="#aboutUs" class="header__nav-link link footer__nav-link">О нас</a></li>

              <li class="header__nav-item"><a href="#apartaments" class="header__nav-link link footer__nav-link">Апартаменты</a></li>

              <li class="header__nav-item"><a href="#pay" class="header__nav-link link footer__nav-link">Оплата</a></li>

              <li class="header__nav-item"><a href="#ski" class="header__nav-link link footer__nav-link">Ski</a></li>

              <li class="header__nav-item"><a href="#food" class="header__nav-link link footer__nav-link">Ресторан</a></li>

              <li class="header__nav-item"><a href="#services" class="header__nav-link link footer__nav-link">Сервис</a></li>

              <li class="header__nav-item"><a href="#contacts" class="header__nav-link link footer__nav-link">Контакты</a></li>

            </ul>

          </nav>

          <a href="#" class="footer__booking link header__feedback-link">Забронировать</a>

        </div>

        <div class="footer__connection">

          <div class="header__contact footer__contact">

            <a href="tel:+79288112211" class="header__tel link footer__tel">

              <div class="header__contact-img footer__contact-img">

                <img src="picture/icons/phone.svg" alt="">

              </div>

              <span class="header__contact-text footer__contact-text">+7 928 811 22 11</span>

            </a>

            <a href="mailto:info@axis-hotel.ru" class="header__mail link footer__mail">

              <div class="header__contact-img footer__contact-img">

                <img src="picture/icons/envelope.svg" alt="">

              </div>

              <span class="header__contact-text footer__contact-text">info@axis-hotel.ru</span>

            </a>

          </div>

          <div class="header__socials footer__socials">

            <a href="#" class="header__socials-link footer__socials-link"><img src="picture/icons/instagram.svg" alt=""></a>

            <a href="#" class="header__socials-link footer__socials-link"><img src="picture/icons/facebook.svg" alt=""></a>

            <a href="#" class="header__socials-link footer__socials-link"><img src="picture/icons/booking.svg" alt=""></a>

            <a href="#" class="header__socials-link footer__socials-link"><img src="picture/icons/vkontakte.svg" alt=""></a>

            <a href="#" class="header__socials-link footer__socials-link"><img src="picture/icons/odnoklassniki.svg" alt=""></a>

          </div>

        </div>

        <div class="resume">

          <div class="copyrights">

            Copyrights © 2022. Все права защищены.

          </div>

          <div class="nelset">

            <a href="http://nelset.com" target="_blank" class="link nelset__link">Создание сайта / Продвижение сайта nelset.com</a>

          </div>

        </div>

      </div>

    </div>

  </footer>

  <!--Модальное окно-->

  <section class="modal">

    <div class="modal__wrapper">

      <button class="modal__close"><img src="picture/icons/close.svg" alt=""></button>

      <form class="modal__window" action="#" method="post" id="contactform_booking">

        <div class="modal__tab modal__tab_small modal__tab_checkInOut">

          <p class="modal__label">Итого</p>

          <div class="modal__date modal__field">

            <div class="modal__text">

              <span name="modal__checkIn" id="modal__checkIn" class="modal__checkIn">Заезд</span> <span name="modal__checkOut" id="modal__checkOut" class="modal__checkOut"> — Выезд</span>

            </div>

            <button class="modal__button" id="modal__button_calendar"><img src="picture/icons/controls.svg" alt=""></button>

          </div>

        </div>

        <div class="modal__tab modal__tab_small modal__tab_guests">

          <p class="modal__label">Гости</p>

          <div class="modal__guests modal__field">

            <div class="modal__text">

              <span class="modal__adult"></span><span class="modal__children"></span>

            </div>

            <button class="modal__button" id="modal__button_guests"><img src="picture/icons/controls.svg" alt=""></button>

          </div>

        </div>

        <div class="banner__booking-tab modal__tab  modal__tab_adult modal__tab_subguests">

          <label class="banner__booking-label">Взрослые</label>

          <button class="banner__booking-button modal__booking-button guestAdultMinus">

            <img src="picture/icons/minus_black.svg" alt="" class="button__sign">

          </button>

          <input type="number" class="banner__booking-input modal__booking-input" id="modalGuestAdult" name="modalGuestAdult" value="2" min="0" max="42">

          <button class="banner__booking-button modal__booking-button guestAdultPlus">

            <img src="picture/icons/plus_black.svg" alt="" class="button__sign">

          </button>

        </div>

        <div class="banner__booking-tab modal__tab  modal__tab_children modal__tab_subguests">

          <label class="banner__booking-label">Дети</label>

          <button class="banner__booking-button modal__booking-button guestChildMinus">

            <img src="picture/icons/minus_black.svg" alt="" class="button__sign">

          </button>

          <input type="number" class="banner__booking-input modal__booking-input" id="modalGuestChildren" name="modalGuestChildren" value="0" min="0" max="42">

          <button class="banner__booking-button modal__booking-button guestChildPlus">

            <img src="picture/icons/plus_black.svg" alt="" class="button__sign">

          </button>

        </div>

        <div class="modal__tab modal__tab_small modal__tab_name">

          <p class="modal__label">Ваше Имя</p>

          <div class="modal__date modal__field modal__field_input">

            <input class="modal__text" type="text" name="modal__name" id="modal__name" placeholder="Имя Фамилия">

          </div>

        </div>

        <div class="modal__tab modal__tab_small modal__tab_tel">

          <p class="modal__label">Номер телефона</p>

          <div class="modal__date modal__field modal__field_input">

            <input class="modal__text" type="tel" name="modal__tel" id="modal__tel" placeholder="+7 ХХХ ХХХ ХХ ХХ" data-mask="+7 ___ ___ ____" required>

          </div>

        </div>

        <div class="modal__tab modal__tab_large">

          <p class="modal__label">Задать вопрос</p>

          <div class="modal__question modal__field modal__field_input">

            <textarea type="text" class="modal__text" placeholder="Ваш вопрос" oninput="auto_grow(this)" name="modal__textarea" id="modal__textarea"></textarea>

          </div>

          <div class="modal__radio">

            <input type="radio" name="modalPersonalData" id="modalPersonalData" checked>

            <label for="modalPersonalData" class="modal__label_radio">Даю согласие на обработку персональных данных.</label>

          </div>

        </div>

        <input type="text" name="modal__checkIn_reserve" id="modal__checkIn_reserve" class="modal__checkIn_reserve modal__check_reserve">

        <input type="text" name="modal__checkOut_reserve" id="modal__checkOut_reserve" class="modal__checkOut_reserve modal__check_reserve">

        <button type="submit" id="modal__submit" class="modal__submit">

          Забронировать <img src="picture/icons/arrow__white.svg" alt="">

        </button>

      </form>



    </div>

  </section>

    <!--Календарь-->

  <section class="calendar">

    <div class="calendar__header calendar__header_left">

      <button class="calendar__button calendar__button_prev"><img src="picture/icons/arrow_black.svg" alt=""></button>

      <h3 class="calendar__month calendar__month_current"></h3>

    </div>

    <div class="border"></div>

    <div class="calendar__header calendar__header_right">

      <h3 class="calendar__month calendar__month_next"></h3>

      <button class="calendar__button calendar__button_next"><img src="picture/icons/arrow_black.svg" alt=""></button>

    </div>

    <div class="calendar__area calendar__area_left">

      <table class="calendar__table">

        <thead class="calendar__head">

          <tr>

            <th class="calendar__day calendar__day_title">Пн</th>

            <th class="calendar__day calendar__day_title">Вт</th>

            <th class="calendar__day calendar__day_title">Ср</th>

            <th class="calendar__day calendar__day_title">Чт</th>

            <th class="calendar__day calendar__day_title">Пт</th>

            <th class="calendar__day calendar__day_title">Сб</th>

            <th class="calendar__day calendar__day_title">Вс</th>

          </tr>

        </thead>

        <tbody>

          <tr class="calendar__week">

            <td class="calendar__day calendar__day_number calendar__day_current"></td>

            <td class="calendar__day calendar__day_number calendar__day_current"></td>

            <td class="calendar__day calendar__day_number calendar__day_current"></td>

            <td class="calendar__day calendar__day_number calendar__day_current"></td>

            <td class="calendar__day calendar__day_number calendar__day_current"></td>

            <td class="calendar__day calendar__day_number calendar__day_current"></td>

            <td class="calendar__day calendar__day_number calendar__day_current"></td>

          </tr>

          <tr class="calendar__week">

            <td class="calendar__day calendar__day_number calendar__day_current"></td>

            <td class="calendar__day calendar__day_number calendar__day_current"></td>

            <td class="calendar__day calendar__day_number calendar__day_current"></td>

            <td class="calendar__day calendar__day_number calendar__day_current"></td>

            <td class="calendar__day calendar__day_number calendar__day_current"></td>

            <td class="calendar__day calendar__day_number calendar__day_current"></td>

            <td class="calendar__day calendar__day_number calendar__day_current"></td>

          </tr>

          <tr class="calendar__week">

            <td class="calendar__day calendar__day_number calendar__day_current"></td>

            <td class="calendar__day calendar__day_number calendar__day_current"></td>

            <td class="calendar__day calendar__day_number calendar__day_current"></td>

            <td class="calendar__day calendar__day_number calendar__day_current"></td>

            <td class="calendar__day calendar__day_number calendar__day_current"></td>

            <td class="calendar__day calendar__day_number calendar__day_current"></td>

            <td class="calendar__day calendar__day_number calendar__day_current"></td>

          </tr>

          <tr class="calendar__week">

            <td class="calendar__day calendar__day_number calendar__day_current"></td>

            <td class="calendar__day calendar__day_number calendar__day_current"></td>

            <td class="calendar__day calendar__day_number calendar__day_current"></td>

            <td class="calendar__day calendar__day_number calendar__day_current"></td>

            <td class="calendar__day calendar__day_number calendar__day_current"></td>

            <td class="calendar__day calendar__day_number calendar__day_current"></td>

            <td class="calendar__day calendar__day_number calendar__day_current"></td>

          </tr>

          <tr class="calendar__week">

            <td class="calendar__day calendar__day_number calendar__day_current"></td>

            <td class="calendar__day calendar__day_number calendar__day_current"></td>

            <td class="calendar__day calendar__day_number calendar__day_current"></td>

            <td class="calendar__day calendar__day_number calendar__day_current"></td>

            <td class="calendar__day calendar__day_number calendar__day_current"></td>

            <td class="calendar__day calendar__day_number calendar__day_current"></td>

            <td class="calendar__day calendar__day_number calendar__day_current"></td>

          </tr>

        </tbody>

      </table>

    </div>



    <div class="calendar__area calendar__area_right">

      <table class="calendar__table">

        <thead class="calendar__head">

          <tr>

            <th class="calendar__day calendar__day_title">Пн</th>

            <th class="calendar__day calendar__day_title">Вт</th>

            <th class="calendar__day calendar__day_title">Ср</th>

            <th class="calendar__day calendar__day_title">Чт</th>

            <th class="calendar__day calendar__day_title">Пт</th>

            <th class="calendar__day calendar__day_title">Сб</th>

            <th class="calendar__day calendar__day_title">Вс</th>

          </tr>

        </thead>

        <tbody>

          <tr class="calendar__week">

            <td class="calendar__day calendar__day_number calendar__day_next"></td>

            <td class="calendar__day calendar__day_number calendar__day_next"></td>

            <td class="calendar__day calendar__day_number calendar__day_next"></td>

            <td class="calendar__day calendar__day_number calendar__day_next"></td>

            <td class="calendar__day calendar__day_number calendar__day_next"></td>

            <td class="calendar__day calendar__day_number calendar__day_next"></td>

            <td class="calendar__day calendar__day_number calendar__day_next"></td>

          </tr>

          <tr class="calendar__week">

            <td class="calendar__day calendar__day_number calendar__day_next"></td>

            <td class="calendar__day calendar__day_number calendar__day_next"></td>

            <td class="calendar__day calendar__day_number calendar__day_next"></td>

            <td class="calendar__day calendar__day_number calendar__day_next"></td>

            <td class="calendar__day calendar__day_number calendar__day_next"></td>

            <td class="calendar__day calendar__day_number calendar__day_next"></td>

            <td class="calendar__day calendar__day_number calendar__day_next"></td>

          </tr>

          <tr class="calendar__week">

            <td class="calendar__day calendar__day_number calendar__day_next"></td>

            <td class="calendar__day calendar__day_number calendar__day_next"></td>

            <td class="calendar__day calendar__day_number calendar__day_next"></td>

            <td class="calendar__day calendar__day_number calendar__day_next"></td>

            <td class="calendar__day calendar__day_number calendar__day_next"></td>

            <td class="calendar__day calendar__day_number calendar__day_next"></td>

            <td class="calendar__day calendar__day_number calendar__day_next"></td>

          </tr>

          <tr class="calendar__week">

            <td class="calendar__day calendar__day_number calendar__day_next"></td>

            <td class="calendar__day calendar__day_number calendar__day_next"></td>

            <td class="calendar__day calendar__day_number calendar__day_next"></td>

            <td class="calendar__day calendar__day_number calendar__day_next"></td>

            <td class="calendar__day calendar__day_number calendar__day_next"></td>

            <td class="calendar__day calendar__day_number calendar__day_next"></td>

            <td class="calendar__day calendar__day_number calendar__day_next"></td>

          </tr>

          <tr class="calendar__week">

            <td class="calendar__day calendar__day_number calendar__day_next"></td>

            <td class="calendar__day calendar__day_number calendar__day_next"></td>

            <td class="calendar__day calendar__day_number calendar__day_next"></td>

            <td class="calendar__day calendar__day_number calendar__day_next"></td>

            <td class="calendar__day calendar__day_number calendar__day_next"></td>

            <td class="calendar__day calendar__day_number calendar__day_next"></td>

            <td class="calendar__day calendar__day_number calendar__day_next"></td>

          </tr>

        </tbody>

      </table>

    </div>



  </section>

  <div id="openModal" class="modalDialog">
    <div class="modal__wrap">
      <a href="#close" class="modal__close">
        <img src="picture/icons/close.svg" alt="close">
      </a>

      <h3>Спасибо за бронирование!</h3>
      <p>В ближайшее время с Вами свяжется менеджер для подтверждени заказа.</p>

    </div>
  </div>



  <script src="scripts/script.js"></script>

  <script src="scripts/calendar.js"></script>

  <script src="scripts/mobile.js"></script>

  <!-- <script src="scripts/email.js"></script> -->

  <!-- Yandex.Metrika counter -->
<script type="text/javascript" >
   (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

   ym(87775234, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
   });
</script>
<!-- /Yandex.Metrika counter -->

</body>

</html>
