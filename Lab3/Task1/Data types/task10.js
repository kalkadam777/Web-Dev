// 1)
let d = new Date(2012, 1, 20, 3, 12);
alert( d );

// 2)
function getWeekDay(date) {
    let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
  
    return days[date.getDay()];
  }
  
  let date = new Date(2014, 0, 3); // 3 января 2014 года
  alert( getWeekDay(date) ); // ПТ

// 3)
function getLocalDay(date) {

    let day = date.getDay();
  
    if (day == 0) { // день недели 0 (воскресенье) в европейской нумерации будет 7
      day = 7;
    }
  
    return day;
  }

// 4)
function getDateAgo(date, days) {
    let dateCopy = new Date(date);
  
    dateCopy.setDate(date.getDate() - days);
    return dateCopy.getDate();
  }
  
  let date = new Date(2015, 0, 2);
  
  alert( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
  alert( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
  alert( getDateAgo(date, 365) ); // 2, (2 Jan 2014)

// 5)
function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
  }
  
  alert( getLastDayOfMonth(2012, 0) ); // 31
  alert( getLastDayOfMonth(2012, 1) ); // 29
  alert( getLastDayOfMonth(2013, 1) ); // 28

// 6)
function getSecondsToday() {
    let now = new Date();
  
    // создаём объект с текущими днём/месяцем/годом
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  
    let diff = now - today; // разница в миллисекундах
    return Math.round(diff / 1000); // получаем секунды
  }
  
  alert( getSecondsToday() );

// 7)
function getSecondsToTomorrow() {
    let now = new Date();
    let hour = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let totalSecondsToday = (hour * 60 + minutes) * 60 + seconds;
    let totalSecondsInADay = 86400;
  
    return totalSecondsInADay - totalSecondsToday;
  }

// 8)
function formatDate(date) {
    let diff = new Date() - date; // разница в миллисекундах
  
    if (diff < 1000) { // меньше 1 секунды
      return 'прямо сейчас';
    }
  
    let sec = Math.floor(diff / 1000); // преобразовать разницу в секунды
  
    if (sec < 60) {
      return sec + ' сек. назад';
    }
  
    let min = Math.floor(diff / 60000); // преобразовать разницу в минуты
    if (min < 60) {
      return min + ' мин. назад';
    }
  
    // отформатировать дату
    // добавить ведущие нули к единственной цифре дню/месяцу/часам/минутам
    let d = date;
    d = [
      '0' + d.getDate(),
      '0' + (d.getMonth() + 1),
      '' + d.getFullYear(),
      '0' + d.getHours(),
      '0' + d.getMinutes()
    ].map(component => component.slice(-2)); // взять последние 2 цифры из каждой компоненты
  
    // соединить компоненты в дату
    return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');
  }
  
  alert( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"
  
  alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"
  
  alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"
  
  // вчерашняя дата вроде 31.12.2016, 20:00
  alert( formatDate(new Date(new Date - 86400 * 1000)) );

