'use strict';
// Задание 1
console.log("Задание 1");
/**
 * Фунция определяет, является ли число простым. Если является, то возвращает true, иначе false.
 * @param {number} num исходное число
 * @returns {boolean}
 */
function isPrime(num) {
    if (num <= 1) {
        return false;
    } else if (num === 2) {
        return true;
    } else {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }
}

let arrayNumber = [];
for (let i = 0; i <= 100; ++i) {
    arrayNumber.push(i);
}
let arrayPrimeNumbers = arrayNumber.filter(isPrime);
console.log(arrayPrimeNumbers);