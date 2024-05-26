document.addEventListener("DOMContentLoaded", function() {
    const imageContainer = document.getElementById("imageContainer");
    const prevButton = document.getElementById("prevButton");
    const nextButton = document.getElementById("nextButton");

    const imagenes = [
        "./imgCarrousell/1.jpg",
        "./imgCarrousell/2.jpg",
        "./imgCarrousell/3.jpg",
        "./imgCarrousell/4.jpg",
        "./imgCarrousell/5.jpg",
        "./imgCarrousell/6.jpg",
        "./imgCarrousell/7.jpg",
    ];

    let currentIndex = 0;

    function showImage(index) {
        imageContainer.innerHTML = `<img src="${imagenes[index]}" alt="Imagen del Carrusel">`;
    }

    function avanzar() {
        currentIndex = (currentIndex + 1) % imagenes.length;
        showImage(currentIndex);
    }

    function retroceder() {
        currentIndex = (currentIndex - 1 + imagenes.length) % imagenes.length;
        showImage(currentIndex);
    }

    showImage(currentIndex);

    prevButton.addEventListener("click", retroceder);
    nextButton.addEventListener("click", avanzar);
});