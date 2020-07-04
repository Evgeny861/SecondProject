"use strict";

window.addEventListener('DOMContentLoaded', () => {

    // Timer
    function countTimer(deadline) {

        const timerHour = document.querySelector('#timer-hours'),
            timerMinutes  = document.querySelector('#timer-minutes'),
            timerSeconds = document.querySelector('#timer-seconds');

        function getTimeRemaining() {
            const dateStop = new Date(deadline).getTime(),
                dateNow = new Date().getTime(),
                timeRemaining = (dateStop - dateNow) / 1000,
                seconds = Math.floor(timeRemaining % 60),
                minutes = Math.floor((timeRemaining / 60) % 60),
                hours = Math.floor(timeRemaining / 60 / 60);

            return { timeRemaining, hours, minutes, seconds };


        }
        function updateClock() {

            const timer = getTimeRemaining();
            timerHour.textContent = timer.hours;
            timerMinutes.textContent = timer.minutes;
            timerSeconds.textContent = timer.seconds;

            if (timerHour.textContent < 10) {
                timerHour.textContent = '0' + timer.hours;
            }

            if (timerMinutes.textContent < 10) {
                timerMinutes.textContent = '0' + timer.minutes;
            }

            if (timerSeconds.textContent < 10) {
                timerSeconds.textContent = '0' + timer.seconds;
            }

            timer.timeRemaining < 0 ?
                // eslint-disable-next-line no-use-before-define
                (clearInterval(idSetInterval), timerSeconds.textContent = '00',
                timerMinutes.textContent = '00', timerHour.textContent = '00') :
                console.log(typeof(timerSeconds.textContent), timer.minutes, timer.hours);
        }
        const idSetInterval = setInterval(updateClock, 1000);


    }
    countTimer('01 july 2020');
});

// Menu
const toggleMenu = () => {

    const btmMenu = document.querySelector('.menu'),
        menu = document.querySelector('menu'),
        closeBtn = document.querySelector('.close-btn'),
        menuItems = menu.querySelectorAll('ul>li');

    const handlerMenu = () => {
        menu.classList.toggle('active-menu');
        // if (!menu.style.transform || menu.style.transform === `translate(-100%)`) {
        //     menu.style.transform = `translate(0)`;
        //     menu.style.transition = '1s';
        // } else {
        //     menu.style.transform = `translate(-100%)`;
        // }
    };

    btmMenu.addEventListener('click', handlerMenu);
    closeBtn.addEventListener('click', handlerMenu);
    for (let i = 0; i < menuItems.length; i++) {
        menuItems[i].addEventListener('click', handlerMenu);
    }
    menuItems.forEach(elem => elem.addEventListener('click', handlerMenu));





};

toggleMenu();
// popup
let opacityCounter = 0;

const togglePopUp = () => {
    const popup = document.querySelector('.popup'),
        popupBtn = document.querySelectorAll('.popup-btn'),
        popupClose = document.querySelector('.popup-close'),
        popupContent = document.querySelector('.popup-content');

    console.log(popupContent);
    popupBtn.forEach(elem => {
        elem.addEventListener('click', () => {
            popup.style.display = 'block';
            popupContent.style.opacity = 0;
            if (screen.width > 768) {
                function plane() {
                    if (opacityCounter <= 0.9) {
                        opacityCounter += 0.06;
                    } else {
                        clearInterval(intervalId);
                    }
                    popupContent.style.opacity = opacityCounter;
                }

                const intervalId = setInterval(plane, 20);
            }else {
                popupContent.style.opacity = 1;
            }

        });
    });
    popupClose.addEventListener('click', () => {
        popup.style.display = 'none';
        popupContent.style.opacity = 0;
        opacityCounter = 0;
    });



};

togglePopUp();