export function renderFooter() {
    const footer = document.querySelector('footer');
    if (footer) {
        footer.innerHTML = `
            <div class="footer-grid">
                <div>
                    <div class="footer-logo">
                        <svg width="40" height="40" viewBox="0 0 100 100">
                            <rect x="15" y="15" width="70" height="70" rx="10" transform="rotate(45 50 50)" fill="#00f5a0" />
                            <circle cx="50" cy="50" r="15" fill="#00f5a0" />
                            <line x1="50" y1="20" x2="50" y2="80" stroke="#1e3142" stroke-width="2" />
                            <line x1="20" y1="50" x2="80" y2="50" stroke="#1e3142" stroke-width="2" />
                            <line x1="27" y1="27" x2="73" y2="73" stroke="#1e3142" stroke-width="2" />
                            <line x1="73" y1="27" x2="27" y2="73" stroke="#1e3142" stroke-width="2" />
                        </svg>
                        <div class="footer-logo-text">Tek_init</div>
                    </div>
                    <p class="footer-about">Empowering individuals to build successful careers in cloud computing and DevOps through practical, industry-relevant education.</p>
                    <div class="social-links">
                        <a href="https://www.linkedin.com/company/106107588/admin/dashboard/" class="social-link" target="_blank">in</a>
                        <a href="#" class="social-link">f</a>
                        <a href="#" class="social-link">tw</a>
                        <a href="#" class="social-link">ig</a>
                    </div>
                </div>
                
                <div>
                    <h3 class="footer-title">Quick Links</h3>
                    <ul class="footer-links">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#courses">Courses</a></li>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#testimonials">Testimonials</a></li>
                        <li><a href="#contact">Contact Us</a></li>
                    </ul>
                </div>
                
                <div>
                    <h3 class="footer-title">Courses</h3>
                    <ul class="footer-links">
                        <li><a href="#">Cloud Computing Fundamentals</a></li>
                        <li><a href="#">DevOps Engineering</a></li>
                    </ul>
                </div>
                
                <div>
                    <h3 class="footer-title">Contact Us</h3>
                    <div class="contact-item">
                        <div>📧</div>
                        <div>info@tekinit.com</div>
                    </div>
                    <div class="contact-item">
                        <div>📱</div>
                        <div>+234 807-085-9502</div>
                    </div>
                    <div class="contact-item">
                        <div>📍</div>
                        <div>123 Tech Street, Innovation Hub, CA 94103</div>
                    </div>
                </div>
            </div>
            
            <div class="copyright">
                &copy; 2025 Tek_init. All rights reserved.
            </div>
        `;
    }
}