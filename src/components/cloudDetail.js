const courseData = {
  id: 'cloud-computing',
  title: 'AWS Cloud Computing Training Fundamentals',
  subtitle: 'Master AWS training with hands-on cloud computing platform projects',
  description: 'This comprehensive AWS training course takes you from cloud computing fundamentals to deploying scalable cloud infrastructure on major cloud computing platforms. Gain practical experience with real-world projects and earn a cloud computing certification upon completion.',
  icon: '☁️',
  price: '₦150,000',
  students: '50+',
  duration: '8 Weeks',
  learnItems: [
    'Cloud computing fundamentals and AWS training essentials',
    'Deploying scalable cloud infrastructure on AWS platform',
    'Cloud security best practices and compliance frameworks',
    'Containerization with Docker and cloud native technologies',
    'Serverless computing and microservices architecture',
    'Cloud migration strategies and cost optimization'
  ],
  features: [
    {
      title: 'Week 1-2: Cloud Fundamentals',
      items: [
        'Introduction to cloud computing models (IaaS, PaaS, SaaS)',
        'Virtualization technologies and concepts',
        'Cloud service providers overview and comparison'
      ]
    },
    {
      title: 'Week 3-6: AWS Core Services',
      items: [
        'EC2 instances and auto-scaling groups',
        'S3 storage solutions and data management',
        'VPC networking and security groups'
      ]
    },
    {
      title: 'Week 7-8: Final Project',
      items: [
        'Capstone project: Multi-cloud deployment'
      ]
    }
  ]
};

export function renderCloudDetail() {
  const cloudDetail = document.getElementById('cloudDetail');
  if (cloudDetail) {
    cloudDetail.innerHTML = `
      <div class="course-detail-container">
        <div class="course-hero">
          <div class="course-hero-content">
            <h1 class="course-hero-title">${courseData.title}</h1>
            <p class="course-hero-subtitle">${courseData.subtitle}</p>
            
            <div class="course-hero-stats">
              <div class="stat-item">
                <span class="stat-icon">👥</span>
                <span>${courseData.students} Students</span>
              </div>
              <div class="stat-item">
                <span class="stat-icon">⏱️</span>
                <span>${courseData.duration}</span>
              </div>
              <div class="stat-item">
                <span class="stat-icon">🏆</span>
                <span>Certificate</span>
              </div>
            </div>
            
            <div class="course-hero-price">
              ${courseData.price}
            </div>
            
            <button class="enroll-btn-hero">
              <span>🚀</span>
              Enroll Now
            </button>
          </div>
          <div class="course-hero-image">
            <div class="course-icon-large">${courseData.icon}</div>
          </div>
        </div>
        
        <div class="section course-overview">
          <h2 class="section-title">Course Overview</h2>
          <div class="course-overview-content">
            <p>${courseData.description}</p>
            
            <div class="course-highlights">
              <div class="highlight-card">
                <div class="highlight-icon">🎓</div>
                <h3>Certificate</h3>
                <p>Earn a verifiable certificate upon completion that showcases your cloud computing expertise</p>
              </div>
              <div class="highlight-card">
                <div class="highlight-icon">🛠️</div>
                <h3>Hands-on</h3>
                <p>Practical projects using real cloud services with industry-standard tools and practices</p>
              </div>
              <div class="highlight-card">
                <div class="highlight-icon">👨‍🏫</div>
                <h3>Expert Support</h3>
                <p>Access to experienced instructors and a supportive learning community</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="section course-learn">
          <h2 class="section-title">What You'll Master</h2>
          <div class="learn-grid">
            ${courseData.learnItems.map(item => `
              <div class="learn-item">
                <div class="learn-icon">✅</div>
                <p>${item}</p>
              </div>
            `).join('')}
          </div>
        </div>
        
        <div class="section course-features">
          <h2 class="section-title">Course Journey</h2>
          <div class="features-timeline">
            ${courseData.features.map((feature, index) => `
              <div class="timeline-item">
                <div class="timeline-marker"></div>
                <div class="timeline-content">
                  <h3>${feature.title}</h3>
                  <ul>
                    ${feature.items.map(item => `<li>${item}</li>`).join('')}
                  </ul>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
        
        <div class="course-cta">
          <div class="cta-content">
            <h2 class="cta-title">Ready to Launch Your Cloud Computing Career?</h2>
            <p class="cta-subtitle">Join ${courseData.students} students who have transformed their careers with hands-on AWS training and cloud computing platform expertise</p>
            <button class="enroll-btn-cta">
              <span>🎯</span>
              Start AWS Training Today
            </button>
          </div>
        </div>
      </div>
    `;

    initCourseDetail();
  }
}

function initCourseDetail() {
// Initialize animations
initAnimations();

// Add event listeners for enroll buttons
document.querySelectorAll('.enroll-btn-hero, .enroll-btn-cta').forEach(btn => {
  btn.addEventListener('click', function() {
    // Add loading state
    const originalText = this.innerHTML;
    this.innerHTML = '<span>⏳</span> Loading...';
    this.disabled = true;
    
    // Simulate loading and redirect
    setTimeout(() => {
      // Replace with your Google Form link
      window.location.href = 'https://docs.google.com/forms/d/1GvgYwevBcCkmpYlSZtc0Ay1FUdmFw4txSUK9D60Ch30/edit';
    }, 1000);
  });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Add intersection observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animationPlayState = 'running';
    }
  });
}, observerOptions);

document.querySelectorAll('.timeline-item').forEach(item => {
  observer.observe(item);
});

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  const hero = document.querySelector('.course-hero');
  if (hero) {
    hero.style.transform = `translateY(${scrolled * 0.1}px)`;
  }
});
}

function initAnimations() {
// Add stagger delay to timeline items
const timelineItems = document.querySelectorAll('.timeline-item');
timelineItems.forEach((item, index) => {
  item.style.animationDelay = `${index * 0.2}s`;
});

// Add hover effects to learn items
const learnItems = document.querySelectorAll('.learn-item');
learnItems.forEach(item => {
  item.addEventListener('mouseenter', function() {
    this.style.transform = 'translateX(15px) scale(1.02)';
  });
  
  item.addEventListener('mouseleave', function() {
    this.style.transform = 'translateX(0) scale(1)';
  });
});
}