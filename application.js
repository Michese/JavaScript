'use strict';
// Задание 1
// Пример 1
// let a = 1, b = 1, c, d;
// c = ++a; // Сначала выполниться префиксный инкримент(к переменной a прибавится единица),
// // затем к переменной c присвоится результат
// alert(c); // ответ: 2
//
// // Пример 2
// d = b++; // Сначала к переменной d присвоиться
// // значение переменной b, а затем выполнится постфиксный инкримент(к переменной b прибавится единица).
// alert(d); // ответ: 1
//
// // Пример 3
// c = 2 + ++a; // Сначала выполниться префиксный инкримент,
// // затем выполниться операция сложения, а потом присваивания.
// alert(c); // ответ: 5
//
// // Пример 4
// d = 2 + b++; // Сначала выполнится операция сложения 2 и переменной b,
// // затем к переменной d присвоится полученное значение,
// // а потом выполнится постфиксный инкремент.
// alert(d); // ответ: 4
//
// alert(a); // 3
// alert(b); // 3

// Задание 2

// let a = 2; // Присваивание 2 к переменной a
// let x = 1 + (a *= 2); // Сначала выполнится произведение значения
// // переменной a и 2, затем результат присвоится к переменной a,
// // потом прибавится единица и результат присвоится к переменной x

// Задание 3

// let a = 2, b = 3;
// if (a >= 0 && b >= 0) {
//     console.log(a - b);
// } else if ((a >= 0 && b < 0) || (a < 0 && b >= 0)) {
//     console.log(a + b);
// } else {
//     console.log(a * b);
// }

// Задание 4

// /**
//  * Функция возращает сумму двух чисел
//  * @param {number} a первый операнд
//  * @param {number} b второй операнд
//  * @returns {number}
//  */
// function summ(a, b) {
//     return a + b;
// }
//
// /**
//  * Функция возращает разность двух чисел
//  * @param {number} a первый операнд
//  * @param {number} b второй операнд
//  * @returns {number}
//  */
// function diff(a, b) {
//     return a - b;
// }
//
// /**
//  * Функция возращает произведение двух чисел
//  * @param {number} a первый операнд
//  * @param {number} b второй операнд
//  * @returns {number}
//  */
// function comp(a, b) {
//     return a * b;
// }
//
// /**
//  * Функция возращает деление двух чисел
//  * @param {number} a первый операнд
//  * @param {number} b второй операнд
//  * @returns {number}
//  */
// function div(a, b) {
//     return a / b;
// }
// let a = 5, b = 2;
// console.log(summ(a, b));
// console.log(diff(a, b));
// console.log(comp(a, b));
// console.log(div(a, b));

// Задание 5

/**
 * Функция возращает результат одной из
 * четырех бинарных операций: суммы, разности, умножения, деления.
 * @param {number} arg1 первый операнд
 * @param {number} arg2 второй операнд
 * @param {string} operation наименование операции
 * @returns {number}
 */
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "summ":
            return arg1 + arg2;
        case "diff":
            return arg1 - arg2;
        case "comp":
            return arg1 * arg2;
        case "div":
            return arg1 / arg2;
        default:
            throw new UserException("Неверно указано название операции");
    }
}

let a = 4, b = 1;
console.log(mathOperation(a,b,"summ"));
console.log(mathOperation(a,b,"diff"));
console.log(mathOperation(a,b,"comp"));
console.log(mathOperation(a,b,"div"));
console.log(mathOperation(a,b,"abracadabra"));