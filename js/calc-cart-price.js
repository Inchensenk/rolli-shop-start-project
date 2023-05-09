'use strict';

function calcCartPrice()
{
    const cartItems = document.querySelectorAll('.cart-item');
    console.log(cartItems);

    cartItems.forEach(function(item)
    {
        console.log(item);

        //Колличество позиции в корзине
        const amountEl = item.querySelector('[data-counter]');
        //Стоимость позиции
        const priceEl = item.querySelector('.price__currency');
        //Стоимость позиции товара с учетом его колличества в корзине
        const currentPrice = parseInt(amountEl.innerText) * parseInt(priceEl.innerText);

        console.log(currentPrice);
    });
}