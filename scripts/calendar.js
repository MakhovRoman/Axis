  //====================================== Объявление переменных ======================================

  class SetDate {
    constructor(date) {
      this.value = date;
      this.fullDate = new Date(this.value);                                           // создаю объект с датой
    }

    get year() {return this.fullDate.getFullYear();}                                  // получаю год

    get month() {return this.fullDate.getMonth();}                                    // получаю месяц

    get date() {return this.fullDate.getDate();}                                      // получаю число

    get day() {
      let _fullDate = new Date(this.value);                                           // получаю день недели от 0(Пн) до 6 (Вс)
      if (_fullDate.getDay() != 0){
        return _fullDate.getDay() - 1;
      } else if (_fullDate.getDay() == 0){
        return _fullDate.getDay() + 6;
      }
    }
    get lastDate() {                                                                  // получаю последний день месяца
      let _fullDate = new Date(this.value);
      _fullDate.setMonth(_fullDate.getMonth() + 1, 1);
      _fullDate.setDate(_fullDate.getDate() - 1);
      return _fullDate.getDate();
    }

    get firstDayOFMonth() {                                                           // получаю день недели, с которого начинается месяц
      let _fullDate = new Date(this.value)
      _fullDate.setDate(1);
      if (_fullDate.getDay() > 0){
        return _fullDate.getDay() - 1;
      } else if (_fullDate.getDay() == 0){
        return _fullDate.getDay() + 6;
      }
    }

    get lastDayOfMonth() {                                                           // получаю день недели, которым заканчивается месяц
      let _fullDate = new Date(this.value);
      _fullDate.setMonth(_fullDate.getMonth() + 1, 1);
      _fullDate.setDate(_fullDate.getDate() - 1);
      if (_fullDate.getDay() > 0){
        return _fullDate.getDay() - 1;
      } else if (_fullDate.getDay() == 0){
        return _fullDate.getDay() + 6;
      }
    }

    get dateList() {                                                                  // получаю список чисел в месяце
      let result = [];
      for (let i = 1; i <= this.lastDate; i++) {
        result.push(i);
      }
      return result;
    }

    get valueDateList() {                                                                 // получаю список чисел в строковом формате для дальнейшего преобразования в объект Date
      let result = [];
      let buf;
      for (let i = 1; i <= this.lastDate; i++) {
        buf = i;
        if (i < 10) buf = `0${i}`;

        result.push(`${buf}`)
      }
      return result;
    }

    get valueMonthList() {                                                                 // получаю список месяцев в строковом формате для дальнейшего преобразования в объект Date
      let result = [];
      let buf;
      for (let i = 1; i <= 11; i++) {
        buf = i + 1;
        if (i < 10) buf = `0${i}`;

        result.push(`${buf}`)
      }
      return result;
    }
  };

let bookingDate = [];                                                                 // массив для хранения дат заезда/выезда
let bookingArea = new Set();                                                          // коллекция для хранения дат бронирования
let stringStart, stringEnd;                                                                         // переменные для хранения строки с датой в виде массива[2022, 02, 02]

let calendarButton = document.querySelector('#showCalendar');
let modalCalendarButton = document.querySelector('#modal__button_calendar');
let calendar = document.querySelector('.calendar');

let bookingCheckIn = document.querySelector('#booking__checkIn');                     // поле для даты заезда
let bookingCheckOut = document.querySelector('#booking__checkOut');                   // поле для даты выезда
let modalCheckIn = document.querySelector('.modal__checkIn');                         // поле для даты заезда в модальном окне
let modalCheckOut = document.querySelector('.modal__checkOut');                       // поле для даты выезда в модальном окне

let today = new SetDate(Date.now());                                                  // создаю текущую дату

let monthArray = ['Январь', 'Февраль', 'Март',                                        // массив с нахваниями месяцев
                  'Апрель', 'Май', 'Июнь',
                  'Июль', 'Август', 'Сентябрь',
                  'Октябрь', 'Ноябрь', 'Декабрь'];

let yearMonthArray = [];                                                              // массив для хранения объектов месяцев на год вперед
yearMonthArray.push(today);

let currentMonthArea = document.querySelector('.calendar__month_current');            // поле для отображения текущего месяца
let nextMonthArea = document.querySelector('.calendar__month_next');                  // поле для отображения текущего месяца
let currentDateAreaList = document.getElementsByClassName('calendar__day_current');   // список ячеек для отображения чисел текущего месяца
let nextDateAreaList = document.getElementsByClassName('calendar__day_next');         // список ячеек для отображения чисел следующего месяца

let monthCount = 0;                                                                   // начальное значение счетчика месяца
let calendarButtons = document.querySelectorAll('.calendar__button');                 // кнопки переключения месяцев
let visionDateArray = Array.from(document.getElementsByClassName('calendar__day_current')).concat(Array.from(document.getElementsByClassName('calendar__day_next'))); // массив со всеми отображаемыми ячейками

let currentWeekList = document.querySelectorAll('.calendar__area_left .calendar__week');
let currentTableBody = document.querySelector('.calendar__area_left tbody');
let bonusCurrentTableRow = currentWeekList[4].cloneNode(true);
let nextWeekList = document.querySelectorAll('.calendar__area_right .calendar__week');
let nextTableBody = document.querySelector('.calendar__area_right tbody');
let bonusNextTableRow = nextWeekList[4].cloneNode(true);
let removeCurrentBonusRow, removeNextBonusRow;
let tableList = document.querySelectorAll('.calendar__area');

let modalCheckInReserve = document.querySelector('.modal__checkIn_reserve');
let modalCheckOutReserve = document.querySelector('.modal__checkOut_reserve');

  //====================================== Вычисления ======================================

function insertDateInCalendar(objCurrent, objNext, targetCurrent, targetNext){              // вставка дат указанного мемяца в целевое поле
  let j = 0;                                                                                // для вставки чисел из массива дат в текущий месяц
  let k = 0;                                                                                // для вставки чисел из массива дат в следующий месяц
  let b = 1;                                                                                // для вставки чисел из массива дат следующего +2 месяца в следующий месяц
  let c = 0;                                                                                // для вставки чисел из массива дат предидущего месяца в текущий месяц
  let d = 1;                                                                                // для вставки чисел из предидущего месяца в текущий
  let f = 0;                                                                                // для вставки чисел из следующего месяца в текущий



  if ( (objCurrent.firstDayOFMonth == 5 && objCurrent.dateList.length > 30) || (objCurrent.firstDayOFMonth > 5 && objCurrent.dateList.length >= 30) ){  //добавляю дополнительную строку в текущий месяц, если месяц занимает 6 недель
    currentTableBody.append(bonusCurrentTableRow);
    tableList[0].classList.add('calendar__area_large');
  } else if (currentTableBody.querySelectorAll('.calendar__week').length == 6) {          // удаляю бонусную строку
    removeCurrentBonusRow = currentTableBody.querySelectorAll('.calendar__week')[5];
    removeCurrentBonusRow.remove();
    tableList[0].classList.remove('calendar__area_large');
  }

  if ( (objNext.firstDayOFMonth == 5 && objNext.dateList.length > 30) || (objNext.firstDayOFMonth > 5 && objNext.dateList.length >= 30) ){ //добавляю дополнительную строку в следующий, если месяц занимает 6 недель
    nextTableBody.append(bonusNextTableRow);
    tableList[1].classList.add('calendar__area_large');
  } else if (nextTableBody.querySelectorAll('.calendar__week').length == 6) {          // удаляю бонусную строку
    removeNextBonusRow = nextTableBody.querySelectorAll('.calendar__week')[5];
    removeNextBonusRow.remove();
    tableList[1].classList.remove('calendar__area_large');
  }

  if (currentTableBody.querySelectorAll('.calendar__week').length == 6 || nextTableBody.querySelectorAll('.calendar__week').length == 6) {
    calendar.classList.add('calendar__bonusRow');
  } else {
    calendar.classList.remove('calendar__bonusRow');
  }

  if (medaiaQuery500.matches && document.querySelector('.calendar__area_left').classList.contains('calendar__area_large')) {
    document.querySelector('.modal__window_calendar').classList.add('modal__window_calendar-bonus');
  } else if (medaiaQuery500.matches && !document.querySelector('.calendar__area_left').classList.contains('calendar__area_large') && document.querySelector('.modal__window_calendar-bonus')){
    document.querySelector('.modal__window_calendar').classList.remove('modal__window_calendar-bonus');
  }

  if ( (currentTableBody.querySelectorAll('.calendar__week').length == 6 || nextTableBody.querySelectorAll('.calendar__week').length == 6) && calendar.classList.contains('calendar__modal')){
    calendar.classList.add('calendar__bonusRow_modal');
  } else {
    calendar.classList.remove('calendar__bonusRow_modal');
  }


  currentDateAreaList = document.getElementsByClassName('calendar__day_current');
  nextDateAreaList = document.getElementsByClassName('calendar__day_next');
  visionDateArray = Array.from(document.getElementsByClassName('calendar__day_current')).concat(Array.from(document.getElementsByClassName('calendar__day_next')));

  for (let i = 0; i < visionDateArray.length; i++) {                                        // при перелистывании месяцев очищаю стили ячеек
    visionDateArray[i].classList.remove('calendar__day_unchecked');
    visionDateArray[i].dataset.value=null;
    visionDateArray[i].classList.remove('calendar__day_pick');
    visionDateArray[i].removeEventListener('click', checkDate);
    visionDateArray[i].textContent = null;
    visionDateArray[i].classList.remove('calendar__day_alien');
    visionDateArray[i].classList.remove('calendar__day_booking');
    visionDateArray[i].removeEventListener('click', createBookingArea);                     // удаляю обработчик событий, чтобы при смене месяца не дублировались даты в массив
  }

  for(let i = objCurrent.firstDayOFMonth; i < (objCurrent.lastDate + objCurrent.firstDayOFMonth); i++) {  // начинаю вставлять даты с начального дня недели в каждом месяце
    if (i >= targetCurrent.length) break;                                                                 // если даты не помещаются в текущее поле, то прерываю цикл

    targetCurrent[i].textContent = `${objCurrent.dateList[j]}`;                                           // вывожу даты в поле текущего месяца
    targetCurrent[i].dataset.value = `${objCurrent.year}-${objCurrent.valueMonthList[objCurrent.month]}-${objCurrent.valueDateList[j]}`; // добавляю data свойство для расчетов срока бронирования

    if (i == today.date && monthCount == 0) {
      targetCurrent[i].classList.add('calendar__day_today');                                              // если i = текущему числу, то выделяю это поле
    } else {
      targetCurrent[i].classList.remove('calendar__day_today');                                           // иначе удаляю
    }

    if (i < today.date && monthCount == 0) {                                                              // если i меньше текущей даты - ячейки некативны
      targetCurrent[i].classList.add('calendar__day_unchecked');
    } else {
      targetCurrent[i].classList.remove('calendar__day_unchecked');
    }

    j++;
  }

  for (let i = objCurrent.firstDayOFMonth - 1; i >= 0; i--) {                                            // добавляю числа из предидущего месяца
    if (monthCount == 0) break;
    targetCurrent[i].textContent = `${yearMonthArray[monthCount - 1].dateList[yearMonthArray[monthCount - 1].dateList.length - d]}`;
    targetCurrent[i].classList.add('calendar__day_alien');
    d++;
  }

  for (let i = objCurrent.lastDate+objCurrent.firstDayOFMonth; i < currentDateAreaList.length; i++) {                           // добавляю числа из следующего месяца
    targetCurrent[i].textContent = `${yearMonthArray[monthCount + 1].dateList[f]}`;
    targetCurrent[i].classList.add('calendar__day_alien');
    f++;
  }

  currentMonthArea.textContent = `${monthArray[objCurrent.month]} ${objCurrent.year}`;                  // вывожу текущий месяц на страницу

  for(let i = objNext.firstDayOFMonth; i < (objNext.lastDate + objNext.firstDayOFMonth); i++) {         // начинаю вставлять даты с начального дня недели в каждом месяце
    if (i >= targetNext.length) break;
    targetNext[i].textContent = `${objNext.dateList[k]}`;                                               // вывожу даты в поле следующего месяца
    targetNext[i].dataset.value = `${objNext.year}-${objNext.valueMonthList[objNext.month]}-${objNext.valueDateList[k]}`;           // добавляю data свойство для расчетов срока бронирования
    k++;
  }

  for (let i = objNext.firstDayOFMonth - 1; i >= 0; i--) {                                             // добавляю числа из следующего месяца
    targetNext[i].textContent = `${objCurrent.dateList[objCurrent.dateList.length - b]}`;
    targetNext[i].classList.add('calendar__day_alien');
    b++;
  }

  for(let i = objNext.lastDate + objNext.firstDayOFMonth; i < targetNext.length; i++) {               // добавляю числа из предидущего месяца
    if (yearMonthArray[monthCount + 2] == null) break;
    targetNext[i].textContent = `${yearMonthArray[monthCount + 2].dateList[c]}`;
    targetNext[i].classList.add('calendar__day_alien');
    c++;
  }

  visionDateArray.forEach( item => {                                                            // добавляю функцию проверки дат к ячейкам, которые не относятся к классу 'calendar__day_unchecked'

    if ( !item.classList.contains('calendar__day_unchecked')) {
      item.addEventListener('click', checkDate);
    }
    item.addEventListener('click', createBookingArea);
    if (item.classList.contains('calendar__day_alien')) item.removeEventListener('click', checkDate);  // если ячейка имеет класс 'calendar__day_alien' - удаляю обработчик
  });

 nextMonthArea.textContent = `${monthArray[objNext.month]} ${objNext.year}`;                // вывожу следующий месяц на страницу

 for (let i = 0; i < visionDateArray.length; i++) {                                         // если data-value == значению из массива - делаю ячейку активной
  if (visionDateArray[i].dataset.value == bookingDate[0]) visionDateArray[i].classList.add('calendar__day_pick');
  if (visionDateArray[i].dataset.value == bookingDate[1]) visionDateArray[i].classList.add('calendar__day_pick');
  if (bookingArea.has(visionDateArray[i].dataset.value)) visionDateArray[i].classList.add('calendar__day_booking');
  }

}

function checkBonusWeekRow(obj, tableBody, bonusRow) {
  if ( (obj.firstDayOFMonth == 5 && obj.dateList.length > 30) || (obj.firstDayOFMonth > 5 && obj.dateList.length >= 30) ){
    tableBody.append(bonusRow);
  } else if (tableBody.querySelectorAll('.calendar__week').length == 6) {
    bonusRow = tableBody.querySelectorAll('.calendar__week')[5];
    bonusRow.remove();
  }
}

function getMonthList() {                                                             // функция для создания объектов месяцев на год вперед и добавление их к массиву
  for(let i = 1; i < 12; i++) {
    let buf = today.month;                                                            // копирую значение текущего месяца для дальнейшей итерации
    buf += i;

    let bufObj = new Date();                                                          // создаю промежуточную дату и ваыставляю первое число 00:00:00:00
    bufObj.setMonth(buf, 1);
    bufObj.setHours(0, 0, 0, 0);

    let ms = bufObj.getTime();                                                        // получаю количество ms от 1 января 1970 год

    let result = new SetDate(ms);                                                     // добавляю в массив
    yearMonthArray.push(result);
  }
}

function moveMonthForward() {                                                         // увеличиваю счетчик месяца на 1 и обновляю поле для дат
  if (monthCount < 10) {
    monthCount++;
  };

  visionDateArray = Array.from(currentDateAreaList).concat(Array.from(nextDateAreaList));
  insertDateInCalendar(yearMonthArray[monthCount], yearMonthArray[monthCount + 1], currentDateAreaList, nextDateAreaList);
  return monthCount;
}

function moveMonthBackward() {                                                         // уменьшаю счетчик месяца на 1 и обновляю поле для дат
    if (monthCount > 0) {
    monthCount--;
  };
  visionDateArray = Array.from(currentDateAreaList).concat(Array.from(nextDateAreaList))
  insertDateInCalendar(yearMonthArray[monthCount], yearMonthArray[monthCount + 1], currentDateAreaList, nextDateAreaList);
  return monthCount;
}

//====================================== Вывод данных ======================================

getMonthList();
insertDateInCalendar(yearMonthArray[monthCount], yearMonthArray[monthCount + 1], currentDateAreaList, nextDateAreaList);

Array.from(calendarButtons).forEach( item => {
  item.addEventListener('click', function(e) {
    e.preventDefault();
  })
})

calendarButtons[0].addEventListener('click', moveMonthBackward);
calendarButtons[1].addEventListener('click', moveMonthForward);

function checkDate(e) {                                                                       // функция проверки дат бронирования
  if (bookingDate.length < 2 && !bookingDate.includes(e.target.dataset.value)) {              // если в массиве с датами брони меньше двух значений и эти даты не были выбраны, то добавляю класс и вношу в массив
    e.target.classList.add('calendar__day_pick');
    bookingDate.push(e.target.dataset.value);
  } else if (bookingDate.length == 2) {                                                       // если уже выбраны 2 даты, то следующий клик сбрасывает их и выбор идет заново
    bookingDate.splice(0);
    visionDateArray.forEach( item => item.classList.remove('calendar__day_pick'));
    e.target.classList.add('calendar__day_pick');
    bookingDate.push(e.target.dataset.value);
  }

  console.log('bookingDate', bookingDate);
}

function createBookingArea() {
  let start, end;                                                                                     // переменные для начала и конца брони

  bookingDate.sort();                                                                                 // сортирую массив с датами по возрастанию

  if (bookingDate.length == 2) {
    visionDateArray.forEach( (item, index) => {
      if (item.dataset.value == bookingDate[0]) {                                                       // получаю номер ячейки с датой начала бронирования
        start = index;
        startValue = item.dataset.value;
        stringStart = bookingDate[0].split(`-`);
        bookingCheckIn.textContent = `${stringStart[2]}.${stringStart[1]}.${stringStart[0]}`;           // вывожу дату начала бронирования в поле в банере и в модальном окне
        modalCheckIn.textContent = `${stringStart[2]}.${stringStart[1]}.${stringStart[0]}`;
        modalCheckInReserve.value = `${stringStart[2]}.${stringStart[1]}.${stringStart[0]}`;
      } else if (item.dataset.value == bookingDate[1]) {                                                // получаю номер ячейки с датой конца бронирования
        end = index;
        endValue = item.dataset.value;
        stringEnd = bookingDate[1].split(`-`);
        bookingCheckOut.textContent = ` - ${stringEnd[2]}.${stringEnd[1]}.${stringEnd[0]}`;           // вывожу дату окончания бронирования в поле в банере и в модальном окне
        modalCheckOut.textContent = ` - ${stringEnd[2]}.${stringEnd[1]}.${stringEnd[0]}`;
        modalCheckOutReserve.value = `${stringEnd[2]}.${stringEnd[1]}.${stringEnd[0]}`;
      }
    })

    for (let i = start; i <= end; i++) {                                                          // запрет на выделение неактивных чужих ячеек
      if (!visionDateArray[i].classList.contains('calendar__day_alien')) {
        bookingArea.add(visionDateArray[i].dataset.value);
        visionDateArray[i].classList.add('calendar__day_booking');
      }
    }

    calendarButton.classList.remove('showCalendar_rotate');                                       // поворачиваю стрелку, если выбраны 2 даты
    calendar.classList.remove('calendar__hide');                                                  // закрываю календарь, если выбраны 2 даты

    if (medaiaQuery500.matches) {
      modalWindow.classList.remove('modal__window_calendar');
      calendarActiveButtons[1].classList.remove('showCalendar_rotate');
    }
  } else if (bookingDate.length < 2) {                                                                         // если в массиве меньше 2 дат, то удаляю выделение периода бронирования
    visionDateArray.forEach( item => item.classList.remove('calendar__day_booking'));
    bookingArea.clear();
  }



  console.log('bookingArea', bookingArea);
}

visionDateArray.forEach( item => item.addEventListener('click', createBookingArea));


let calendarActiveButtons = [calendarButton, modalCalendarButton];
let modalWidth = parseInt(getComputedStyle(document.querySelector('.modal__wrapper')).width);
calendarActiveButtons.forEach( item => {
  item.addEventListener('click', function(e) {
    e.preventDefault();

    calendar.classList.toggle('calendar__hide');

    if (bookingDate.length == 1 && !calendar.classList.contains('calendar__hide')) {
      stringStart = bookingDate[0].split(`-`);
      bookingCheckIn.textContent = `${stringStart[2]}.${stringStart[1]}.${stringStart[0]}`;
      bookingCheckOut.textContent =null
      modalCheckIn.textContent = `${stringStart[2]}.${stringStart[1]}.${stringStart[0]}`;
      modalCheckInReserve.value = `${stringStart[2]}.${stringStart[1]}.${stringStart[0]}`;
      modalCheckOut.textContent =null;
      modalCheckOutReserve.value = 'null';
      bookingArea.add(bookingDate[0]);                                                                // есои выбрана 1 дата и закрыт календарь, то добавляю ее в список бронирования
    }

    if (modal.classList.contains('modal_visible')) {
      calendar.classList.toggle('calendar__modal');
    }

    item.classList.toggle('showCalendar_rotate');

    if (medaiaQuery500.matches) {
      modalWindow.classList.toggle('modal__window_calendar');
    }
  });
})


// подгоняю размер календаря под размер модального окна
