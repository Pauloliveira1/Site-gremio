<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <title>Grêmio Estudantil</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header>
    <h1>Grêmio Estudantil</h1>
    <nav>
      <ul>
        <li><a href="index.html">Início</a></li>
        <li><a href="quem-somos.html">Quem Somos</a></li>
        <li><a href="eventos.html">Eventos</a></li>
        <li><a href="contato.html">Contato</a></li>
      </ul>
    </nav>
  </header>

  <main class="container">

    <!-- Carrossel de fotos -->
    <section class="carousel">
      <button class="prev" onclick="mudarSlide(-1)">&#10094;</button>
      <div class="carousel-container">
        <img src="img/foto1.jpg" class="carousel-item">
        <img src="img/foto2.jpg" class="carousel-item">
        <img src="img/foto3.jpg" class="carousel-item">
        <img src="img/foto4.jpg" class="carousel-item">
      </div>
      <button class="next" onclick="mudarSlide(1)">&#10095;</button>
    </section>

    <section class="box">
      <h2>Bem-vindo!</h2>
      <p>Este é o site oficial do Grêmio Estudantil. Aqui você encontra informações sobre quem somos, nossos eventos e formas de contato.</p>
      <p>Acompanhe nossas últimas novidades e participe das atividades que promovemos!</p>
    </section>

  </main>

  <footer>
    <p>&copy; 2025 Grêmio Estudantil. Todos os direitos reservados.</p>
  </footer>

  <script src="script.js"></script>
</body>
</html>
