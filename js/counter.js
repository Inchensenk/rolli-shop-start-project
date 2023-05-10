'use strict';

//Добавляем прослушку на всем окне
window.addEventListener('click', function(event)
{
    //Глобальный счетчик для замыкания в if-ах
    let counter;

    //Проверка на клик по кнопкам + или -
    if(event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus')
    {
        //находим ближайшего родителя с классом .counter-wrapper (обертку счетчика)
        const counterWrapper = event.target.closest('.counter-wrapper');
    
        //находим в родителе элемент со счетчиком
        counter = counterWrapper.querySelector('[data-counter]');
    }

    //Если нажатая кнопка '+'
    if(event.target.dataset.action === 'plus')
    {
        ++counter.innerText;
    }

    //Если нажатая кнопка '-'
    if(event.target.dataset.action === 'minus')
    {

        if(parseInt(counter.innerText)>1)
        {
            --counter.innerText;
        } 
        //Иначе, если клик совершен по кнопке '-' которая находится в корзине
        else if (event.target.closest('.cart-wrapper'))
        {
            //И колличество товара равно 1, (то при нажатии на "-" мы можем его удалить)
            if(parseInt(counter.innerText)===1)
            {
                //Удаляем товар из корзины
                event.target.closest('.cart-item').remove();

                //Отображение статуса корзины(пустая либо полная)
                toggleCartStatus();

                //Расчет общей стоимости товаров в корзине
                calcCartPriceAndDelivery();
            }
        }

    }

    //Проверка на клик по кнопке + или - внутри корзины
    if(event.target.hasAttribute('data-action'))
    {
        if(event.target.closest('.cart-wrapper'))
        {
            //Расчет общей стоимости товаров в корзине
            calcCartPriceAndDelivery();
        }
    }
    
});