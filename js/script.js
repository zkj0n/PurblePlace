let pantalla = document.getElementById("pantalla");
let formas = document.querySelectorAll(".forma");
let bases = document.querySelectorAll(".base");
let score = document.querySelector(".score");


//Resultado
//Generar figura a conseguir
function nuevaFigura() {
    let figura = document.createElement('div');
    let resultado =document.getElementById('resultado');
    let icon = document.createElement('i');
    figura.classList.add(formaRan(),"forma",baseRan());
    let iconClass= iconRan();
    icon.classList.add(iconClass[0],iconClass[1]);
    figura.appendChild(icon);
    resultado.appendChild(figura);
}

//Devuelve una forma random
function formaRan() {
    let ran = Math.floor(Math.random()*3);
    let forma ="";
    switch (ran) {
        case 0:
            forma="circulo";
            break;
        case 1:
            forma="rectangulo";
            break;
        case 2:
            forma="cuadrado";
            break;
    }
    return forma;
}


//Devuelve una base random
function baseRan() {
    let ran = Math.floor(Math.random()*3);
    let base ="";
    switch (ran) {
        case 0:
            base="rojo";
            break;
        case 1:
            base="amarillo";
            break;
        case 2:
            base="azul";
            break;
    }
    return base;
}

//Devuelve un icono random
function iconRan() {
    let ran = Math.floor(Math.random()*3);
    let icon =[];
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

document.addEventListener("DOMContentLoaded", function() {
    const formasContainers = document.querySelectorAll('#pantalla #formas');  // Todos los contenedores de formas
    const flechaIzq = document.getElementById('flecha-izq');
    const flechaDer = document.getElementById('flecha-der');
    
    let currentIndex = 0;  

    function mostrarContenedor(index) {
        formasContainers.forEach((container, i) => {
            if (i === index) {
                container.classList.remove('d-none');  
            } else {
                container.classList.add('d-none');  
            }
        });
    }

    flechaDer.addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % formasContainers.length;  
        mostrarContenedor(currentIndex);
    });

    flechaIzq.addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + formasContainers.length) % formasContainers.length;  
        mostrarContenedor(currentIndex);
    });

    mostrarContenedor(currentIndex);
});
function getFPS(callback) {
    let lastFrameTime = performance.now();
    let frameCount = 0;
    let fps = 0;

    function measureFPS() {
        const currentFrameTime = performance.now();
        frameCount++;

        if (currentFrameTime > lastFrameTime + 1000) {
            fps = frameCount;
            frameCount = 0;
            lastFrameTime = currentFrameTime;
            callback(fps);
        }

        requestAnimationFrame(measureFPS);
    }

    requestAnimationFrame(measureFPS);
}

getFPS(function(fps) {
    document.getElementById("fps").innerHTML = `FPS: ${fps}`;
});
