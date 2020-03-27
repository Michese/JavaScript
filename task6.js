'use strict';
// Задание 6

let money = +prompt("Какое кол-во денег вы хотите положить в банк?");
if (isNaN(money)) {
    alert("Вы ввели не корректное значение!");
} else if (money == 0) {
    alert("Вы не хотите положить деньги в банк");
} else {
    let ending = "";
    if (money % 100 >= 11 && money % 100 <= 19) {
        ending = "ей";
    } else if (money % 10 == 1) {
        ending = "ь";
    } else if (money % 10 >= 2 && money % 10 <= 4) {
        ending = "я";
    } else if (money == 0 || (money % 10 >= 5 && money % 10 <= 9)) {
        ending = "ей";
    }
    alert(`Ваша сумма в ${money} рубл${ending} успешно зачислена.`);
}