export function renderHero() {
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
      heroSection.innerHTML = `
        <div class="threejs-container"></div>
        <div class="hero-overlay"></div>
        <div class="hero-content">
          <div class="title-container">
            <h1 class="hero-title">
              <span class="title-main">Tek_Init</span>
              <div class="title-underline"></div>
            </h1>
          </div>
          <p class="hero-tagline">
            <span class="tagline-text">Initiate Your Tech Potential</span>
            <span class="tagline-cursor">|</span>
          </p>
          <div class="hero-description">
            <p>Transform your passion into expertise with cutting-edge courses designed for you</p>
          </div>
          <div class="hero-actions">
            <button class="hero-btn hero-btn-primary">
              <span class="btn-text">Explore Courses</span>
              <div class="btn-ripple"></div>
            </button>
          </div>
        </div>
      `;
  
      // Add loaded class for animations after content is rendered
      setTimeout(() => {
        const heroContent = heroSection.querySelector('.hero-content');
        if (heroContent) {
          heroContent.classList.add('loaded');
        }
      }, 100);
  
      // Add click event for primary button
      const primaryBtn = heroSection.querySelector('.hero-btn-primary');
      if (primaryBtn) {
        primaryBtn.addEventListener('click', function() {
          // Add ripple effect
          this.classList.add('btn-clicked');
          setTimeout(() => this.classList.remove('btn-clicked'), 600);
          
          // Scroll to courses section (customize as needed)
          const coursesSection = document.querySelector('#courses');
          if (coursesSection) {
            coursesSection.scrollIntoView({ behavior: 'smooth' });
          }
        });
      }
  
      // Add click event for secondary button
      const secondaryBtn = heroSection.querySelector('.hero-btn-secondary');
      if (secondaryBtn) {
        secondaryBtn.addEventListener('click', function() {
          // Add your demo functionality here
          console.log('Watch Demo clicked');
        });
      }
    }
  }