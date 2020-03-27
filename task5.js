'use strict';
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