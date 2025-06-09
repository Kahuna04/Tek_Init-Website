const coursesData = [
    {
      id: 'cloud-computing',
      title: 'Cloud Computing',
      description: 'Master the basics of cloud technologies "AWS" with hands-on projects.',
      icon: '☁️',
      duration: '8 weeks',
      students: '50+',
      technologies: ['AWS'],
      price: '₦150,000'
    },
    {
      id: 'devops-engineering',
      title: 'DevOps Engineering',
      description: 'Learn to streamline development processes with CI/CD, containers, and orchestration tools like Kubernetes.',
      icon: '🔄',
      duration: '10 weeks',
      students: '80+',
      technologies: ['Jenkins', 'GitHub Actions', 'Docker', 'Kubernetes', 'IaC'],
      price: '₦250,000'
    }
  ];
  
  export function renderCourses() {
    const coursesSection = document.getElementById('courses');
    if (!coursesSection) return;
    
    // Generate course card HTML
    const generateCourseCard = (course) => `
      <div class="course-card" data-course-id="${course.id}">
        <div class="course-img">
          <div class="course-icon">${course.icon}</div>
          <div class="course-overlay">
            <button class="preview-btn">Preview Course</button>
          </div>
        </div>
        <div class="course-content">
          <h3 class="course-title">${course.title}</h3>
          <p class="course-desc">${course.description}</p>
          
          <div class="course-stats">
            <div class="stat-item">
              <span class="stat-icon">⏱️</span>
              <span class="stat-text">${course.duration}</span>
            </div>
            <div class="stat-item">
              <span class="stat-icon">👥</span>
              <span class="stat-text">${course.students} students</span>
            </div>
          </div>
          
          <div class="technologies">
            ${course.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
          </div>
          
          <div class="course-footer">
            <div class="course-price">${course.price}</div>
            <button class="enroll-btn" data-course-id="${course.id}">Enroll Now</button>
          </div>
        </div>
      </div>
    `;
    
    // Render the complete courses section
    coursesSection.innerHTML = `
      <h2 class="section-title">Our Courses</h2>
      <p class="section-subtitle">Launch your career in tech with our comprehensive courses designed for in-demand skills.</p>
      
      <div class="courses-grid">
        ${coursesData.map(course => generateCourseCard(course)).join('')}
      </div>
    `;
    
    // Add event listeners
    addCourseEventListeners();
  }
  
  function addCourseEventListeners() {
    // Enroll buttons - redirect to course detail page
    document.querySelectorAll('.enroll-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const courseId = e.target.dataset.courseId;
        window.location.href = `${courseId}.html`;
      });
    });
  
    // Course card click handler
    document.querySelectorAll('.course-card').forEach(card => {
      card.addEventListener('click', (e) => {
        if (!e.target.classList.contains('enroll-btn') && 
            !e.target.classList.contains('preview-btn')) {
          const courseId = card.dataset.courseId;
          window.location.href = `${courseId}.html`;
        }
      });
    });
  }
    
    // Course card hover effects
    document.querySelectorAll('.course-card').forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
      });
      
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
      });
      
      // Click on card to go to detail page
      card.addEventListener('click', (e) => {
        // Don't navigate if clicking on a button inside the card
        if (!e.target.classList.contains('enroll-btn') && 
            !e.target.classList.contains('preview-btn')) {
          const courseId = card.dataset.courseId;
          window.location.href = `${courseId}.html`;
        }
      });
    });