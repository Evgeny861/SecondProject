const toggleMenu = () => {
    const menu = document.querySelector('menu'),
        closeBtn = document.querySelector('.close-btn'),
        body = document.querySelector('body'),
        linkNavs = menu.querySelectorAll('[href^="#"]'),
        serviceBlock = document.querySelector(['[href^="#service-block"]']);

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

    for (const linkNav of linkNavs) {
        linkNav.addEventListener('click', event => {
            event.preventDefault();
            const blockID = linkNav.getAttribute('href');
            document.querySelector('' + blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        });
    }

    serviceBlock.addEventListener('click', event => {
        event.preventDefault();
        const blockID = serviceBlock.getAttribute('href');
        document.querySelector('' + blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    });


};

export default toggleMenu;