const testimonials = [
    {
      quote: "The DevOps course at Tek_init completely changed my career trajectory. Within three months, I landed a junior DevOps role with a 40% salary increase.",
      name: "James Doe",
      title: "DevOps Engineer",
      initials: "JD"
    },
    {
      quote: "As someone with no prior tech background, I was amazed at how approachable the Cloud Computing course was. The instructors made complex concepts easy to understand.",
      name: "Sarah Chen",
      title: "Cloud Architect",
      initials: "SC"
    },
    {
      quote: "The hands-on projects gave me real confidence. I built a complete CI/CD pipeline that became a talking point in all my interviews.",
      name: "Michael Johnson",
      title: "SRE Engineer",
      initials: "MJ"
    },
    {
      quote: "Tek_init's career support helped me negotiate a 25% higher offer. The mock interviews were incredibly valuable preparation.",
      name: "Aisha Williams",
      title: "Cloud Engineer",
      initials: "AW"
    },
    {
      quote: "The infrastructure projects were incredibly practical. I could immediately apply what I learned to real-world scenarios.",
      name: "David Park",
      title: "Infrastructure Engineer",
      initials: "DP"
    },
    {
      quote: "The mentorship program was outstanding. Having a senior engineer guide me through my learning journey made all the difference.",
      name: "Rachel Martinez",
      title: "Platform Engineer",
      initials: "RM"
    }
  ];
  
  export function renderTestimonials() {
    const testimonialsSection = document.getElementById('testimonials');
    if (testimonialsSection) {
      testimonialsSection.innerHTML = `
        <h2 class="section-title">Student Success Stories</h2>
        <p class="section-subtitle">Hear from our graduates who have successfully transitioned into tech careers.</p>
        <div class="testimonial-slider-container">
          <button class="slider-btn prev-btn" aria-label="Previous">❮</button>
          <div class="testimonial-slider">
            <div class="testimonial-track">
              <!-- Cards will be injected here -->
            </div>
          </div>
          <button class="slider-btn next-btn" aria-label="Next">❯</button>
        </div>
        <div class="slider-dots"></div>
      `;
      
      const track = testimonialsSection.querySelector('.testimonial-track');
      const dotsContainer = testimonialsSection.querySelector('.slider-dots');
      
      // Create extended testimonials array for seamless looping
      const extendedTestimonials = [
        testimonials[testimonials.length - 2],
        testimonials[testimonials.length - 1],
        ...testimonials,
        testimonials[0],
        testimonials[1]
      ];
      
      // Create testimonial cards
      extendedTestimonials.forEach((testimonial, index) => {
        const card = document.createElement('div');
        card.className = 'testimonial-card';
        card.innerHTML = `
          <p class="testimonial-text">"${testimonial.quote}"</p>
          <div class="testimonial-author">
            <div class="testimonial-avatar">${testimonial.initials}</div>
            <div class="author-info">
              <h4>${testimonial.name}</h4>
              <p class="author-title">${testimonial.title}</p>
            </div>
          </div>
        `;
        track.appendChild(card);
      });
      
    //   // Create dots (only for original testimonials)
    //   testimonials.forEach((_, index) => {
    //     const dot = document.createElement('button');
    //     dot.className = 'slider-dot';
    //     if (index === 0) {
    //       dot.classList.add('active');
    //     }
    //     // Important: Explicitly set the dot sizing here
    //     const isMobile = window.innerWidth <= 480;
    //     if (isMobile) {
    //       dot.style.width = '4px';
    //       dot.style.height = '4px';
    //       dot.style.margin = '0 2px';
    //     }
    //     dot.setAttribute('data-index', index);
    //     dotsContainer.appendChild(dot);
    //   });
      
      // Initialize slider
      initTestimonialSlider();
    }
  }
  
  export function initTestimonialSlider() {
    const sliderContainer = document.querySelector('.testimonial-slider-container');
    if (!sliderContainer) return;
  
    const slider = sliderContainer.querySelector('.testimonial-slider');
    const track = slider.querySelector('.testimonial-track');
    const cards = Array.from(track.querySelectorAll('.testimonial-card'));
    const dots = Array.from(document.querySelectorAll('.slider-dot'));
    const prevBtn = sliderContainer.querySelector('.prev-btn');
    const nextBtn = sliderContainer.querySelector('.next-btn');
    
    let currentIndex = 2; // Start showing testimonials 0 and 1 (after 2 cloned items)
    let isAnimating = false;
    let autoplayInterval;
    let isMobile = window.innerWidth <= 480;
  
    function getCardWidth() {
      return cards[0] ? cards[0].offsetWidth + 20 : 300; // Include margin
    }
  
    function updateMobileStatus() {
      const wasMobile = isMobile;
      isMobile = window.innerWidth <= 480;
      
      // If mobile status changed, update dot sizes
      if (wasMobile !== isMobile) {
        updateDotSizes();
      }
      
      // Force update the slider to apply mobile-specific layout
      updateSlider();
      
      // Make sure all cards are visible on desktop
      if (!isMobile) {
        cards.forEach(card => {
          card.style.display = '';
        });
      }
    }
  
    // Add function to explicitly update dot sizes
    function updateDotSizes() {
      dots.forEach(dot => {
        if (isMobile) {
          // Force dot sizes for mobile
          dot.style.width = '4px';
          dot.style.height = '4px';
          dot.style.margin = '0 2px';
        } else {
          // For non-mobile, let CSS handle it
          dot.style.width = '';
          dot.style.height = '';
          dot.style.margin = '';
        }
      });
    }
  
    function updateSlider() {
      if (isAnimating) return;
      isAnimating = true;
      
      const cardWidth = getCardWidth();
      const totalWidth = cardWidth * cards.length;
      const containerWidth = slider.offsetWidth;
      
      // Mobile-specific behavior
      if (isMobile) {
        // Only show active card on mobile
        cards.forEach((card, index) => {
          card.classList.remove('active', 'semi-active');
          
          if (index === currentIndex) {
            card.classList.add('active');
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        });
        
        // No need for translation on mobile as we're hiding other cards
        track.style.transform = `translateX(0)`;
      } else {
        // Calculate offset to show 4 testimonials (2 fully, 2 partially)
        // We want to center the 2 middle testimonials
        const visibleCards = 4;
        const offset = currentIndex * cardWidth - (containerWidth / 2) + cardWidth;
        
        track.style.transform = `translateX(-${offset}px)`;
        
        // Update card states (highlighting the 2 center cards)
        cards.forEach((card, index) => {
          card.classList.remove('active', 'semi-active');
          card.style.display = '';
          
          if (index === currentIndex || index === currentIndex + 1) {
            card.classList.add('active');
          } else if (index === currentIndex - 1 || index === currentIndex + 2) {
            card.classList.add('semi-active');
          }
        });
      }
      
    //   // Update dots - use adjusted index for cloned items
    //   const realIndex = currentIndex - 2; // Adjust for cloned items at the beginning
    //   const normalizedIndex = ((realIndex % dots.length) + dots.length) % dots.length; // Handle negative indices
      
    //   dots.forEach((dot, index) => {
    //     dot.classList.toggle('active', index === normalizedIndex);
    //   });
      
      setTimeout(() => {
        isAnimating = false;
        
        // Handle seamless looping
        if (currentIndex >= cards.length - 3) {
          currentIndex = 2;
          track.style.transition = 'none';
          
          if (!isMobile) {
            const cardWidth = getCardWidth();
            const containerWidth = slider.offsetWidth;
            const offset = currentIndex * cardWidth - (containerWidth / 2) + cardWidth;
            track.style.transform = `translateX(-${offset}px)`;
          }
          
          setTimeout(() => {
            track.style.transition = 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
          }, 50);
          
          updateSlider(); // Force update for mobile to show correct card
        } else if (currentIndex <= 1) {
          currentIndex = cards.length - 4;
          track.style.transition = 'none';
          
          if (!isMobile) {
            const cardWidth = getCardWidth();
            const containerWidth = slider.offsetWidth;
            const offset = currentIndex * cardWidth - (containerWidth / 2) + cardWidth;
            track.style.transform = `translateX(-${offset}px)`;
          }
          
          setTimeout(() => {
            track.style.transition = 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
          }, 50);
          
          updateSlider(); // Force update for mobile to show correct card
        }
      }, 600);
    }
  
    function startAutoplay() {
      stopAutoplay();
      autoplayInterval = setInterval(() => {
        if (!isAnimating && !sliderContainer.matches(':hover')) {
          currentIndex++;
          updateSlider();
        }
      }, 4000);
    }
  
    function stopAutoplay() {
      if (autoplayInterval) {
        clearInterval(autoplayInterval);
        autoplayInterval = null;
      }
    }
  
    // Button controls
    nextBtn.addEventListener('click', () => {
      if (!isAnimating) {
        currentIndex++;
        updateSlider();
        startAutoplay(); // Restart autoplay after manual interaction
      }
    });
  
    prevBtn.addEventListener('click', () => {
      if (!isAnimating) {
        currentIndex--;
        updateSlider();
        startAutoplay(); // Restart autoplay after manual interaction
      }
    });
  
    // // Dot navigation
    // dots.forEach((dot, dotIndex) => {
    //   dot.addEventListener('click', () => {
    //     if (!isAnimating) {
    //       currentIndex = dotIndex + 2; // Adjust for cloned items
    //       updateSlider();
    //       startAutoplay(); // Restart autoplay after manual interaction
    //     }
    //   });
    // });
  
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') {
        nextBtn.click();
        e.preventDefault();
      } else if (e.key === 'ArrowLeft') {
        prevBtn.click();
        e.preventDefault();
      }
    });
  
    // Pause autoplay on hover
    sliderContainer.addEventListener('mouseenter', stopAutoplay);
    sliderContainer.addEventListener('mouseleave', startAutoplay);
  
    // Handle window resize
    let resizeTimeout;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        updateMobileStatus();
        updateDotSizes(); // Explicitly update dot sizes on resize
      }, 100);
    });
  
    // Initialize
    // updateDotSizes(); // Set initial dot sizes
    updateMobileStatus();
    startAutoplay();
  }
  