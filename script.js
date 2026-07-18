import * as THREE from 'three';
import { PointerLockControls } from 'https://unpkg.com/three@0.160.0/examples/jsm/controls/PointerLockControls.js';
import { GLTFLoader } from 'https://unpkg.com/three@0.160.0/examples/jsm/loaders/GLTFLoader.js';


// Setup Scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Lighting & Floor
scene.add(new THREE.AmbientLight(0xffffff, 0.5));
const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(100, 100),
    new THREE.MeshBasicMaterial({ color: 0x444444 })
);
floor.rotation.x = -Math.PI / 2;
scene.add(floor);

// Camera Controls
const controls = new PointerLockControls(camera, document.body);
document.body.addEventListener('click', () => controls.lock());

camera.position.y = 1.7; // Human eye height



// Replace your existing loader block with this to test visibility:
const geometry = new THREE.BoxGeometry(0.1, 0.1, 0.3);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const weaponPlaceholder = new THREE.Mesh(geometry, material);

// Position it relative to the camera
weaponPlaceholder.position.set(0.2, -0.2, -0.5); 

// Add to camera
camera.add(weaponPlaceholder);



// Animation Loop
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();
