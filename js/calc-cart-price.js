'use strict';

function calcCartPrice()
{
    //Находим все элементы в корзине
    const cartItems = document.querySelectorAll('.cart-item');

    let totalPrice = 0;

    cartItems.forEach(function(item)
    {
        //Колличество позиции в корзине
        const amountEl = item.querySelector('[data-counter]');
        //Стоимость позиции
        const priceEl = item.querySelector('.price__currency');
        //Стоимость позиции товара с учетом его колличества в корзине
        const currentPrice = parseInt(amountEl.innerText) * parseInt(priceEl.innerText);

        totalPrice +=currentPrice;
    });

    console.log(totalPrice);
}