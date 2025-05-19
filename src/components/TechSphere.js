import * as THREE from 'three';

export function initTechSphere() {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    // Set up scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    
    const container = document.createElement('div');
    container.className = 'threejs-container';
    container.appendChild(renderer.domElement);
    hero.prepend(container);

    // Create floating tech elements
    const geometry = new THREE.IcosahedronGeometry(1, 1);
    const material = new THREE.MeshBasicMaterial({ 
        color: 0x00f5a0,
        wireframe: true,
        transparent: true,
        opacity: 0.3
    });
    
    const techElements = [];
    for (let i = 0; i < 8; i++) {
        const element = new THREE.Mesh(geometry, material.clone());
        element.position.set(
            Math.random() * 10 - 5,
            Math.random() * 10 - 5,
            Math.random() * 10 - 5
        );
        element.scale.setScalar(0.5 + Math.random() * 0.5);
        scene.add(element);
        techElements.push(element);
    }

    camera.position.z = 5;

    // Animation loop
    function animate() {
        requestAnimationFrame(animate);
        techElements.forEach(el => {
            el.rotation.x += 0.005;
            el.rotation.y += 0.007;
        });
        renderer.render(scene, camera);
    }
    animate();

    // Handle resize
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
}