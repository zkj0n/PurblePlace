let pantalla = document.getElementById("pantalla");
let formas = document.querySelectorAll(".forma");
let bases = document.querySelectorAll(".base");
let score = document.querySelector(".score");


score.addEventListener('click', (event)=>{
    event.preventDefault();

    score.textContent= '';
});