'use strict';

/*Находим элементы для взаимодействия */

//Находим кнопку первую попавшуюся кнопку минус в документе html по data атрибуту
const btnMinus = document.querySelector('[data-action="minus"]');

//Находим кнопку первую попавшуюся кнопку плюс в документе html по data атрибуту
const btnPlus = document.querySelector('[data-action="plus"]');

//Находим счетчик позиции
const counter = document.querySelector('[data-counter]');



/*Отслеживаем клик по кнопкам*/

//Уменьшаем счетчик по нажатию на кнопку -
btnMinus.addEventListener('click', function()
{
    //Проверка счетчика на значение болшее чем 1
    if(parseInt(counter.innerText) > 1 )
    {
        //уменьшаем текст в счетчике на 1
        counter.innerText = --counter.innerText;
    }
    
});

//Увеличиваем счетчик по нажатию на кнопку +
btnPlus.addEventListener('click', function()
{
    counter.innerText = ++counter.innerText;
});

