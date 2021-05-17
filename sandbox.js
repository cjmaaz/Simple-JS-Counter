const calcCount = function () {
    const countDate = new Date('August 1 2021 00:00:00').getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    const sec = 1000;
    const min = sec * 60;
    const hour = min * 60;
    const day = hour * 24;

    const textDay = Math.trunc(gap / day);
    const textHour = Math.trunc((gap % day) / hour);
    const textMinute = Math.trunc((gap % hour) / min);
    const textSecond = Math.trunc((gap % min) / sec);

    document.querySelector('.day').textContent = textDay;
    document.querySelector('.hour').textContent = textHour;
    document.querySelector('.min').textContent = textMinute;
    document.querySelector('.sec').textContent = textSecond;
};

setInterval(calcCount, 1000);