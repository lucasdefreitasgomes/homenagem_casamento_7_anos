// Função para criar um coração em uma posição aleatória
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.top = `${Math.random() * 100}%`;
    heart.style.fontSize = `${Math.floor(Math.random() * 24) + 12}px`;
    document.body.appendChild(heart);
    // Remove o coração após 3 segundos
    setTimeout(() => heart.remove(), 3000);
  }
  
  // Chama a função createHeart() a cada 0,5 segundos
  setInterval(createHeart, 500);  