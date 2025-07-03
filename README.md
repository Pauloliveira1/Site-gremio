
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
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
        <img src="IMG-20250321-WA0050.jpg" class="carousel-item">
        <img src="IMG-20250321-WA0054.jpg" class="carousel-item">
        <img src="IMG-20250321-WA0055.jpg" class="carousel-item">
        <img src="IMG-20250321-WA0070.jpg" class="carousel-item">
        <img src="IMG-20250321-WA0071.jpg" class="carousel-item">
      </div>
      <button class="next" onclick="mudarSlide(1)">&#10095;</button>
    </section>

    <!-- Seção de Boas-Vindas -->
    <section class="box">
      <h2>Bem-vindo!</h2>
      <p>Este é o site oficial do Grêmio Estudantil. Aqui você encontra informações sobre quem somos, nossos eventos e formas de contato.</p>
      <p>Acompanhe nossas últimas novidades e participe das atividades que promovemos!</p>
    </section>

    <!-- Notícias e Atualizações -->
    <section class="news">
      <h2>Últimas Notícias</h2>
      <article>
        <h3>Título da Notícia</h3>
        <p>Descrição breve da notícia. <a href="#">Leia mais...</a></p>
      </article>
      <article>
        <h3>Outro Título</h3>
        <p>Resumo da segunda notícia. <a href="#">Leia mais...</a></p>
      </article>
    </section>

    <!-- Galeria de Fotos e Vídeos -->
    <section class="gallery">
      <h2>Galeria</h2>
      <div class="gallery-container">
        <img src="foto4.jpg" alt="Foto do evento">
        <img src="foto5.jpg" alt="Outra foto">
        <img src="foto6.jpg" alt="Mais uma foto">
      </div>
    </section>

    <!-- Destaques da Semana -->
    <section class="highlights">
      <h2>Destaques da Semana</h2>
      <p>Aqui destacamos as principais atividades da semana no Grêmio!</p>
    </section>

    <!-- Enquete Interativa -->
    <section class="poll">
      <h2>Enquete</h2>
      <p>Qual atividade você gostaria de ver no próximo evento?</p>
      <form>
        <input type="radio" name="vote" value="1"> Campeonato de Jogos <br>
        <input type="radio" name="vote" value="2"> Oficina de Arte <br>
        <input type="radio" name="vote" value="3"> Gincana Estudantil <br>
        <button type="submit">Votar</button>
      </form>
    </section>

    <!-- Agenda de Eventos -->
    <section class="events">
      <h2>Próximos Eventos</h2>
      <ul>
        <li>Evento X - 10 de Abril</li>
        <li>Evento Y - 15 de Abril</li>
        <li>Evento Z - 20 de Abril</li>
      </ul>
    </section>

    <!-- Mural de Recados -->
    <section class="mural">
      <h2>Mural de Recados</h2>
      <p>Deixe seu recado para o Grêmio:</p>
      <textarea placeholder="Digite sua mensagem..."></textarea>
      <button>Enviar</button>
    </section>

    <!-- Sabia Que? -->
    <section class="facts">
      <h2>Sabia Que?</h2>
      <p>Curiosidades sobre o Grêmio e nossa escola.</p>
    </section>

  </main>

  <footer>
    <p>&copy; 2025 Grêmio Estudantil. Todos os direitos reservados.</p>
  </footer>

  <script src="script.js"></script>
</body>
</html>
