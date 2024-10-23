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



//Generar Forma
let circulo= document.getElementById("circulo");
let rectangulo= document.getElementById("rectangulo");
let cuadrado= document.getElementById("cuadrado");
circulo.addEventListener('click',genFormaCirculo);
rectangulo.addEventListener('click',genFormaRectangulo);
cuadrado.addEventListener('click',genFormaCuadrado);

//Generar forma del circulo
function genFormaCirculo() {
    let newCircle= document.getElementById("newForma");
    newCircle.classList.remove("cuadrado","rectangulo");
    newCircle.classList.add("forma","circulo");
    
}

//Generar forma del circulo
function genFormaRectangulo() {
    let newRectangulo= document.getElementById("newForma");
    newRectangulo.classList.remove("cuadrado","circulo");
    newRectangulo.classList.add("forma","rectangulo");
}

//Generar forma del cuadrado
function genFormaCuadrado() {
    let newCuadrado= document.getElementById("newForma");
    newCuadrado.classList.remove("rectangulo","circulo");
    newCuadrado.classList.add("forma","cuadrado");
}

//Generar Base
let rojo= document.getElementById("rojo");
let amarillo= document.getElementById("amarillo");
let azul= document.getElementById("azul");
rojo.addEventListener('click',genBaseRojo);
amarillo.addEventListener('click',genBaseAmarillo);
azul.addEventListener('click',genBaseAzul);

//Generar base roja
function genBaseRojo() {
    let newRojo= document.getElementById("newForma");
    newRojo.classList.remove("amarillo","azul");
    newRojo.classList.add("rojo");
}

//Generar base amarilla
function genBaseAmarillo() {
    let newAmarillo= document.getElementById("newForma");
    newAmarillo.classList.remove("azul","rojo");
    newAmarillo.classList.add("amarillo");
}

//Generar base azul
function genBaseAzul() {
    let newAzul= document.getElementById("newForma");
    newAzul.classList.remove("rojo","amarillo");
    newAzul.classList.add("azul");
}


//Generar Icono
let smile= document.getElementById("smile");
let spoon= document.getElementById("spoon");
let yin_yang= document.getElementById("yin-yang");
smile.addEventListener('click',genIconoSmile);
spoon.addEventListener('click',genIconoSpoon);
yin_yang.addEventListener('click',genIconoYinYang);

//Generar icono Smile
function genIconoSmile() {
    let iconSmile= document.getElementById("icono");
    iconSmile.classList.remove("fas", "fa-utensil-spoon","fa-yin-yang");
    iconSmile.classList.add("far","fa-smile");
}

//Generar icono Spoon
function genIconoSpoon() {
    let iconSmile= document.getElementById("icono");
    iconSmile.classList.remove("fas","far" ,"fa-smile","fa-yin-yang");
    iconSmile.classList.add("fas","fa-utensil-spoon");
}

//Generar icono Yin-yang
function genIconoYinYang() {
    let iconSmile= document.getElementById("icono");
    iconSmile.classList.remove("fas","far" ,"fa-smile","fa-utensil-spoon");
    iconSmile.classList.add("fas","fa-yin-yang");
}