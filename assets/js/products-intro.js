// products-intro.js
// Efecto de escritura que luego se convierte en marquee infinito con sombras

(function() {
  'use strict';

  const typingEl = document.getElementById('products-intro-typing');
  const marqueeEl = document.getElementById('products-intro-marquee');
  
  if (!typingEl || !marqueeEl) return;

  // Texto completo para el efecto de escritura
  const fullText = "These products aren't popular by accident. We chose them because they solve real problems, have good ratings on Amazon, and get used more than you'd imagine.";

  // Texto para el marquee (más corto, repetido)
  const marqueeText = "These products aren't popular by accident · We chose them because they solve real problems · Have good ratings on Amazon · Get used more than you'd imagine ·";

  let charIndex = 0;
  let isTyping = true;

  function typeChar() {
    if (charIndex < fullText.length && isTyping) {
      typingEl.textContent = fullText.substring(0, charIndex + 1);
      charIndex++;
      setTimeout(typeChar, 50); // Velocidad de escritura
    } else if (charIndex >= fullText.length && isTyping) {
      // Esperar un momento antes de cambiar a marquee
      setTimeout(() => {
        typingEl.classList.add('fade-out');
        setTimeout(() => {
          typingEl.classList.add('hidden');
          typingEl.classList.remove('fade-out');
          
          // Crear el marquee infinito
          createMarquee();
          marqueeEl.classList.remove('hidden');
          marqueeEl.classList.add('fade-in');
        }, 300);
      }, 1500);
    }
  }

  function createMarquee() {
    // Crear múltiples copias para efecto infinito
    const marqueeContent = marqueeText.repeat(4);
    marqueeEl.innerHTML = `
      <div class="products-intro-marquee-inner">
        <span class="products-intro-marquee-text">${marqueeContent}</span>
        <span class="products-intro-marquee-text">${marqueeContent}</span>
      </div>
    `;
  }

  // Iniciar efecto de escritura cuando el DOM esté listo
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      setTimeout(typeChar, 500); // Pequeño delay inicial
    });
  } else {
    setTimeout(typeChar, 500);
  }
})();

