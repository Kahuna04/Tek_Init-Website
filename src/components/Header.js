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
                    <div class="logo-text">Tek<span class="logo-highlight">_init</span></div>
                </div>
                
                <div class="menu-toggle" id="menuToggle" aria-label="Toggle navigation menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                
                <nav id="nav">
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#courses">Courses</a></li>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#testimonials">Testimonials</a></li>
                        <li class="cta-button"><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </header>
        `;
        
        // Get references to DOM elements
        const menuToggle = document.getElementById('menuToggle');
        const nav = document.getElementById('nav');
        const header = document.getElementById('header');
        
        // Add additional styles to ensure mobile menu works
        const style = document.createElement('style');
        style.textContent = `
            body.menu-open {
                overflow: hidden;
            }
            
            @media (max-width: 768px) {
                nav#nav {
                    position: fixed;
                    top: 0;
                    right: 0;
                    width: 80%;
                    max-width: 320px; 
                    height: 100vh;
                    background-color: var(--dark, #1e3142);
                    transform: translateX(100%);
                    transition: transform 0.5s cubic-bezier(0.65, 0, 0.35, 1);
                    z-index: 100;
                    padding: 6rem 2rem 2rem;
                    box-shadow: -5px 0 20px rgba(0, 0, 0, 0.2);
                    overflow-y: auto;
                }
                
                nav#nav.active {
                    transform: translateX(0);
                }
                
                .overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: rgba(0, 0, 0, 0.5);
                    z-index: 90;
                    opacity: 0;
                    visibility: hidden;
                    transition: opacity 0.3s ease;
                }
                
                .overlay.active {
                    opacity: 1;
                    visibility: visible;
                }
                
                nav#nav ul {
                    flex-direction: column;
                    gap: 1.5rem;
                    text-align: center;
                    width: 100%;
                }
            }
        `;
        document.head.appendChild(style);
        
        // Create overlay for mobile menu
        const overlay = document.createElement('div');
        overlay.className = 'overlay';
        document.body.appendChild(overlay);
        
        // Menu toggle functionality
        if (menuToggle && nav) {
            menuToggle.addEventListener('click', function() {
                nav.classList.toggle('active');
                menuToggle.classList.toggle('active');
                overlay.classList.toggle('active');
                document.body.classList.toggle('menu-open');
                
                // Debug logging
                console.log('Menu toggle clicked');
                console.log('Nav active:', nav.classList.contains('active'));
            });
        }
        
        // Scroll event for header behavior
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
        
        // Close menu functions
        function closeMenu() {
            nav.classList.remove('active');
            menuToggle.classList.remove('active');
            overlay.classList.remove('active');
            document.body.classList.remove('menu-open');
        }
        
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
    }
}