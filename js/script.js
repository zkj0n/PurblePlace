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
            document.getElementById('newForma').className="";
            document.getElementById("icono").className="";
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

circulo.addEventListener('dragstart', (event) => {
    event.dataTransfer.setData('text/plain', 'circulo');
});
rectangulo.addEventListener('dragstart', (event) => {
    event.dataTransfer.setData('text/plain', 'rectangulo');
});
cuadrado.addEventListener('dragstart', (event) => {
    event.dataTransfer.setData('text/plain', 'cuadrado');
});

let newForma = document.getElementById("newForma");

newForma.addEventListener('dragover', (event) => {
    event.preventDefault();
});

newForma.addEventListener('drop', (event) => {
    event.preventDefault();

    let item = event.dataTransfer.getData('text/plain');

    if (item === 'circulo' || item === 'rectangulo' || item === 'cuadrado') {
        newForma.classList.remove("forma");
        newForma.classList.add("forma");
        newForma.classList.remove("circulo", "rectangulo", "cuadrado");
        newForma.classList.add(item);
    } else if (item === 'rojo' || item === 'amarillo' || item === 'azul') {
        newForma.classList.remove("rojo", "amarillo", "azul");
        newForma.classList.add(item);
    }
});

rojo.addEventListener('dragstart', (event) => {
    event.dataTransfer.setData('text/plain', 'rojo');
});
amarillo.addEventListener('dragstart', (event) => {
    event.dataTransfer.setData('text/plain', 'amarillo');
});
azul.addEventListener('dragstart', (event) => {
    event.dataTransfer.setData('text/plain', 'azul');
});

let iconElement = document.getElementById("icono");

smile.addEventListener('dragstart', (event) => {
    console.log("Arrastrando smile");
    event.dataTransfer.setData('text/plain', 'smile');
});
spoon.addEventListener('dragstart', (event) => {
    console.log("Arrastrando spoon");
    event.dataTransfer.setData('text/plain', 'spoon');
});
yin_yang.addEventListener('dragstart', (event) => {
    console.log("Arrastrando yin-yang");
    event.dataTransfer.setData('text/plain', 'yin-yang');
});


newForma.addEventListener('drop', (event) => {
    event.preventDefault();

    let icon = event.dataTransfer.getData('text/plain');

    iconElement.className = ""; 

    if (icon === 'smile') {
        iconElement.classList.add("far", "fa-smile");
    } else if (icon === 'spoon') {
        iconElement.classList.add("fas", "fa-utensil-spoon");
    } else if (icon === 'yin-yang') {
        iconElement.classList.add("fas", "fa-yin-yang");
    }

    console.log('Clases del icono después del drop:', iconElement.className);
});


