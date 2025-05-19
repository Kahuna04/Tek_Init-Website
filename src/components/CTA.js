export function renderCTA() {
    const ctaSection = document.getElementById('contact');
    if (ctaSection) {
        ctaSection.innerHTML = `
            <h2 class="section-title">Ready to Initiate Your Tech Potential?</h2>
            <p class="section-subtitle">Take the first step toward your tech career today.</p>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdPFvvQuNdexpSU8K2v4j9KBB55bmYc6MTINGCj4u4vqaR_Jw/viewform?usp=sharing&ouid=107521154396122676672" 
               class="cta-btn" 
               target="_blank" 
               rel="noopener noreferrer">
                Enroll Now
            </a>
        `;
    }
}