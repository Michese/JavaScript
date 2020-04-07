'use strict';

// Задание 4
const buttons = document.querySelectorAll('.product__button');
buttons.forEach(function (button) {
    button.addEventListener('click', function (event) {
        clickDescription(event);
    })
});

function clickDescription(clickEvent) {
    const product = clickEvent.target.parentNode;
    if (product.querySelector('.product__button').innerText === 'description') {
        showDescription(product);
    } else {
        hideDescription(product);
    }
}

function showDescription(product) {
    product.querySelector('.product__button').innerText = "close";
    product.querySelector('.product__image').style.display = "none";
    product.querySelector('.product_p').innerText = "Lorem ipsum dolor sit amet, consectetur adipisicing " +
        "elit. Blanditiis corporis exercitationem fugit, incidunt ipsum iusto labore laboriosam, laudantium magnam " +
        "minima nesciunt omnis suscipit, vel!";
}
function hideDescription(product) {
    product.querySelector('.product__button').innerText = "description";
    product.querySelector('.product__image').style.display = "block";
    product.querySelector('.product_p').innerText = "";
}