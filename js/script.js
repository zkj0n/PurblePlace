let pantalla = document.getElementById("pantalla");
let formas = document.querySelectorAll(".forma");
let bases = document.querySelectorAll(".base");

//Resultado
//Generar figura a conseguir
function nuevaFigura() {
    let figura = document.createElement('div');
    let resultado = document.getElementById('resultado');
    let icon = document.createElement('i');
    figura.classList.add(formaRan(), "forma", baseRan());
    let iconClass = iconRan();
    icon.classList.add(iconClass[0], iconClass[1]);
    figura.appendChild(icon);
    resultado.appendChild(figura);
}

//Devuelve una forma random
function formaRan() {
    let ran = Math.floor(Math.random() * 3);
    let forma = "";
    switch (ran) {
        case 0:
            forma = "circulo";
            break;
        case 1:
            forma = "rectangulo";
            break;
        case 2:
            forma = "cuadrado";
            break;
    }
    return forma;
}

function baseRan() {
    let ran = Math.floor(Math.random() * 3);
    let base = "";
    switch (ran) {
        case 0:
            base = "rojo";
            break;
        case 1:
            base = "amarillo";
            break;
        case 2:
            base = "azul";
            break;
    }
    return base;
}

function iconRan() {
    let ran = Math.floor(Math.random() * 3);
    let icon = [];
    switch (ran) {
        case 0:
            icon.push("far");
            icon.push("fa-smile");
            break;
        case 1:
            icon.push("fas");
            icon.push("fa-utensil-spoon");
            break;
        case 2:
            icon.push("fas");
            icon.push("fa-yin-yang");
            break;
    }
    return icon;
}

nuevaFigura();

document.addEventListener("DOMContentLoaded", function () {
    const formasContainers = document.querySelectorAll('#pantalla #formas'); // Todos los contenedores de formas
    const flechaIzq = document.getElementById('flecha-izq');
    const flechaDer = document.getElementById('flecha-der');

    let i = 0;

    function mostrarContenedor(index) {
        formasContainers.forEach((container, i) => {
            if (i === index) {
                container.classList.remove('d-none');
            } else {
                container.classList.add('d-none');
            }
        });
    }

    flechaDer.addEventListener('click', function () {
        i = (i + 1) % formasContainers.length;
        mostrarContenedor(i);
    });
    document.addEventListener('keydown', function (event) {
        if (event.key === 'ArrowRight') {
            i = (i + 1) % formasContainers.length;
            mostrarContenedor(i);
            setScore();
        }
    });

    flechaIzq.addEventListener('click', function () {
        i = (i - 1 + formasContainers.length) % formasContainers.length;
        mostrarContenedor(i);
    });
    document.addEventListener('keydown', function (event) {
        if (event.key === 'ArrowLeft') {
            i = (i - 1 + formasContainers.length) % formasContainers.length;
            mostrarContenedor(i);
        }
    });

    mostrarContenedor(i);
});

function getFPS(callback) {
    let framesAnterior = performance.now();
    let numeroFrames = 0;
    let fps = 0;

    function cambiarFPS() {
        const framesActuales = performance.now();
        numeroFrames++;

        if (framesActuales > framesAnterior + 1000) {
            fps = numeroFrames;
            numeroFrames = 0;
            framesAnterior = framesActuales;
            callback(fps);
        }

        requestAnimationFrame(cambiarFPS);
    }

    requestAnimationFrame(cambiarFPS);
}

getFPS(function (fps) {
    document.getElementById("fps").innerHTML = `FPS: ${fps}`;
});



function setScore() {
    let objetivoForma= document.querySelector("#resultado div").classList;
    let objetivoIcon= document.querySelector("#resultado i").classList;
    console.log(objetivoForma);
    console.log(objetivoIcon);
    
    let hacerForma= document.querySelector("#hacer div").classList;
    let hacerIcon= document.querySelector("#hacer i").classList;
    
    let puntuacion = document.querySelector("#score");
    let nuevaPuntuacion = Number(puntuacion.textContent);

    if(hacerForma===objetivoForma && hacerIcon===objetivoIcon){
        nuevaPuntuacion+=100;
    } else{
        nuevaPuntuacion-=10;
    }
    puntuacion.textContent = nuevaPuntuacion;
}