// 1)
alert( null || 2 || undefined );
// 2)
alert( alert(1) || 2 || alert(3) );
// 3)
alert( 1 && null && 2 );

// 4)
alert( alert(1) && alert(2) );

// 5)
alert( null || 2 && 3 || 4 );
// 6)
let value = NaN;

value &&= 10;
value ||= 20;
value &&= 30;
value ||= 40;

alert(value);
// 7)
if (age >= 14 && age <= 90)
// 8)
if (!(age >= 14 && age <= 90))
// 9)
// Выполнится.
// Результат -1 || 0 = -1, в логическом контексте true
if (-1 || 0) alert( 'first' );

// Не выполнится
// -1 && 0 = 0,  в логическом контексте false
if (-1 && 0) alert( 'second' );

// Выполнится
// оператор && имеет больший приоритет, чем ||
// так что -1 && 1 выполнится раньше
// вычисления: null || -1 && 1  ->  null || 1  ->  1
if (null || -1 && 1) alert( 'third' );
// 10)
let userName = prompt("Кто там?", '');

if (userName === 'Админ') {

  let pass = prompt('Пароль?', '');

  if (pass === 'Я главный') {
    alert( 'Здравствуйте!' );
  } else if (pass === '' || pass === null) {
    alert( 'Отменено' );
  } else {
    alert( 'Неверный пароль' );
  }

} else if (userName === '' || userName === null) {
  alert( 'Отменено' );
} else {
  alert( "Я вас не знаю" );
}