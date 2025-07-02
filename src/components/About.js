export function renderAbout() {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
        aboutSection.innerHTML = `
            <div class="about-content">
                <h2 class="section-title">Why Choose Tek_Init</h2>
                <p class="section-subtitle">We're committed to helping you build practical cloud native technologies and DevOps engineer skills that lead to real career opportunities in the ever-evolving tech landscape.</p>
                
                <div class="about-grid">
                    <div class="feature-card" data-aos="fade-up" data-aos-delay="100">
                        <div class="feature-icon-wrapper">
                            <div class="feature-icon">👨‍💻</div>
                        </div>
                        <h3 class="feature-title">Industry Experts</h3>
                        <p class="feature-desc"><p class="feature-desc">Learn AWS training and DevOps Methodology from professionals with years of experience in leading tech companies</p>
                    </div>
                    
                    <div class="feature-card" data-aos="fade-up" data-aos-delay="200">
                        <div class="feature-icon-wrapper">
                            <div class="feature-icon">🛠️</div>
                        </div>
                        <h3 class="feature-title">Hands-on Projects</h3>
                        <p class="feature-desc">Build real-world cloud computing platform applications and scalable cloud infrastructure that demonstrate your skills to employers with portfolio-ready projects.</p>
                    </div>
                    
                    <div class="feature-card" data-aos="fade-up" data-aos-delay="300">
                        <div class="feature-icon-wrapper">
                            <div class="feature-icon">🚀</div>
                        </div>
                        <h3 class="feature-title">Career Support</h3>
                        <p class="feature-desc">Get personalized guidance on job applications, technical interviews, and connecting with our extensive industry partner network.</p>
                    </div>
                    
                    <div class="feature-card" data-aos="fade-up" data-aos-delay="400">
                        <div class="feature-icon-wrapper">
                            <div class="feature-icon">🎯</div>
                        </div>
                        <h3 class="feature-title">Flexible Learning</h3>
                        <p class="feature-desc">Choose from self-paced online courses, live virtual sessions, or hybrid learning paths that fit your schedule and learning style.</p>
                    </div>
                </div>
            </div>
        `;
        
        // Initialize animations when cards come into view
        initAboutAnimations();
    }
}

function initAboutAnimations() {
    const cards = document.querySelectorAll('.feature-card');
    const ctaSection = document.querySelector('.about-cta');
    
    // Create intersection observer for animation
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe all cards and CTA
    cards.forEach(card => observer.observe(card));
    if (ctaSection) observer.observe(ctaSection);
    
    // Add hover effects for stats
    cards.forEach(card => {
        const stats = card.querySelector('.feature-stats');
        if (stats) {
            card.addEventListener('mouseenter', () => {
                stats.classList.add('stats-hover');
            });
            card.addEventListener('mouseleave', () => {
                stats.classList.remove('stats-hover');
            });
        }
    });
    
    // CTA button interaction
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', () => {
            // Add your navigation logic here
            // For example: window.location.href = '#courses';
            console.log('Navigate to courses or enrollment');
        });
    }
}