/**
 * Global animation utilities for The Code Sorcerer
 * Optimized for performance - handles scroll reveals and cursor glow effects
 */

// Scroll reveal animations with Intersection Observer (performant)
export function initScrollReveal() {
  // Use passive listener and optimize selector
  const reveals = document.querySelectorAll('.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-stagger');
  
  // Early return if no elements
  if (!reveals.length) return;
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        // Unobserve after reveal to improve performance
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  reveals.forEach((element) => observer.observe(element));
}

// Cursor glow effect - optimized with RAF throttling
export function initCursorGlow() {
  const cursorGlow = document.querySelector('.cursor-glow') as HTMLElement;
  if (!cursorGlow) return;

  let mouseX = 0;
  let mouseY = 0;
  let glowX = 0;
  let glowY = 0;
  let hideTimeout: number;
  let rafId: number | null = null;

  // Use passive event listener for better scroll performance
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    cursorGlow.style.opacity = '1';
    
    clearTimeout(hideTimeout);
    hideTimeout = window.setTimeout(() => {
      cursorGlow.style.opacity = '0';
    }, 3000);
    
    // Start animation loop only if not already running
    if (!rafId) {
      rafId = requestAnimationFrame(animate);
    }
  }, { passive: true });

  function animate() {
    const dx = mouseX - glowX;
    const dy = mouseY - glowY;
    
    // Stop animation if cursor is barely moving
    if (Math.abs(dx) < 0.1 && Math.abs(dy) < 0.1) {
      rafId = null;
      return;
    }
    
    glowX += dx * 0.15;
    glowY += dy * 0.15;
    
    // Use left/top as per original (don't change to transform to avoid breaking layout)
    cursorGlow.style.left = glowX - 200 + 'px';
    cursorGlow.style.top = glowY - 200 + 'px';
    
    rafId = requestAnimationFrame(animate);
  }
}

// Initialize all animations - use requestIdleCallback for better performance
export function initAnimations() {
  // Use requestIdleCallback for non-critical animations
  if ('requestIdleCallback' in window) {
    requestIdleCallback(() => {
      initScrollReveal();
      initCursorGlow();
    }, { timeout: 2000 });
  } else {
    // Fallback for browsers without requestIdleCallback
    setTimeout(() => {
      initScrollReveal();
      initCursorGlow();
    }, 1);
  }
}
