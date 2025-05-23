export function renderFooter() {
    const footer = document.querySelector('footer');
    if (footer) {
        footer.innerHTML = `
            <div class="footer-grid">
                <div class="footer-info">
                    <div class="footer-logo">
                        <svg width="40" height="40" viewBox="0 0 100 100">
                            <defs>
                                <linearGradient id="footerLogoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stop-color="#00f5a0" />
                                    <stop offset="100%" stop-color="#00aeff" />
                                </linearGradient>
                            </defs>https://docs.google.com/forms/d/e/1FAIpQLSdPFvvQuNdexpSU8K2v4j9KBB55bmYc6MTINGCj4u4vqaR_Jw/viewform?usp=sharing&ouid=107521154396122676672
                            <rect x="15" y="15" width="70" height="70" rx="10" transform="rotate(45 50 50)" fill="url(#footerLogoGradient)" />
                            <circle cx="50" cy="50" r="15" fill="url(#footerLogoGradient)" />
                            <line x1="50" y1="20" x2="50" y2="80" stroke="#1e3142" stroke-width="2" />
                            <line x1="20" y1="50" x2="80" y2="50" stroke="#1e3142" stroke-width="2" />
                            <line x1="27" y1="27" x2="73" y2="73" stroke="#1e3142" stroke-width="2" />
                            <line x1="73" y1="27" x2="27" y2="73" stroke="#1e3142" stroke-width="2" />
                        </svg>
                        <div class="footer-logo-text">Tek<span class="footer-logo-highlight">_init</span></div>
                    </div>
                    <p class="footer-about">Empowering individuals to build successful careers in cloud computing and DevOps through practical, industry-relevant education.</p>
                    <div class="social-links">
                        <a href="https://www.linkedin.com/company/106107588/admin/dashboard/" class="social-link" target="_blank" aria-label="LinkedIn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                            </svg>
                        </a>
                        <a href="#" class="social-link" aria-label="Facebook">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 7h-1.924c-.615 0-1.076.252-1.076.889v1.111h3l-.238 3h-2.762v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z"/>
                            </svg>
                        </a>
                        <a href="#" class="social-link" aria-label="Twitter">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-.139 9.237c.209 4.617-3.234 9.765-9.33 9.765-1.854 0-3.579-.543-5.032-1.475 1.742.205 3.48-.278 4.86-1.359-1.437-.027-2.649-.976-3.066-2.28.515.098 1.021.069 1.482-.056-1.579-.317-2.668-1.739-2.633-3.26.442.246.949.394 1.486.411-1.461-.977-1.875-2.907-1.016-4.383 1.619 1.986 4.038 3.293 6.766 3.43-.479-2.053 1.08-4.03 3.199-4.03.943 0 1.797.398 2.395 1.037.748-.147 1.451-.42 2.086-.796-.246.767-.766 1.41-1.443 1.816.664-.08 1.297-.256 1.885-.517-.439.656-.996 1.234-1.639 1.697z"/>
                            </svg>
                        </a>
                        <a href="#" class="social-link" aria-label="Instagram">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                            </svg>
                        </a>
                    </div>
                </div>
                
                <div class="footer-links-section">
                    <h3 class="footer-title">Quick Links</h3>
                    <ul class="footer-links">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="#courses">Courses</a></li>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#testimonials">Testimonials</a></li>
                        <li><a href="#contact">Contact Us</a></li>
                    </ul>
                </div>
                
                <div class="footer-links-section">
                    <h3 class="footer-title">Our Courses</h3>
                    <ul class="footer-links">
                        <li><a href="cloud-computing.html">Cloud Computing Fundamentals</a></li>
                        <li><a href="devops-engineering.html">DevOps Engineering</a></li>
                    </ul>
                </div>
                
                <div class="footer-contact">
                    <h3 class="footer-title">Contact Us</h3>
                    <div class="contact-item">
                        <div class="contact-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/>
                            </svg>
                        </div>
                        <div><a href="mailto:info@tekinit.com">info@tekinit.com</a></div>
                    </div>
                    <div class="contact-item">
                        <div class="contact-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z"/>
                            </svg>
                        </div>
                        <div><a href="tel:+2348070859502">+234 807-085-9502</a></div>
                    </div>
                    <div class="contact-item">
                        <div class="contact-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/>
                            </svg>
                        </div>
                        <div>Lagos, Nigeria</div>
                    </div>
                </div>
            </div>
            
            <div class="copyright">
                <div>&copy; 2025 Tek_init. All rights reserved.</div>
            </div>
        `;
    }
}