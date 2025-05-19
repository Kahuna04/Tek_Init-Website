export function renderAbout() {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
        aboutSection.innerHTML = `
            <h2 class="section-title">Why Choose Tek_init</h2>
            <p class="section-subtitle">We're committed to helping you build practical skills that lead to real career opportunities.</p>
            
            <div class="about-grid">
                <div class="feature-card">
                    <div class="feature-icon">👨‍💻</div>
                    <h3 class="feature-title">Industry Experts</h3>
                    <p class="feature-desc">Learn from professionals with years of experience in leading tech companies.</p>
                </div>
                
                <div class="feature-card">
                    <div class="feature-icon">📝</div>
                    <h3 class="feature-title">Hands-on Projects</h3>
                    <p class="feature-desc">Build real-world applications that demonstrate your skills to employers.</p>
                </div>
                
                <div class="feature-card">
                    <div class="feature-icon">🌐</div>
                    <h3 class="feature-title">Career Support</h3>
                    <p class="feature-desc">Get guidance on job applications, interviews, and connecting with our industry partners.</p>
                </div>
            </div>
        `;
    }
}