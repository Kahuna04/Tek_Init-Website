const coursesData = [
    {
      id: 'cloud-computing',
      title: 'Cloud Computing Fundamentals',
      description: 'Master the basics of cloud technologies including AWS, Azure, and Google Cloud Platform with hands-on projects.',
      icon: '☁️',
      duration: '8 weeks',
      students: '50+',
      technologies: ['AWS', 'Azure', 'Docker'],
      price: '$199'
    },
    {
      id: 'devops-engineering',
      title: 'DevOps Engineering',
      description: 'Learn to streamline development processes with CI/CD, containers, and orchestration tools like Kubernetes.',
      icon: '🔄',
      duration: '10 weeks',
      students: '80+',
      technologies: ['Jenkins', 'GitHub Actions', 'Docker', 'Kubernetes', 'Terraform'],
      price: '$299'
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
            <button class="btn btn-primary enroll-btn" data-course-id="${course.id}">
              Learn More
            </button>
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
  
  // Event listeners for interactive elements
  function addCourseEventListeners() {
    // Learn More buttons
    document.querySelectorAll('.enroll-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const courseId = e.target.dataset.courseId;
        handleEnrollment(courseId);
      });
    });
  
  
    // Course card hover effects
    document.querySelectorAll('.course-card').forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
      });
      
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
      });
    });
  }
  
  // Helper functions for interactivity
  function handleEnrollment(courseId) {
    const course = coursesData.find(c => c.id === courseId);
    if (course) {
      console.log(`Learn more about: ${course.title}`);
      // In a real app, this would redirect to course details page
      alert(`Redirecting to more details about ${course.title}...`);
    }
  }
  
  