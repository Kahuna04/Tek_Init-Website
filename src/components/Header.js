export function renderHeader() {
    const headerContainer = document.getElementById('header-container');
    if (headerContainer) {
        headerContainer.innerHTML = `
            <header id="header">
                <div class="logo-container">
                    <svg class="logo" viewBox="0 0 100 100">
                        <defs>
                            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stop-color="#00f5a0" />
                                <stop offset="100%" stop-color="#00aeff" />
                            </linearGradient>
                        </defs>
                        <rect x="15" y="15" width="70" height="70" rx="10" transform="rotate(45 50 50)" fill="url(#logoGradient)" />
                        <circle cx="50" cy="50" r="15" fill="url(#logoGradient)" />
                        <line x1="50" y1="20" x2="50" y2="80" stroke="#1e3142" stroke-width="2" />
                        <line x1="20" y1="50" x2="80" y2="50" stroke="#1e3142" stroke-width="2" />
                        <line x1="27" y1="27" x2="73" y2="73" stroke="#1e3142" stroke-width="2" />
                        <line x1="73" y1="27" x2="27" y2="73" stroke="#1e3142" stroke-width="2" />
                    </svg>
                    <div class="logo-text">Tek<span class="logo-highlight">_Init</span></div>
                </div>
                
                <div class="menu-toggle" id="menuToggle" aria-label="Toggle navigation menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                
                <nav id="nav">
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="#courses">Courses</a></li>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#testimonials">Testimonials</a></li>
                        <li class="cta-button"><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </header>
            <div id="overlay" class="overlay"></div>
        `;
        
        // Get references to DOM elements
        const menuToggle = document.getElementById('menuToggle');
        const nav = document.getElementById('nav');
        const header = document.getElementById('header');
        const overlay = document.getElementById('overlay');
        
        // Menu toggle functionality
        if (menuToggle && nav && overlay) {
            // Close menu function
            function closeMenu() {
                nav.classList.remove('active');
                menuToggle.classList.remove('active');
                overlay.classList.remove('active');
                document.body.classList.remove('menu-open');
                console.log('Menu closed');
            }
            
            // Toggle menu
            menuToggle.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                nav.classList.toggle('active');
                menuToggle.classList.toggle('active');
                overlay.classList.toggle('active');
                document.body.classList.toggle('menu-open');
                
                // Debug logging
                console.log('Menu toggle clicked');
                console.log('Nav active:', nav.classList.contains('active'));
                console.log('Nav element:', nav);
            });
            
            // Close mobile menu when clicking a navigation link
            const navLinks = document.querySelectorAll('nav a');
            navLinks.forEach(link => {
                link.addEventListener('click', function() {
                    if (window.innerWidth <= 768) {
                        closeMenu();
                    }
                });
            });
            
            // Close menu when clicking on overlay
            overlay.addEventListener('click', closeMenu);
            
            // Add resize handler to reset menu state on window resize
            window.addEventListener('resize', function() {
                if (window.innerWidth > 768 && nav.classList.contains('active')) {
                    closeMenu();
                }
            });
        } else {
            console.error('One or more header elements not found:', {
                menuToggle: !!menuToggle,
                nav: !!nav,
                overlay: !!overlay
            });
        }
        
        // Scroll event for header behavior
        if (header) {
            window.addEventListener('scroll', function() {
                if (window.scrollY > 100) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            });
        }
    }
}