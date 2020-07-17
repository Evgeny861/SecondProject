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
export default setDataAttribute;
