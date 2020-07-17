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

            // const modalWindow = document.getElementById('form3');
            // const statusMessage = modalWindow.querySelector('.status-message');
            // if (popup.style.display === 'none' && statusMessage) {
            //     modalWindow.removeChild(statusMessage);
            // }


        });

    };

export default togglePopUp;
