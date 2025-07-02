import * as THREE from 'three';

export function initTechSphere() {
  const hero = document.querySelector('.hero');
  if (!hero) return;

  // Set up scene with enhanced settings
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ 
    alpha: true, 
    antialias: true,
    powerPreference: "high-performance"
  });
  
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x000000, 0);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // Find or create container
  let container = hero.querySelector('.threejs-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'threejs-container';
    hero.prepend(container);
  }
  container.appendChild(renderer.domElement);

  // Enhanced geometries for variety (COMMENTED OUT - not used for sparkles)
  /*
  const geometries = [
    new THREE.IcosahedronGeometry(1, 1),
    new THREE.OctahedronGeometry(1),
    new THREE.TetrahedronGeometry(1),
    new THREE.DodecahedronGeometry(1),
    new THREE.ConeGeometry(0.8, 1.5, 8),
    new THREE.CylinderGeometry(0.5, 0.8, 1.2, 6)
  ];
  */

  // Create enhanced particle system (SPARKLES)
  const particleGeometry = new THREE.BufferGeometry();
  const particleCount = 150;
  const positions = new Float32Array(particleCount * 3);
  const particleColors = new Float32Array(particleCount * 3);
  const sizes = new Float32Array(particleCount);

  for (let i = 0; i < particleCount; i++) {
    // Distribute particles in a sphere
    const radius = Math.random() * 15 + 5;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(Math.random() * 2 - 1);
    
    positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = radius * Math.cos(phi);

    // Vary colors in the cyan/green spectrum
    const hue = 0.4 + Math.random() * 0.3; // From green to cyan
    const color = new THREE.Color().setHSL(hue, 1, 0.6 + Math.random() * 0.4);
    particleColors[i * 3] = color.r;
    particleColors[i * 3 + 1] = color.g;
    particleColors[i * 3 + 2] = color.b;

    sizes[i] = Math.random() * 2 + 1;
  }

  particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  particleGeometry.setAttribute('aColor', new THREE.BufferAttribute(particleColors, 3));
  particleGeometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

  const particleMaterial = new THREE.ShaderMaterial({
    uniforms: {
      time: { value: 0 }
    },
    vertexShader: `
      attribute float size;
      attribute vec3 aColor;
      varying vec3 vColor;
      uniform float time;
      void main() {
        vColor = aColor;
        vec4 modelPosition = modelMatrix * vec4(position, 1.0);
        modelPosition.y += sin(time + modelPosition.x) * 0.1;
        vec4 viewPosition = viewMatrix * modelPosition;
        vec4 projectedPosition = projectionMatrix * viewPosition;
        gl_Position = projectedPosition;
        gl_PointSize = size * (300.0 / -viewPosition.z);
      }
    `,
    fragmentShader: `
      varying vec3 vColor;
      void main() {
        float distanceToCenter = distance(gl_PointCoord, vec2(0.5));
        float strength = 0.05 / distanceToCenter - 0.1;
        gl_FragColor = vec4(vColor, strength);
      }
    `,
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    vertexColors: true
  });

  const particles = new THREE.Points(particleGeometry, particleMaterial);
  scene.add(particles);

  // Create enhanced floating tech elements (COMMENTED OUT - rotating shapes)
  /*
  const techElements = [];
  const elementCount = 8;

  for (let i = 0; i < elementCount; i++) {
    const geometry = geometries[Math.floor(Math.random() * geometries.length)];
    
    // Create gradient material
    const hue = 0.4 + Math.random() * 0.3;
    const material = new THREE.MeshBasicMaterial({
      color: new THREE.Color().setHSL(hue, 1, 0.6),
      wireframe: true,
      transparent: true,
      opacity: 0.1 + Math.random() * 0.2
    });
    
    const element = new THREE.Mesh(geometry, material);
    
    // Position in a more structured way
    const angle = (i / elementCount) * Math.PI * 2;
    const radius = 8 + Math.random() * 4;
    element.position.set(
      Math.cos(angle) * radius + (Math.random() - 0.5) * 4,
      Math.sin(angle * 0.7) * 3 + (Math.random() - 0.5) * 6,
      Math.sin(angle) * radius + (Math.random() - 0.5) * 4
    );
    
    element.scale.setScalar(0.4 + Math.random() * 0.8);
    
    // Store initial position for animation
    element.initialPosition = element.position.clone();
    element.rotationSpeed = {
      x: (Math.random() - 0.5) * 0.02,
      y: (Math.random() - 0.5) * 0.02,
      z: (Math.random() - 0.5) * 0.02
    };
    
    scene.add(element);
    techElements.push(element);
  }
  */

  // Enhanced camera positioning
  camera.position.set(0, 0, 12);
  camera.lookAt(0, 0, 0);

  // Animation variables
  let time = 0;
  let mouseX = 0;
  let mouseY = 0;

  // Mouse interaction
  const onMouseMove = (event) => {
    mouseX = (event.clientX / window.innerWidth) * 2 - 1;
    mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
  };
  document.addEventListener('mousemove', onMouseMove);

  // Enhanced animation loop
  function animate() {
    time += 0.01;
    requestAnimationFrame(animate);

    // Update particle material time uniform
    particleMaterial.uniforms.time.value = time;

    // Animate tech elements with more complex movement (COMMENTED OUT - rotating shapes)
    /*
    techElements.forEach((el, index) => {
      // Rotation
      el.rotation.x += el.rotationSpeed.x;
      el.rotation.y += el.rotationSpeed.y;
      el.rotation.z += el.rotationSpeed.z;
      
      // Floating motion
      const offset = index * 0.5;
      el.position.y = el.initialPosition.y + Math.sin(time * 0.8 + offset) * 1.5;
      el.position.x = el.initialPosition.x + Math.cos(time * 0.5 + offset) * 0.8;
      
      // Subtle scale pulsing
      const scale = el.scale.x;
      el.scale.setScalar(scale + Math.sin(time * 2 + offset) * 0.1);
    });
    */

    // Camera movement based on mouse position
    camera.position.x += (mouseX * 2 - camera.position.x) * 0.02;
    camera.position.y += (mouseY * 2 - camera.position.y) * 0.02;
    camera.lookAt(0, 0, 0);

    // Particle system rotation
    particles.rotation.y += 0.001;
    particles.rotation.x += 0.0005;

    renderer.render(scene, camera);
  }
  animate();

  // Enhanced resize handler
  const handleResize = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  };
  window.addEventListener('resize', handleResize);

  // Return cleanup function (updated to remove tech elements cleanup)
  return {
    destroy: () => {
      document.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', handleResize);
      
      // Clean up Three.js objects (tech elements cleanup commented out)
      /*
      techElements.forEach(el => {
        scene.remove(el);
        el.geometry.dispose();
        el.material.dispose();
      });
      */
      
      particles.geometry.dispose();
      particles.material.dispose();
      scene.remove(particles);
      
      renderer.dispose();
      
      if (container && container.parentNode) {
        container.removeChild(renderer.domElement);
      }
    }
  };
}