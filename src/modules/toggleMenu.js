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
            } else if (menu.classList.contains('active-menu') && target !== menu && !target.matches('li')) {
                handlerMenu();
            }


    });


};

export default toggleMenu;