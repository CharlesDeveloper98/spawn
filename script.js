import * as THREE from 'three';
import { PointerLockControls } from 'https://unpkg.com/three@0.160.0/examples/jsm/controls/PointerLockControls.js';
import { GLTFLoader } from 'https://unpkg.com/three@0.160.0/examples/jsm/loaders/GLTFLoader.js';

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x87ceeb); // Light blue sky

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Lighting
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(5, 10, 5);
scene.add(light);
scene.add(new THREE.AmbientLight(0xffffff, 0.5));

// Controls
const controls = new PointerLockControls(camera, document.body);
document.body.addEventListener('click', () => controls.lock());
camera.position.set(0, 1.7, 5);

const loader = new GLTFLoader();

// Load Grass
loader.load('./models/Grass02.glb', (gltf) => {
    const grass = gltf.scene;
    grass.position.set(0, 0, 0);
    scene.add(grass);
}, undefined, (err) => console.error("Grass error", err));

// Load Flowers
loader.load('./models/Flower_02_a_Art.glb', (gltf) => {
    const flower = gltf.scene;
    flower.position.set(2, 0, 0); // Positioned slightly to the side
    scene.add(flower);
}, undefined, (err) => console.error("Flower error", err));

// Animation Loop
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();
