'use strict';

// Задание 3a
const classWrap = document.querySelector('.wrap');
const btnClose = document.querySelector('.btnClose');
const btnOpen = document.querySelector('.btnOpen');

btnOpen.addEventListener('click', function () {
    classWrap.classList.remove('hidden');
})

btnClose.addEventListener('click', function () {
    classWrap.classList.add('hidden');
})