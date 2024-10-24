let pantalla = document.getElementById("pantalla");
let formas = document.querySelectorAll("#forma");
let bases = document.querySelectorAll(".base");

//Resultado
//Generar figura a conseguir
function nuevaFigura() {
    let figura = document.createElement('div');
    let resultado = document.getElementById('resultado');
    resultado.innerHTML="<h1>Objetivo</h1>";
    let icon = document.createElement('i');
    figura.classList.add("forma",formaRan(), baseRan());
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


    document.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            setScore();
            nuevaFigura();
        }
    });
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

function setScore() {
    let objetivoForma= document.querySelector("#resultado div").classList.value;
    let objetivoIcon= document.querySelector("#resultado div i").classList.value;
    console.log(objetivoForma);
    console.log(objetivoIcon);
    
    let hacerForma= document.querySelector("#hacer div").classList.value;
    let hacerIcon= document.querySelector("#hacer div i").classList.value;
    
    let puntuacion = document.querySelector("#score");
    let nuevaPuntuacion = Number(puntuacion.textContent);
    console.log(objetivoForma + "---"+ objetivoIcon);
    console.log(hacerForma + "---"+ hacerIcon);


    if(hacerForma==objetivoForma && hacerIcon==objetivoIcon){
        nuevaPuntuacion+=100;
    } else{
        nuevaPuntuacion-=10;
    }
    puntuacion.textContent = nuevaPuntuacion;
}

// Añadir el evento 'dragstart' a cada uno de los elementos
formas.forEach(forma => {
    forma.addEventListener('dragstart', (event) => {
        console.log("aa");
        // Obtener la segunda clase del elemento arrastrado
        let claseForma = event.target.classList[1]; 
        // Pasar la clase al evento dataTransfer para que esté disponible en el drop
        event.dataTransfer.setData('text/plain', claseForma);
    });
});

// Obtener el elemento newForma
let newForma = document.getElementById("newForma");

// Evento 'dragover' en el elemento donde se va a hacer el drop
newForma.addEventListener('dragover', (event) => {
    // Prevenir el comportamiento predeterminado
    event.preventDefault();
});

// Evento 'drop' en el elemento donde se va a soltar
newForma.addEventListener('drop', (event) => {
    // Prevenir el comportamiento predeterminado
    event.preventDefault();

    // Limpiar el contenido de newForma (si es necesario)
    newForma.innerHTML = "";

    // Obtener la clase del elemento arrastrado desde el dataTransfer
    let className = event.dataTransfer.getData("text/plain");

    // Limpiar las clases anteriores de newForma
    newForma.className = "";  // Elimina cualquier clase existente

    // Verificar que className no esté vacío antes de añadirlo
    if (className) {
        newForma.classList.add(className); // Añadir la clase solo si no está vacía
    } else {
        console.error("No se pudo agregar una clase vacía");
    }
});


