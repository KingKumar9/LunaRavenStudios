import "./style.css";
import * as THREE from "three";

let scene3d = document.getElementById("scene3d");

const scene = new THREE.Scene();
scene.background = new THREE.Color("#f0e9df");

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
scene3d.appendChild(renderer.domElement);

const geometry = new THREE.TorusGeometry(10, 15, 24, 200);
const material = new THREE.PointsMaterial({
  size: 0.05,
  color: "#ad92ec",
});
const cube = new THREE.Points(geometry, material);
scene.add(cube);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.002;
  cube.rotation.y += 0.002;

  renderer.render(scene, camera);
}

animate();

window.addEventListener("resize", () => {
  // update display width and height
  width = window.innerWidth;
  height = window.innerHeight;
  // update camera aspect
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  // update renderer
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.render(scene, camera);
});
