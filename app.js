const colors = ["green", "red", "purple", "gray", "pink", "blue", "yellow", "orange"];

const btn = document.getElementById("btn");
const color = document.querySelector('.color');

btn.addEventListener('click', () => {
    let randomNumber = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
    color.style.color = colors[randomNumber];
});

btn.addEventListener('mouseenter', () => {
    btn.style.backgroundColor = document.body.style.backgroundColor;
});

btn.addEventListener('mouseleave', () => {
    btn.style.backgroundColor = 'white';
});