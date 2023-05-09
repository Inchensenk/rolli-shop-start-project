'use strict';

function toggleCartStatus ()
{
    //Находим корзину
    const cartWrapper = document.querySelector('.cart-wrapper');

    const cartEmptyBadge = document.querySelector('[data-cart-empty]');

    const orderForm = document.querySelector('#order-form');

    //Проверяем колличесво элементов внутри корзины
    if(cartWrapper.children.length > 0)
    {
        console.log('FULL');
        cartEmptyBadge.classList.add('none');
        orderForm.classList.remove('none');
    }

    else
    {
        console.log('EMPTY');
        cartEmptyBadge.classList.remove('none');
        orderForm.classList.add('none');
    }
}