let index = 0;

function mudarSlide(direcao) {
    const slides = document.querySelectorAll(".carousel-item");
    const total = slides.length;
    const container = document.querySelector(".carousel-container");

    index += direcao;
    if (index >= total) index = 0;
    if (index < 0) index = total - 1;

    const larguraSlide = slides[0].clientWidth;
    container.style.transform = `translateX(-${index * larguraSlide}px)`;
}

// Faz as imagens mudarem sozinhas a cada 5 segundos
setInterval(() => {
    mudarSlide(1);
}, 5000);

// Ajusta o primeiro slide ao carregar
window.onload = () => mudarSlide(0);
