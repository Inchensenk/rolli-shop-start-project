'use strict';
//Div внутри корзины, в которой мы добавляем товары
const cartWrapper = document.querySelector('.cart-wrapper');

//отслеживаем клик на странице
window.addEventListener('click', function(event)
{
    //Проверяем что клиик был совершен по кнопке "добавить а корзину"
    if(event.target.hasAttribute('data-cart'))// так как метод hasAttribute предназначен для поиска атрибута, то квадратные скобки не нужны
    {


        //Находим катрочку с товаром внутри которой был совершен клик
        const card = event.target.closest('.card');

        //Собираем данные с этого товара и записываем их в единый объект productInfo
        const productInfo = 
        {
            id: card.dataset.id,
            imgSrc: card.querySelector('.product-img').getAttribute('src'),//getAttribute возвращает значение атрибута src
            title: card.querySelector('.item-title').innerText,
            itemsInBox:  card.querySelector('[data-items-in-box]').innerText,//data-items-in-box это колличество роллов в упаковке
            weight: card.querySelector('.price__weight').innerText,
            price: card.querySelector('.price__currency').innerText,
            counter: card.querySelector('[data-counter]').innerText
        };

        //Проверка на содержание в корзине такого же элемента 
        //cartWrapper.querySelector('[data-id="'+ productInfo.id +'"]');
        const itemInCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`);
        
        //Если товар есть в корзине
        if(itemInCart)
        {
           const counterElement = itemInCart.querySelector('[data-counter]');
           counterElement.innerText = parseInt(counterElement.innerText) + parseInt(productInfo.counter);
        }

        else
        {
            //Если товара нет в корзине

            //Собранные данные подставим в шаблон для товара в корзине
            const cartItemHTML =  `
            <div class="cart-item" data-id="${productInfo.id}">
                <div class="cart-item__top">
                    <div class="cart-item__img">
                        <img src="${productInfo.imgSrc}" alt="${productInfo.title}">
                    </div>
                    <div class="cart-item__desc">
                        <div class="cart-item__title">${productInfo.title}</div>
                        <div class="cart-item__weight">${productInfo.itemsInBox} / ${productInfo.weight}</div>
    
                        <!-- cart-item__details -->
                        <div class="cart-item__details">
    
                            <div class="items items--small counter-wrapper">
                                <div class="items__control" data-action="minus">-</div>
                                <div class="items__current" data-counter="">${productInfo.counter}</div>
                                <div class="items__control" data-action="plus">+</div>
                            </div>
    
                            <div class="price">
                                <div class="price__currency">${productInfo.price}</div>
                            </div>
    
                        </div>
                        <!-- // cart-item__details -->
    
                    </div>
                </div>
            </div>`;
    
            //отобразить товар в корзине
            cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML);//insertAdjacentElement вставляет кусок html внутрь элемента

        }

        //сбрасываем счетчик на странице после добавления товара в корзину
        card.querySelector('[data-counter]').innerText = '1';

        //Отображение статуса корзины(пустая либо полная)
        toggleCartStatus();

        //Расчет общей стоимости товаров в корзине
        calcCartPriceAndDelivery();
    }

    
});