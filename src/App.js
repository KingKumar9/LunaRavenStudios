import * as THREE from "three";
import { HashRouter as Switch, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Games from "./pages/Games";
import Fortnite from "./pages/games/Fortnite";
import Steam from "./pages/games/Steam";
import Future from "./pages/Future";
import "./App.css";

function App() {
  return (
    <Switch>
      <div id="scene3d" class="scene3d"></div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/our_games" element={<Games />} />
        <Route path="/our_games/fortnite" element={<Fortnite />} />
        <Route path="/our_games/steam" element={<Steam />} />
        <Route path="/the_future" element={<Future />} />
      </Routes>
    </Switch>
  );
}

function CreateBackground() {
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
    var width = window.innerWidth;
    var height = window.innerHeight;
    // update camera aspect
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    // update renderer
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.render(scene, camera);
  });
}

window.onload = () => {
  let scene3dExists = document.getElementById("scene3d");
  if (scene3dExists != null) {
    CreateBackground();
  }
};

export default App;
