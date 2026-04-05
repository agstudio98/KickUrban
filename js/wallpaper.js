import * as THREE from 'https://cdn.skypack.dev/three@0.136.0';

const canvas = document.getElementById('bg-canvas');
if (canvas) {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true });
    
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.setZ(30);

    // Monochromatic Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(5, 5, 5);
    scene.add(ambientLight, pointLight);

    // Geometry Pool (Floating Urban Shapes)
    const shapes = [];
    const geometries = [
        new THREE.BoxGeometry(2, 2, 2),
        new THREE.TorusGeometry(1.5, 0.5, 16, 100),
        new THREE.ConeGeometry(1.5, 3, 32),
        new THREE.OctahedronGeometry(2),
        new THREE.TorusKnotGeometry(1, 0.3, 100, 16)
    ];

    const material = new THREE.MeshStandardMaterial({ 
        color: 0x000000, 
        wireframe: true,
        transparent: true,
        opacity: 0.2
    });

    function addShape() {
        const geometry = geometries[Math.floor(Math.random() * geometries.length)];
        const mesh = new THREE.Mesh(geometry, material);
        
        const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100));
        mesh.position.set(x, y, z);
        mesh.rotation.x = Math.random() * Math.PI;
        mesh.rotation.y = Math.random() * Math.PI;
        
        // Add velocity properties
        mesh.userData.velocity = {
            x: (Math.random() - 0.5) * 0.05,
            y: (Math.random() - 0.5) * 0.05,
            z: (Math.random() - 0.5) * 0.05
        };
        
        scene.add(mesh);
        shapes.push(mesh);
    }

    Array(50).fill().forEach(addShape);

    // Mouse Tracking for Interaction
    let mouseX = 0;
    let mouseY = 0;
    document.addEventListener('mousemove', (e) => {
        mouseX = (e.clientX - window.innerWidth / 2) / 100;
        mouseY = (e.clientY - window.innerHeight / 2) / 100;
    });

    function animate() {
        requestAnimationFrame(animate);

        shapes.forEach(shape => {
            shape.rotation.x += 0.005;
            shape.rotation.y += 0.005;
            
            // Floating motion
            shape.position.x += shape.userData.velocity.x;
            shape.position.y += shape.userData.velocity.y;
            shape.position.z += shape.userData.velocity.z;

            // Boundaries reset
            if (Math.abs(shape.position.x) > 60) shape.position.x *= -0.9;
            if (Math.abs(shape.position.y) > 60) shape.position.y *= -0.9;
            if (Math.abs(shape.position.z) > 60) shape.position.z *= -0.9;
        });

        // Subtle camera response to mouse
        camera.position.x += (mouseX - camera.position.x) * 0.05;
        camera.position.y += (-mouseY - camera.position.y) * 0.05;
        camera.lookAt(scene.position);

        renderer.render(scene, camera);
    }

    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });

    animate();
}
