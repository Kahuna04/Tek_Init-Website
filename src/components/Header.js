export function renderHeader() {
    const headerContainer = document.getElementById('header-container');
    if (headerContainer) {
        headerContainer.innerHTML = `
            <header id="header">
                <div class="logo-container">
                    <svg class="logo" viewBox="0 0 100 100">
                        <rect x="15" y="15" width="70" height="70" rx="10" transform="rotate(45 50 50)" fill="#00f5a0" />
                        <circle cx="50" cy="50" r="15" fill="#00f5a0" />
                        <line x1="50" y1="20" x2="50" y2="80" stroke="#1e3142" stroke-width="2" />
                        <line x1="20" y1="50" x2="80" y2="50" stroke="#1e3142" stroke-width="2" />
                        <line x1="27" y1="27" x2="73" y2="73" stroke="#1e3142" stroke-width="2" />
                        <line x1="73" y1="27" x2="27" y2="73" stroke="#1e3142" stroke-width="2" />
                    </svg>
                    <div class="logo-text">Tek_init</div>
                </div>
                
                <div class="menu-toggle" id="menuToggle">
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
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </header>
        `;
    }
}