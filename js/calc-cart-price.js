'use strict';

function calcCartPrice()
{

    const cartWrapper = document.querySelector('.cart-wrapper');
    const priceElements = cartWrapper.querySelectorAll('.price__currency');
    const totalPriceEl = document.querySelector('.total-price');


    let priceTotal = 0;

    //Обходим все блоки с ценами в корзине
    priceElements.forEach(function(item)
    {
        //Колличество товара
        const amountEl = item.closest('.cart-item').querySelector('[data-counter]');
        //Стоимость позиции товара с учетом его колличества в корзине
        priceTotal += parseInt(item.innerText) * parseInt(amountEl.innerText);

    });
    
    //Отображаем цену на странице
    totalPriceEl.innerText = priceTotal;
}