export function initParticles() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
  
    const particleCount = 40;
    let particles = [];
  
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'css-particle';
      
      // Enhanced random properties
      const size = Math.random() * 4 + 2; // Slightly larger particles
      const posX = Math.random() * 100;
      const posY = Math.random() * 100;
      const delay = Math.random() * 8; // Longer delay spread
      const duration = Math.random() * 15 + 10; // Longer duration range
      const hue = Math.random() * 60 + 140; // Green/cyan spectrum
      const saturation = Math.random() * 30 + 70; // Vary saturation
      const lightness = Math.random() * 30 + 60; // Vary lightness
      
      // Create more interesting movement
      const moveX = (Math.random() - 0.5) * 200; // Horizontal drift
      const moveY = Math.random() * -300 - 100; // Upward movement
      
      particle.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        left: ${posX}%;
        top: ${posY}%;
        background: hsl(${hue}, ${saturation}%, ${lightness}%);
        animation-delay: ${delay}s;
        animation-duration: ${duration}s;
        --move-x: ${moveX}px;
        --move-y: ${moveY}px;
      `;
      
      hero.appendChild(particle);
      particles.push(particle);
    }
  
    // Create some special effect particles
    const specialParticleCount = 100;
    for (let i = 0; i < specialParticleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'css-particle special-particle';
      
      const size = Math.random() * 6 + 4;
      const posX = Math.random() * 100;
      const posY = Math.random() * 100;
      const delay = Math.random() * 5;
      const duration = Math.random() * 20 + 15;
      
      particle.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        left: ${posX}%;
        top: ${posY}%;
        background: radial-gradient(circle, #00f5a0 0%, transparent 70%);
        animation-delay: ${delay}s;
        animation-duration: ${duration}s;
        filter: blur(2px);
        opacity: 0.6;
      `;
      
      hero.appendChild(particle);
      particles.push(particle);
    }
  
    // Optional: Clean up particles when they're no longer needed
    return {
      destroy: () => {
        particles.forEach(particle => {
          if (particle.parentNode) {
            particle.parentNode.removeChild(particle);
          }
        });
        particles = [];
      }
    };
  }