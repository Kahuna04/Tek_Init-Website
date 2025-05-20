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

    function getCardWidth() {
        return cards[0] ? cards[0].offsetWidth + 20 : 300; // Include margin
    }

    function updateSlider() {
        if (isAnimating) return;
        isAnimating = true;
        
        const cardWidth = getCardWidth();
        const totalWidth = cardWidth * cards.length;
        const containerWidth = slider.offsetWidth;
        
        // Calculate offset to show 4 testimonials (2 fully, 2 partially)
        // We want to center the 2 middle testimonials
        const visibleCards = 4;
        const offset = currentIndex * cardWidth - (containerWidth / 2) + cardWidth;
        
        track.style.transform = `translateX(-${offset}px)`;
        
        // Update card states (highlighting the 2 center cards)
        cards.forEach((card, index) => {
            card.classList.remove('active', 'semi-active');
            
            if (index === currentIndex || index === currentIndex + 1) {
                card.classList.add('active');
            } else if (index === currentIndex - 1 || index === currentIndex + 2) {
                card.classList.add('semi-active');
            }
        });
        
        // Update dots
        const realIndex = currentIndex - 2; // Adjust for cloned items at the beginning
        const dotIndex = Math.max(0, Math.min(dots.length - 1, realIndex));
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === dotIndex);
        });
        
        setTimeout(() => {
            isAnimating = false;
            
            // Handle seamless looping
            if (currentIndex >= cards.length - 3) {
                currentIndex = 2;
                track.style.transition = 'none';
                const cardWidth = getCardWidth();
                const containerWidth = slider.offsetWidth;
                const offset = currentIndex * cardWidth - (containerWidth / 2) + cardWidth;
                track.style.transform = `translateX(-${offset}px)`;
                setTimeout(() => {
                    track.style.transition = 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
                }, 50);
            } else if (currentIndex <= 1) {
                currentIndex = cards.length - 4;
                track.style.transition = 'none';
                const cardWidth = getCardWidth();
                const containerWidth = slider.offsetWidth;
                const offset = currentIndex * cardWidth - (containerWidth / 2) + cardWidth;
                track.style.transform = `translateX(-${offset}px)`;
                setTimeout(() => {
                    track.style.transition = 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
                }, 50);
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

    // Dot navigation
    dots.forEach((dot, dotIndex) => {
        dot.addEventListener('click', () => {
            if (!isAnimating) {
                currentIndex = dotIndex + 2; // Adjust for cloned items
                updateSlider();
                startAutoplay(); // Restart autoplay after manual interaction
            }
        });
    });

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
        resizeTimeout = setTimeout(updateSlider, 100);
    });

    // Initialize
    updateSlider();
    startAutoplay();
}