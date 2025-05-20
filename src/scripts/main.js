console.log('Main.js is loading');
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded');
    console.log('Header container exists:', !!document.getElementById('header-container'));
});
import { renderHeader } from '../components/Header.js';
import { renderHero } from '../components/Hero.js';
import { renderCourses } from '../components/Courses.js';
import { renderAbout } from '../components/About.js';
import { renderTestimonials } from '../components/Testimonials.js';
import { renderCTA } from '../components/CTA.js';
import { renderFooter } from '../components/Footer.js';
import { initHeader } from './navigation.js';
import { initAnimations } from './animations.js';
import { initParticles } from '../components/Particles.js';
import { initTechSphere } from '../components/TechSphere.js';
import { initTestimonialSlider } from '../scripts/testimonials.js';

document.addEventListener('DOMContentLoaded', () => {
    // Render all components
    renderHeader();
    renderHero();
    renderCourses();
    renderAbout();
    renderTestimonials();
    renderCTA();
    renderFooter();
    
    // Initialize functionality
    initHeader();
    initAnimations();
    initParticles();
    initTechSphere();
    initTestimonialSlider();
});