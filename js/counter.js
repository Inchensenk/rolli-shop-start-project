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



    //Если нажатая кнопка '-'
    if(event.target.dataset.action === 'plus')
    {
        ++counter.innerText;
    }

    //Если нажатая кнопка '+'
    if(event.target.dataset.action === 'minus')
    {

        if(parseInt(counter.innerText)>1)
        {
            --counter.innerText;
        }
    }
    
});