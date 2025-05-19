export function renderCourses() {
    const coursesSection = document.getElementById('courses');
    if (coursesSection) {
        coursesSection.innerHTML = `
            <h2 class="section-title">Our Courses</h2>
            <p class="section-subtitle">Launch your career in tech with our comprehensive courses designed for in-demand skills.</p>
            
            <div class="courses-grid">
                <div class="course-card">
                    <div class="course-img">
                        <div class="course-icon">☁️</div>
                    </div>
                    <div class="course-content">
                        <h3 class="course-title">Cloud Computing Fundamentals</h3>
                        <p class="course-desc">Master the basics of cloud technologies including AWS, Azure, and Google Cloud Platform.</p>
                        <button class="btn btn-primary">Learn More</button>
                    </div>
                </div>
                
                <div class="course-card">
                    <div class="course-img">
                        <div class="course-icon">🔄</div>
                    </div>
                    <div class="course-content">
                        <h3 class="course-title">DevOps Engineering</h3>
                        <p class="course-desc">Learn to streamline development processes with CI/CD, containers, and orchestration tools.</p>
                        <button class="btn btn-primary">Learn More</button>
                    </div>
                </div>
            </div>
        `;
    }
}