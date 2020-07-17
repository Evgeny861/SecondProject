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
export default getRegularExpression;
