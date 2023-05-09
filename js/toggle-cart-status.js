'use strict';

function toggleCartStatus ()
{
    console.log('toggleCartStatus');

    //Находим корзину
    const cartWrapper = document.querySelector('.cart-wrapper');

    //Проверяем колличесво элементов внутри корзины
    console.log(cartWrapper.children.length);

    if(cartWrapper.children.length > 0)
    {
        console.log('FULL')
    }

    else
    {
        console.log('EMPTY')
    }
}