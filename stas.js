// Задача №1

// if else, prompt

// Написати програму де ми питаємо у користувача

// номер місяця і показуємо до якого часу року він належить

// Якщо користувач ввів 2 - показуєм слово Зима

// Якщо 3 -Весна і т.д.


// const month = prompt("Введіть номер місяця (1-12):");

// if (month == 1 || month == 2 || month == 12) {
//   alert("Зима");
// } else if (month >= 3 && month <= 5) {
//   alert("Весна");
// } else if (month >= 6 && month <= 8) {
//   alert("Літо");
// } else if (month >= 9 && month <= 11) {
//   alert("Осінь");
// } else {
//   alert("Ви ввели невірний номер місяця.");
// }
 

// ............

// Задача №2

 

// Написати програму яка перевіряє логін і пароль користувача

//  і виводить привітання - якщо все добре

//  і якщо ні помилку - невінний логін

 

// const login = 'user@gmail.com';

// const password = '12345'


// const login = 'user@gmail.com';
// const password = '12345';

// const inputLogin = prompt('Введіть ваш логін:');
// const inputPassword = prompt('Введіть ваш пароль:');

// if (inputLogin === login && inputPassword === password) {
//   alert('Привіт!');
// } else {
//   alert('Невірний логін або пароль.');
// }

 

// ............

// Задача №3

// /* на for

//  * Напиши скрипт який підрахує суму всіх парних чисел,

//  * які входят в діапазон чисел в змінних від min до max.

//  * Наприклад, якщо min=0 і max=5, то діапазон 0-5,

//  * зроби перевірку

//  * виведи парні числа

//  * і порахуй їх суму, змінна total

//  * виведи консоль

//  */

 

// const min = 0;

// const max = 5;

// let total = 0;


// const min = 0;
// const max = 5;
// let total = 0;

// for (let i = min; i <= max; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//     total += i;
//   }
// }

// console.log(`Сума всіх парних чисел: ${total}`);

 

//..............................

// Задача №4

// Порахувати загальну суму в корзині

// const cart = [54, 28, 105, 70, 92, 17, 120];

// let total;

// const cart = [54, 28, 105, 70, 92, 17, 120];
// let total = 0;

// for (let i = 0; i < cart.length; i++) {
//   total += cart[i];
// }

// console.log(`Загальна сума в корзині: ${total}`);

// ...........................

 

// Задача №5

// Напиши скрипт який підраховує суму усіх парних чисел в масиві

// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];

// let total;


// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
// let total = 0;

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 === 0) {
//     total += numbers[i];
//   }
// }

// console.log(`Сума усіх парних чисел в масиві: ${total}`);