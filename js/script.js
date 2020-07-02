'use strict';
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

            
            setTimeout(updateClock, 1000);

        }
        updateClock();
    }
    // countTimer('02 july 2020');
    // setInterval(countTimer, 1000, '03 july 2020')
});

