// Handle petal size changes based on slider values
const sliders = document.querySelectorAll('.slider');
const petals = document.querySelectorAll('.petals path');
const val = document.querySelectorAll('.slider-val');

sliders.forEach((slider, index) => {
    slider.addEventListener('input', (event) => {
        const scale = event.target.value / 100;
        petals[index].style.transform = `scale(${scale * 0.8})`;
        val[index].innerHTML = ((event.target.value / 100) - 0.5) * (5 - 1) / (1.5 - 0.5) + 1;
    });
});

