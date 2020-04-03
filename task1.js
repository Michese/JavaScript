'use strict';

// Задание 1
function structNumber(number) {
    if(number < 0 || number > 999 || Number.isInteger(number) === false) {
        return;
    }
    this.units = Math.floor(number % 10); // это едииницы
    this.tens = Math.floor((number % 100) / 10); // это десятки
    this.hundereds = Math.floor((number % 1000) / 100); // это сотни
};
let number = Number(prompt("Введите число:"));
let structNumber1 = new structNumber(number);
console.log(structNumber1);
