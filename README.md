# Tek_init - Tech Education Platform

![Tek_init Logo](public/images/logo.svg)

Tek_init is a modern EdTech platform focused on cloud computing and DevOps education, designed to help students initiate their tech potential through comprehensive courses and hands-on learning experiences.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Development Setup](#development-setup)
- [Building for Production](#building-for-production)
- [Customization](#customization)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Features

### Interactive UI Elements
- **Particle Animation Background**: Dynamic particle system in the hero section
- **3D Tech Elements**: Interactive Three.js powered tech models
- **Micro-interactions**: Hover effects, smooth scrolling, and animated buttons
- **Responsive Design**: Fully mobile-friendly layout

### Educational Tools
- **Course Roadmap Visualization**: Interactive learning path with progression
- **Tech Stack Explorer**: Interactive diagram of technologies taught
- **AI Course Advisor**: Chatbot that recommends courses based on user interests
- **Live Student Counter**: Animated counters showing platform metrics

### Engagement Features
- **Testimonial Section**: Student success stories
- **Enrollment Form**: Integrated Google Form for course signups
- **Social Proof Elements**: Stats and achievements display

## Technologies Used

### Core Technologies
- **HTML5**: Semantic markup
- **CSS3**: Modern styling with variables and animations
- **JavaScript (ES6+)**: Interactive functionality
- **Parcel**: Zero-config build tool

### Advanced Technologies
- **Three.js**: 3D graphics in the hero section
- **Intersection Observer API**: For scroll animations
- **CSS Animations**: Smooth transitions and effects
- **Modular JavaScript**: Component-based architecture

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/tek_init.git
cd tek_init
```

2. Install dependencies:
```bash
npm install
```

## Project Structure

```
tek_init/
├── public/               # Static assets
│   ├── images/           # Image files
│   └── index.html        # Main HTML file
├── src/
│   ├── assets/           # Fonts, icons, etc.
│   ├── components/       # Reusable components
│   ├── scripts/          # JavaScript modules
│   └── styles/           # CSS stylesheets
├── package.json          # Project configuration
└── README.md             # This file
```

## Development Setup

1. Start the development server:
```bash
npm run dev
```

2. Open your browser to:
```
http://localhost:1234
```

3. The server will automatically reload when you make changes.

## Building for Production

To create an optimized production build:

```bash
npm run build
```

This will:
- Minify CSS and JavaScript
- Optimize images
- Generate hashed filenames for caching
- Output files to the `dist` directory

## Customization

### Changing Brand Colors
Edit the CSS variables in `src/styles/variables.css`:
```css
:root {
    --primary: #00f5a0;      /* Main brand color */
    --dark: #1e3142;         /* Dark background color */
    --light: #f5f5f5;        /* Light background color */
    --accent: #4a6572;       /* Secondary accent color */
    --text: #333333;         /* Main text color */
}
```

### Updating Course Content
Edit the course data in `src/components/Courses.js`:
```javascript
const courses = [
    {
        title: "Cloud Computing Fundamentals",
        description: "Master the basics of cloud technologies...",
        icon: "☁️"
    },
    // Add more courses as needed
];
```

### Modifying the Enrollment Form
Update the form URL in `src/components/CTA.js`:
```javascript
<a href="YOUR_NEW_GOOGLE_FORM_URL" 
   class="cta-btn" 
   target="_blank" 
   rel="noopener noreferrer">
    Enroll Now
</a>
```

## Deployment

### Static Hosting Options
1. **Netlify**:
   - Connect your GitHub repository
   - Set build command: `npm run build`
   - Set publish directory: `dist`

2. **Vercel**:
   - Import your project
   - Framework preset: Static Site
   - Build command: `npm run build`
   - Output directory: `dist`

3. **GitHub Pages**:
   ```bash
   npm run build
   git subtree push --prefix dist origin gh-pages
   ```

## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Create a new Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Tek_init** - Initiate Your Tech Potential  
[Live Demo](#) | [Contact Us](mailto:info@tekinit.com) | [LinkedIn](https://www.linkedin.com/company/106107588)