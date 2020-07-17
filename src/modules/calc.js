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
        if (target.matches('select') || target.matches('input')) {
            countSum();
        }
    });
};
export default calc;
