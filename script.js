let index = 0;

function mudarSlide(direcao) {
    const slides = document.querySelectorAll(".carousel-item");
    const total = slides.length;
    
    index += direcao;
    if (index >= total) index = 0;
    if (index < 0) index = total - 1;

    document.querySelector(".carousel-container").style.transform = `translateX(-${index * 100}%)`;
}

// Faz as imagens mudarem sozinhas a cada 5 segundos
setInterval(() => {
    mudarSlide(1);
}, 5000);
