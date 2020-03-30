'use strict';
// Задание 2
for (let i = 0; i <= 10; ++i) {
    if (i === 0) {
        console.log(i + ' - это ноль');
    } else if (i % 2 === 1) {
        console.log(i + ' - нечетное число');
    } else {
        console.log(i + ' - четное число');
    }
}