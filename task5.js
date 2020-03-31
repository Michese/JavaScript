'use strict';
const productss = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
];
// Задание 5
console.log("Задание 5");
/**
 * Функция проверяет, есть ли в массиве фотографии. Если есть, то возвращает true, иначе false;
 * @param {array} photo массив, в котором производиться проверка.
 * @returns {boolean|boolean}
 */
let isPhoto = function (photo) {
    return ("photos" in photo && photo.photos.length > 0)
};
/**
 * Функция сравнивает 2 объекта по свойству price.
 * @param {object} a Первый объект
 * @param {object} b Второй объект
 * @returns {number}
 */
let compareNumbers = function (a, b) {
    return a.price - b.price;
};
let productWithPhoto = productss.filter(isPhoto);
console.log(productWithPhoto);
productss.sort(compareNumbers);
console.log(productss);