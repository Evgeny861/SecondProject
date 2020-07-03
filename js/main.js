"use strict";

window.addEventListener('DOMContentLoaded', () => {


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
                (clearInterval(idSetInterval), timerSeconds.textContent = '00',
                timerMinutes.textContent = '00', timerHour.textContent = '00') :
                console.log(typeof(timerSeconds.textContent), timer.minutes, timer.hours);
        }
        const idSetInterval = setInterval(updateClock, 1000);


    }
    countTimer('04 july 2020');
});

