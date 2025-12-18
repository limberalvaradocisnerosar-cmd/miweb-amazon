// cards-magnetic.js
// Efecto de levitación magnética: solo la card visible en viewport se levanta durante el scroll

(function() {
  'use strict';

  const cards = document.querySelectorAll('.product-card');
  if (cards.length === 0) return;

  // Configuración
  const options = {
    root: null,
    rootMargin: '-20% 0px -20% 0px', // Solo activa cuando está en el centro del viewport
    threshold: 0.5
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const card = entry.target;
      
      if (entry.isIntersecting) {
        // Card visible: agregar clase de levitación
        card.classList.add('magnetic-lift');
        // Remover de otras cards
        cards.forEach(c => {
          if (c !== card) {
            c.classList.remove('magnetic-lift');
          }
        });
      } else {
        // Card no visible: remover levitación
        card.classList.remove('magnetic-lift');
      }
    });
  }, options);

  // Observar todas las cards
  cards.forEach(card => {
    observer.observe(card);
  });

  // También escuchar scroll para efecto más suave y dinámico
  let ticking = false;
  
  function updateCardsOnScroll() {
    const viewportCenter = window.innerHeight / 2;
    
    cards.forEach(card => {
      const rect = card.getBoundingClientRect();
      const cardCenter = rect.top + rect.height / 2;
      const distance = Math.abs(cardCenter - viewportCenter);
      
      // Si la card está cerca del centro del viewport (zona de 300px)
      if (distance < 300) {
        const intensity = Math.max(0, 1 - (distance / 300)); // 0 a 1
        card.style.setProperty('--magnetic-intensity', intensity);
        
        // Si está muy cerca del centro, asegurar que tenga la clase
        if (distance < 150 && !card.classList.contains('magnetic-lift')) {
          card.classList.add('magnetic-lift');
        } else if (distance >= 150 && card.classList.contains('magnetic-lift')) {
          // Solo remover si otra card está más cerca
          const otherCards = Array.from(cards).filter(c => c !== card);
          const hasCloserCard = otherCards.some(c => {
            const cRect = c.getBoundingClientRect();
            const cCenter = cRect.top + cRect.height / 2;
            return Math.abs(cCenter - viewportCenter) < distance;
          });
          if (hasCloserCard) {
            card.classList.remove('magnetic-lift');
          }
        }
      } else {
        card.style.setProperty('--magnetic-intensity', 0);
        if (card.classList.contains('magnetic-lift')) {
          card.classList.remove('magnetic-lift');
        }
      }
    });
    
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(updateCardsOnScroll);
      ticking = true;
    }
  }, { passive: true });
  
  // Ejecutar una vez al cargar
  updateCardsOnScroll();
})();

