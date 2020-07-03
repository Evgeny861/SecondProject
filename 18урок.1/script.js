'use strict';

const elem = document.querySelector('.element'),
    elemHours = document.querySelector('.elem-hours'),
    currentTime = document.querySelector('.current-time'),
    yearTime = document.querySelector('.new-year-time');

function start() {
    const date = new Date(),
        day = date.getDay(),
        hours = date.getHours();

    const timesOfDay = () => {
        if (hours > 17) {
            elem.textContent = "Добрый вечер";
        } else if (hours > 12) {
            elem.textContent = "Добрый день";
        } else if (hours > 4) {
            elem.textContent = "Доброе утро";
        } else if (hours > 0) {
            elem.textContent = "Доброй ночи";
        }
    };

    timesOfDay();

    const dayOfWeek = () => {
        if (day === 1) {
            elemHours.textContent = "Сегодня: Понедельник";
        } else if (day === 2) {
            elemHours.textContent = 'Сегодня: Вторник';
        } else if (day === 3) {
            elemHours.textContent = 'Сегодня: Среда';
        } else if (day === 4) {
            elemHours.textContent = 'Сегодня: Четверг';
        } else if (day === 5) {
            elemHours.textContent = "Сегодня: Пятница";
        } else if (day === 6) {
            elemHours.textContent = 'Сегодня: Суббота';
        } else {
            elemHours.textContent = 'Сегодня: Воскресенье';
        }
    };
    dayOfWeek();

    currentTime.textContent = `Текущее время: ${date.toLocaleTimeString('en')}`;


    function getTimeRemaining() {
        const dateStop = new Date('01.01.2021').getTime(),
            dateNow = new Date().getTime(),
            timeRemaining = (dateStop - dateNow) / 1000,
            days = Math.floor(timeRemaining / 60 / 60 / 24);

        return { timeRemaining, days };

    }
    const timer = getTimeRemaining();

    yearTime.textContent = `До нового года осталось: ${timer.days} день`;

    getTimeRemaining();
}
setInterval(start, 1000);
