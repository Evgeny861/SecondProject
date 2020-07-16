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
    countTimer('1 july 2020');


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
                    // eslint-disable-next-line no-inner-declarations
                    function plane() {
                        if (opacityCounter <= 1) {
                            opacityCounter += 0.06;
                        } else {
                            // eslint-disable-next-line no-use-before-define
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

            const modalWindow = document.getElementById('form3');
            const statusMessage = modalWindow.querySelector('.status-message');
            if (popup.style.display === 'none' && statusMessage) {
                modalWindow.removeChild(statusMessage);
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
        const formPhone1 = document.querySelectorAll('.form-phone')[0];
        formPhone1.addEventListener('input', () => {
            formPhone1.value = formPhone1.value.replace(/[^\d+]/, '');
        });
        const formPhone2 = document.querySelectorAll('.form-phone')[1];
        formPhone2.addEventListener('input', () => {
            formPhone2.value = formPhone2.value.replace(/[^\d+]/, '');
        });
        const formPhone3 = document.querySelectorAll('.form-phone')[2];
        formPhone3.addEventListener('input', () => {
            formPhone3.value = formPhone3.value.replace(/[^\d+]/, '');
        });
        const topForm1 = document.getElementById('form1-name');
        topForm1.addEventListener('input', () => {
            topForm1.value = topForm1.value.replace(/[^А-Яа-яёЁ\s]/, '');
        });
        const topForm2 = document.getElementById('form2-name');
        topForm2.addEventListener('input', () => {
            topForm2.value = topForm2.value.replace(/[^А-Яа-яёЁ\s]/, '');
        });
        const form2Message = document.getElementById('form2-message');
        form2Message.addEventListener('input', () => {
            form2Message.value = form2Message.value.replace(/[^А-Яа-яёЁ\s]/, '');
        });
        const topForm3 = document.getElementById('form3-name');
        topForm3.addEventListener('input', () => {
            topForm3.value = topForm3.value.replace(/[^А-Яа-яёЁ\s]/, '');
        });


    };

    getRegularExpression();

    // Калькулятор
    const calc = (price = 100) => {
        const calcBlock = document.querySelector('.calc-block'),
            calcType = document.querySelector('.calc-type'),
            calcSquare = document.querySelector('.calc-square'),
            calcDay = document.querySelector('.calc-day'),
            calcCount = document.querySelector('.calc-count'),
            totalValue = document.getElementById('total');

        const countSum = () => {
            let total = 0,
                countValue = 1,
                dayValue = 1;
            const typeValue = calcType.options[calcType.selectedIndex].value,
                squareValue = +calcSquare.value;

            if (calcCount.value > 1) {
                countValue += (calcCount.value - 1) / 10;
            }

            if (calcDay.value && calcDay.value < 5) {
                dayValue *= 2;
            } else if (calcDay.value && calcDay.value < 10) {
                dayValue *= 1.5;
            } else {
                dayValue *= 1.1;
            }

            if (typeValue && squareValue) {
                total = price * typeValue * squareValue * countValue * dayValue;
            }
            let a = 0;

            const timerId = setInterval(() => {
                if (Math.ceil(total) > 0 && a <= total) {
                    if ((Math.ceil(total) - totalValue.textContent) > 1000) {
                        a += 100;
                        totalValue.textContent = a;
                    } else if ((Math.ceil(total) - totalValue.textContent) > 500) {
                        a += 50;
                        totalValue.textContent = a;
                    } else if ((Math.ceil(total) - totalValue.textContent) > 100) {
                        a += 10;
                        totalValue.textContent = a;
                    }  else if ((Math.ceil(total) - totalValue.textContent) > 50) {
                        a += 5;
                        totalValue.textContent = a;
                    } else if ((Math.ceil(total) - totalValue.textContent) > 0) {
                        a += 1;
                        totalValue.textContent = a;
                    }
                }

            }, 1);
            setTimeout(() => { clearInterval(timerId); }, 10000);

            totalValue.textContent = a;

        };

        calcBlock.addEventListener('change', event => {
            const target = event.target;
            // if (target.matches('.calc-type') || target.matches('.calc-square') ||
            // target.matches('.calc-day') || target.matches('.calc-count')) {
            //     console.log(1);
            // }
            // if (target === calcType || target === calcSquare ||
            //     target === calcDay || target === calcCount) {
            //     console.log(1);
            // }
            if (target.matches('select') || target.matches('input')) {
                countSum();
            }

        });
    };

    calc(100);


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

    // send-ajax-form
    const form1 = document.getElementById('form1'),
        form2 = document.getElementById('form2'),
        form3 = document.getElementById('form3');



    const sendForm = form => {
        const errorMessage = 'Что то пошло не так...',
            loadMessage = 'Загрузка...',
            successMessage = 'Спасибо! Мы скоро с вами свяжемся!';

        const statusMessage = document.createElement('div');
        statusMessage.classList.add('status-message');
        statusMessage.style.cssText = 'font-size: 2rem;';

        const postData = body => new Promise((resolve, reject) => {
            const request = new XMLHttpRequest();
            request.addEventListener('readystatechange', () => {
                if (request.readyState !== 4) {
                    return;
                }
                if (request.status === 200) {
                    const outputData = statusMessage.textContent = successMessage;
                    resolve(outputData);
                } else {
                    statusMessage.textContent = errorMessage;
                    reject(request.status);
                }
            });
            request.open('POST', './server.php');
            request.setRequestHeader('Content-Type', 'application/json');
            request.send(JSON.stringify(body));

        });




        form.addEventListener('submit', event => {
            event.preventDefault();
            form.appendChild(statusMessage);
            statusMessage.textContent = loadMessage;
            const formData = new FormData(form);
            const body = {};
            for (const val of formData.entries()) {
                body[val[0]] = val[1];
            }
            const input = form.querySelectorAll('input');
            for (let i = 0; i < input.length; i++) {
                if (input[i].value !== '') {
                    input[i].value = '';
                }
            }

            if (form === document.getElementById('form3')) {
                statusMessage.style.color = '#fff';
            }

            postData(body)
                .then(successMessage)
                .catch(errorMessage);

        });






    };

    sendForm(form1);
    sendForm(form2);
    sendForm(form3);




});


