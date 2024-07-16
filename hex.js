const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector('.color');


btn.addEventListener('click', () => {
    let hexColor = '#'
    for (i = 0; i < 6; i++) {
        let randomNumber = Math.floor(Math.random() * (hex.length));
        hexColor += hex[randomNumber];
        document.body.style.backgroundColor = hexColor;
        color.textContent = hexColor;
        color.style.color = hexColor;
    };
});

btn.addEventListener('mouseenter', () => {
    btn.style.backgroundColor = document.body.style.backgroundColor;
});

btn.addEventListener('mouseleave', () => {
    btn.style.backgroundColor = 'white';
});