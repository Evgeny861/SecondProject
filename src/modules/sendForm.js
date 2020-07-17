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

form.addEventListener('submit', event => {
    event.preventDefault();
    form.appendChild(statusMessage);
    const formData = new FormData(form);
    statusMessage.textContent = loadMessage;
    const input = form.querySelectorAll('input');
    for (let i = 0; i < input.length; i++) {
        if (input[i].value !== '') {
            input[i].value = '';
        }
    }

    if (form === document.getElementById('form3')) {
        statusMessage.style.color = '#fff';
    }

    const deliteMessage = () => {
        if (statusMessage) {
            form.removeChild(statusMessage);
        }
    };
    setTimeout(deliteMessage, 5000);

    const postData = formData =>
        fetch('./server.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: formData
        });


    postData(formData)
        .then(response => {
            if (response.status !== 200) {
                throw new Error('status network not 200');
            }
            console.log(response);
            statusMessage.textContent = successMessage;
        })
        .catch(error => {
            statusMessage.textContent = errorMessage;
            console.log(error);
        });

});

};

export default sendForm;
