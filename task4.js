'use strict';
// Задание 4

/**
 * Функция возращает сумму двух чисел
 * @param {number} a первый операнд
 * @param {number} b второй операнд
 * @returns {number}
 */
function summ(a, b) {
    return a + b;
}

/**
 * Функция возращает разность двух чисел
 * @param {number} a первый операнд
 * @param {number} b второй операнд
 * @returns {number}
 */
function diff(a, b) {
    return a - b;
}

/**
 * Функция возращает произведение двух чисел
 * @param {number} a первый операнд
 * @param {number} b второй операнд
 * @returns {number}
 */
function comp(a, b) {
    return a * b;
}

/**
 * Функция возращает деление двух чисел
 * @param {number} a первый операнд
 * @param {number} b второй операнд
 * @returns {number}
 */
function div(a, b) {
    return a / b;
}
let a = 5, b = 2;
console.log(summ(a, b));
console.log(diff(a, b));
console.log(comp(a, b));
console.log(div(a, b));