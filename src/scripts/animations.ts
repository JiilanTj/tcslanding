/**
 * Global animation utilities for The Code Sorcerer
 * Handles scroll reveals and cursor glow effects
 */

// Scroll reveal animations
export function initScrollReveal() {
  const reveals = document.querySelectorAll('.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-stagger');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  reveals.forEach((element) => observer.observe(element));
}

// Cursor glow effect
export function initCursorGlow() {
  const cursorGlow = document.querySelector('.cursor-glow') as HTMLElement;
  if (!cursorGlow) return;

  let mouseX = 0;
  let mouseY = 0;
  let glowX = 0;
  let glowY = 0;
  let hideTimeout: number;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    if (cursorGlow) {
      cursorGlow.style.opacity = '1';
    }
    
    clearTimeout(hideTimeout);
    hideTimeout = window.setTimeout(() => {
      if (cursorGlow) {
        cursorGlow.style.opacity = '0';
      }
    }, 3000);
  });

  function animate() {
    if (!cursorGlow) return;
    
    const dx = mouseX - glowX;
    const dy = mouseY - glowY;
    
    glowX += dx * 0.15;
    glowY += dy * 0.15;
    
    cursorGlow.style.left = glowX - 200 + 'px';
    cursorGlow.style.top = glowY - 200 + 'px';
    
    requestAnimationFrame(animate);
  }

  animate();
}

// Initialize all animations
export function initAnimations() {
  initScrollReveal();
  initCursorGlow();
}
