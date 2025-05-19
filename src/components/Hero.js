export function renderHero() {
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        heroSection.innerHTML = `
            <div class="hero-content">
                <h1>Tek_Init</h1>
                <p class="tagline">Initiate Your Tech Potential</p>
                <div class="hero-btns">
                    <button class="btn btn-primary">Explore Courses</button>
                </div>
            </div>
        `;
    }
}