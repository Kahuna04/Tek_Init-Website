export function renderCTA() {
    const ctaSection = document.getElementById('contact');
    if (ctaSection) {
        ctaSection.innerHTML = `
            <h2 class="section-title">Ready to Initiate Your Tech Potential?</h2>
            <p class="section-subtitle">Take the first step toward your tech career today.</p>
            <a href="#courses" 
               class="cta-btn" 
               target="_blank" 
               rel="noopener noreferrer">
                Enroll Now
            </a>
        `;
    }
}