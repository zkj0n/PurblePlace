let pantalla = document.getElementById("pantalla");
let formas = document.querySelectorAll(".forma");
let bases = document.querySelectorAll(".base");
let score = document.querySelector(".score");

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