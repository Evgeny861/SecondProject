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

            if (timer.timeRemaining < 0) {
                // eslint-disable-next-line no-use-before-define
                (clearInterval(idSetInterval), timerSeconds.textContent = '00',
                timerMinutes.textContent = '00', timerHour.textContent = '00');
            }
        }
        const idSetInterval = setInterval(updateClock, 1000);


    }
    countTimer('07 july 2020');


    // Menu
    const toggleMenu = () => {

        const menu = document.querySelector('menu'),
            closeBtn = document.querySelector('.close-btn'),
            body = document.querySelector('body');

        const handlerMenu = () => {
            menu.classList.toggle('active-menu');
        };
        body.addEventListener('click', event => {
            const target = event.target;
            if (target.closest('.menu')) {
                handlerMenu();
            } else if (target === closeBtn) {
                handlerMenu();
            } else if (menu.classList.contains('active-menu') && target !== menu) {
                handlerMenu();
            }

        });


    };

    toggleMenu();
    // popup
    let opacityCounter = 0;

    const togglePopUp = () => {
        const popup = document.querySelector('.popup'),
            popupBtn = document.querySelectorAll('.popup-btn'),
            popupContent = document.querySelector('.popup-content');

        popupBtn.forEach(elem => {
            elem.addEventListener('click', () => {
                popup.style.display = 'block';
                popupContent.style.opacity = 0;
                if (screen.width > 768) {
                    function plane() {
                        if (opacityCounter <= 1) {
                            opacityCounter += 0.06;
                        } else {
                            clearInterval(intervalId);
                        }
                        popupContent.style.opacity = opacityCounter;
                    }

                    const intervalId = setInterval(plane, 20);
                } else {
                    popupContent.style.opacity = 1;
                }

            });
        });
        popup.addEventListener('click', event => {
            let target = event.target;
            if (target.classList.contains('popup-close')) {
                popup.style.display = 'none';
                popupContent.style.opacity = 0;
                opacityCounter = 0;
            } else {
                target = target.closest('.popup-content');
                if (!target) {
                    popup.style.display = 'none';
                    popupContent.style.opacity = 0;
                    opacityCounter = 0;
                }
            }


        });




    };

    togglePopUp();


    // Табы

    const tabs = () => {
        const tabHeader = document.querySelector('.service-header'),
            tab = tabHeader.querySelectorAll('.service-header-tab'),
            tabContent = document.querySelectorAll('.service-tab');

        const toggleTabContent = index => {
            for (let i = 0; i < tabContent.length; i++) {
                if (index === i) {
                    tab[i].classList.add('active');
                    tabContent[i].classList.remove('d-none');
                } else {
                    tabContent[i].classList.add('d-none');
                    tab[i].classList.remove('active');
                }
            }
        };

        tabHeader.addEventListener('click', event => {
            let target = event.target;

            target = target.closest('.service-header-tab');
            if (target.classList.contains('service-header-tab')) {
                tab.forEach((item, i) => {
                    if (item === target) {
                        toggleTabContent(i);
                    }
                });
            }

        });
    };

    tabs();

    // Слайдер
    const sliderDot = () => {
        const ul = document.querySelector('.portfolio-dots');

        const slide = document.querySelectorAll('.portfolio-item');


        for (let i = 0; i < slide.length; i++) {
            ul.append(document.createElement('li'));
        }

        const li = ul.querySelectorAll('li');

        for (let i = 0; i < li.length; i++) {
            ul.querySelectorAll('li')[i].classList.add('dot');
        }
    };

    sliderDot();

    const slider = () => {
        const slide = document.querySelectorAll('.portfolio-item'),
            dot = document.querySelectorAll('.dot'),
            slider = document.querySelector('.portfolio-content');

        let currentSlide = 0,
            interval = 0;

        const prevSlide = (elem, index, strClass) => {
            elem[index].classList.remove(strClass);

        };

        const nextSlide = (elem, index, strClass) => {
            elem[index].classList.add(strClass);

        };

        const autoPlaySlide = () => {
            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');
            currentSlide++;
            if (currentSlide >= slide.length) {
                currentSlide = 0;

            }
            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');

        };
        const startSlide = (time = 3000) => {
            interval = setInterval(autoPlaySlide, time);
        };

        const stopSlide = () => {
            clearInterval(interval);
        };

        slider.addEventListener('click', event => {
            event.preventDefault();

            const target = event.target;

            if (!target.matches('.portfolio-btn, .dot')) {
                return;
            }

            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');

            if (target.matches('#arrow-right')) {
                currentSlide++;
            } else if (target.matches('#arrow-left')) {
                currentSlide--;
            } else if (target.matches('.dot')) {
                dot.forEach((elem, index) => {
                    if (elem === target) {
                        currentSlide = index;
                    }
                });
            }
            if (currentSlide >= slide.length) {
                currentSlide = 0;
            }
            if (currentSlide < 0) {
                currentSlide = slide.length - 1;
            }
            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');

        });

        slider.addEventListener('mouseover', event => {
            if (event.target.matches('.portfolio-btn') ||
            event.target.matches('.dot')) {
                stopSlide();
            }
        });
        slider.addEventListener('mouseout', event => {
            if (event.target.matches('.portfolio-btn') ||
            event.target.matches('.dot')) {
                startSlide();
            }
        });

        startSlide(1500);

    };

    slider();

    // Добавление ругалярного выражения
    const getRegularExpression = () => {
        const calcSquare = document.querySelector('.calc-square'),
            calcCount = document.querySelector('.calc-count'),
            calcDay = document.querySelector('.calc-day');

        calcSquare.addEventListener('input', () => {
            calcSquare.value = calcSquare.value.replace(/\D/g, '');
        });
        calcCount.addEventListener('input', () => {
            calcCount.value = calcCount.value.replace(/\D/g, '');
        });
        calcDay.addEventListener('input', () => {
            calcDay.value = calcDay.value.replace(/\D/g, '');
        });
    };

    getRegularExpression();


    // Смена картинки
    const setDataAttribute = () => {
        const command = document.getElementById('command'),
            img = command.querySelectorAll('img');

        for (let i = 0; i < img.length; i++) {
            img[i].addEventListener('mouseenter', () => {
                const src = event.target.src;
                event.target.src = event.target.dataset.img;
                event.target.dataset.img = src;

            });
            img[i].addEventListener('mouseleave', () => {
                const src = event.target.src;
                event.target.src = event.target.dataset.img;
                event.target.dataset.img = src;
            });

        }
    };

    setDataAttribute();




});


