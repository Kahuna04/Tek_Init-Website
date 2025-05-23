const courseData = {
    id: 'devops-engineering',
    title: 'DevOps Engineering Mastery',
    subtitle: 'Master CI/CD, Infrastructure as Code, and Cloud-Native Operations',
    description: 'Transform your career with comprehensive DevOps training. Learn industry-standard tools like Docker, Kubernetes, Jenkins, Terraform, and AWS. Build automated pipelines, manage infrastructure at scale, and implement best practices used by top tech companies.',
    icon: '⚙️',
    price: '₦250,000',
    students: '75+',
    duration: '10 Weeks',
    learnItems: [
      'Complete CI/CD pipeline design and implementation',
      'Infrastructure as Code with Terraform and Ansible',
      'Container orchestration with Docker and Kubernetes',
      'Cloud platform automation (AWS, Azure, GCP)',
      'Monitoring, logging, and observability solutions',
      'Security integration and DevSecOps practices',
      'Site reliability engineering (SRE) principles',
      'GitOps workflows and version control strategies'
    ],
    features: [
      {
        title: 'Week 1-2: DevOps Foundations & Version Control',
        items: [
          'DevOps culture, principles, and methodology overview',
          'Advanced Git workflows and branching strategies',
          'GitHub/GitLab collaboration and code review processes',
          'Setting up development environments and toolchains'
        ]
      },
      {
        title: 'Week 3-4: Containerization & Orchestration',
        items: [
          'Docker fundamentals: images, containers, and registries',
          'Docker Compose for multi-container applications',
          'Kubernetes architecture and core concepts',
          'Pod management, services, and ingress controllers'
        ]
      },
      {
        title: 'Week 5-6: CI/CD Pipeline Engineering',
        items: [
          'Jenkins setup, configuration, and pipeline creation',
          'GitHub Actions and GitLab CI/CD workflows',
          'Automated testing integration and quality gates',
          'Deployment strategies: blue-green, canary, rolling updates'
        ]
      },
      {
        title: 'Week 7-8: Infrastructure as Code & Cloud Automation',
        items: [
          'Terraform fundamentals and state management',
          'Ansible for configuration management and automation',
          'AWS/Azure infrastructure provisioning and management',
          'Cloud-native services integration and optimization'
        ]
      },
      {
        title: 'Week 9-10: Monitoring, Security & Capstone Project',
        items: [
          'Prometheus, Grafana, and ELK stack implementation',
          'DevSecOps practices and security scanning integration',
          'Site reliability engineering and incident response',
          'End-to-end project: Complete DevOps pipeline deployment'
        ]
      }
    ]
  };
  
  export function renderDevOpsDetail() {
    const devopsDetail = document.getElementById('devopsDetail');
    if (devopsDetail) {
      devopsDetail.innerHTML = `
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
                  <h3>Industry Certificate</h3>
                  <p>Earn a comprehensive DevOps certificate recognized by leading tech companies and startups</p>
                </div>
                <div class="highlight-card">
                  <div class="highlight-icon">🛠️</div>
                  <h3>Real-World Projects</h3>
                  <p>Build production-ready CI/CD pipelines and manage live infrastructure deployments</p>
                </div>
                <div class="highlight-card">
                  <div class="highlight-icon">👨‍💻</div>
                  <h3>Expert Mentorship</h3>
                  <p>Learn from senior DevOps engineers with years of experience at scale</p>
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
            <h2 class="section-title">Learning Journey</h2>
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
              <h2 class="cta-title">Ready to Become a DevOps Engineer?</h2>
              <p class="cta-subtitle">Join ${courseData.students} professionals who have accelerated their careers with enterprise-level DevOps skills</p>
              <button class="enroll-btn-cta">
                <span>🎯</span>
                Start Your DevOps Journey
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
          window.location.href = 'https://docs.google.com/forms/d/1fLCPZWET-3zDGsbsV8udVsf1Ae9WuU7EnWszRvZcslI/edit';
        }, 1000);
      });
    });
  
    // Add smooth scrolling for better UX
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