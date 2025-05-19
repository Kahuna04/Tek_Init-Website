export function renderTestimonials() {
    const testimonialsSection = document.getElementById('testimonials');
    if (testimonialsSection) {
        testimonialsSection.innerHTML = `
            <h2 class="section-title">Student Success Stories</h2>
            <p class="section-subtitle">Hear from our graduates who have successfully transitioned into tech careers.</p>
            
            <div class="testimonial-wrapper">
                <div class="testimonial-card">
                    <p class="testimonial-text">"The DevOps course at Tek_init completely changed my career trajectory. Within three months of completing the program, I landed a junior DevOps role at a startup with a 40% salary increase."</p>
                    <div class="testimonial-author">
                        <div class="testimonial-avatar">JD</div>
                        <div class="author-info">
                            <h4>James Doe</h4>
                            <p class="author-title">DevOps Engineer</p>
                        </div>
                    </div>
                </div>
                
                <div class="testimonial-card">
                    <p class="testimonial-text">"As someone with no prior tech background, I was amazed at how approachable the Cloud Computing course was. The instructors broke down complex concepts and provided abundant support throughout."</p>
                    <div class="testimonial-author">
                        <div class="testimonial-avatar">SC</div>
                        <div class="author-info">
                            <h4>Sarah Chen</h4>
                            <p class="author-title">Cloud Solutions Architect</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}