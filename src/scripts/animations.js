export function initAnimations() {
    // Header scroll effect
    window.addEventListener('scroll', function() {
        const header = document.getElementById('header');
        if (header) {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }
    });
    
    // Course card hover effect
    const courseCards = document.querySelectorAll('.course-card');
    courseCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.03)';
            this.style.boxShadow = '0 20px 30px rgba(0, 0, 0, 0.15)';
            
            const icon = this.querySelector('.course-icon');
            if (icon) {
                icon.style.transition = 'all 0.3s ease';
                icon.style.transform = 'scale(1.2)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.05)';
            
            const icon = this.querySelector('.course-icon');
            if (icon) {
                icon.style.transform = 'scale(1)';
            }
        });
    });
    
    // Button effects
    const primaryBtns = document.querySelectorAll('.btn-primary');
    primaryBtns.forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.style.animation = 'pulse 1s infinite';
            this.style.boxShadow = '0 0 0 0 rgba(0, 245, 160, 0.7)';
        });
        
        btn.addEventListener('mouseleave', function() {
            this.style.animation = 'none';
            this.style.boxShadow = 'none';
        });
    });
    
    // Logo rotation
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.addEventListener('click', function() {
            this.style.transition = 'transform 0.5s ease';
            this.style.transform = 'rotate(360deg)';
            
            setTimeout(() => {
                this.style.transform = 'rotate(0deg)';
            }, 500);
        });
    }
    
    // Add pulse animation
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes pulse {
            0% {
                box-shadow: 0 0 0 0 rgba(0, 245, 160, 0.7);
            }
            70% {
                box-shadow: 0 0 0 10px rgba(0, 245, 160, 0);
            }
            100% {
                box-shadow: 0 0 0 0 rgba(0, 245, 160, 0);
            }
        }
    `;
    document.head.appendChild(style);
}