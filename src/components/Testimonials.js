// Testimonial data
const testimonials = [
    {
        quote: "The DevOps course at Tek_init completely changed my career trajectory. Within three months, I landed a junior DevOps role with a 40% salary increase.",
        name: "James Doe",
        title: "DevOps Engineer",
        initials: "JD"
    },
    {
        quote: "As someone with no prior tech background, I was amazed at how approachable the Cloud Computing course was. The instructors made complex concepts easy to understand.",
        name: "Sarah Chen",
        title: "Cloud Architect",
        initials: "SC"
    },
    {
        quote: "The hands-on projects gave me real confidence. I built a complete CI/CD pipeline that became a talking point in all my interviews.",
        name: "Michael Johnson",
        title: "SRE Engineer",
        initials: "MJ"
    },
    {
        quote: "Tek_init's career support helped me negotiate a 25% higher offer. The mock interviews were incredibly valuable preparation.",
        name: "Aisha Williams",
        title: "Cloud Engineer",
        initials: "AW"
    },
    {
        quote: "The infrastructure projects were incredibly practical. I could immediately apply what I learned to real-world scenarios.",
        name: "David Park",
        title: "Infrastructure Engineer",
        initials: "DP"
    },
    {
        quote: "The mentorship program was outstanding. Having a senior engineer guide me through my learning journey made all the difference.",
        name: "Rachel Martinez",
        title: "Platform Engineer",
        initials: "RM"
    }
];

export function renderTestimonials() {
    const testimonialsSection = document.getElementById('testimonials');
    if (testimonialsSection) {
        testimonialsSection.innerHTML = `
            <h2 class="section-title">Student Success Stories</h2>
            <p class="section-subtitle">Hear from our graduates who have successfully transitioned into tech careers.</p>
            <div class="testimonial-slider-container">
                <button class="slider-btn prev-btn" aria-label="Previous">❮</button>
                <div class="testimonial-slider">
                    <div class="testimonial-track">
                        <!-- Cards will be injected here -->
                    </div>
                </div>
                <button class="slider-btn next-btn" aria-label="Next">❯</button>
            </div>
            <div class="slider-dots"></div>
        `;

        const track = testimonialsSection.querySelector('.testimonial-track');
        const dotsContainer = testimonialsSection.querySelector('.slider-dots');
        
        // Create extended testimonials array for seamless looping
        const extendedTestimonials = [
            testimonials[testimonials.length - 2],
            testimonials[testimonials.length - 1],
            ...testimonials,
            testimonials[0],
            testimonials[1]
        ];

        // Create testimonial cards
        extendedTestimonials.forEach((testimonial, index) => {
            const card = document.createElement('div');
            card.className = 'testimonial-card';
            card.innerHTML = `
                <p class="testimonial-text">"${testimonial.quote}"</p>
                <div class="testimonial-author">
                    <div class="testimonial-avatar">${testimonial.initials}</div>
                    <div class="author-info">
                        <h4>${testimonial.name}</h4>
                        <p class="author-title">${testimonial.title}</p>
                    </div>
                </div>
            `;
            track.appendChild(card);
        });

        // Create dots (only for original testimonials)
        testimonials.forEach((_, index) => {
            const dot = document.createElement('button');
            dot.className = `slider-dot ${index === 0 ? 'active' : ''}`;
            dot.setAttribute('data-index', index);
            dotsContainer.appendChild(dot);
        });
    }
}