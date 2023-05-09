'use strict';

//Добавляем прослушку на всем окне
window.addEventListener('click', function(event)
{
    console.log('click window');
/*
    //получам элемент по которому кликнули
    console.log(event.target);

    //получам элемент помеченный data-action, то есть либо плюс либо минус
    console.log(event.target.dataset.action);
*/  

    //Если нажатая кнопка '-'
    if(event.target.dataset.action === 'plus')
    {
        //находим ближайшего родителя с классом .counter-wrapper (обертку счетчика)
        const counterWrapper = event.target.closest('.counter-wrapper');

        //находим в родителе элемент со счетчиком
        const counter = counterWrapper.querySelector('[data-counter]');

        ++counter.innerText;
    }

    //Если нажатая кнопка '+'
    if(event.target.dataset.action === 'minus')
    {
        const counterWrapper = event.target.closest('.counter-wrapper');

        const counter = counterWrapper.querySelector('[data-counter]');

        if(parseInt(counter.innerText)>1)
        {
            --counter.innerText;
        }
    }
    
});