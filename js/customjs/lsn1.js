var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 3000);
camera.position.z = 5;
camera.position.x = 1;

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerHeight, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Geometry object
var geometry = new THREE.SphereGeometry(15, 8, 6, 0, 6.3, 0, 3.1);
// create a material, color or image texture
var material = new THREE.MeshBasicMaterial({ color: '#c2c5cc', wireframe: true });
var sphere = new THREE.Mesh(geometry, material);
// scene.add(sphere);

// camera.position.z = 100;

var curve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-10, 0, 10),
    new THREE.Vector3(-5, 5, 5),
    new THREE.Vector3(0, 0, 0),
    new THREE.Vector3(5, -5, 5),
    new THREE.Vector3(10, 0, 10)
]);

var tubeGeometry = new THREE.TubeGeometry(curve, 20, 2, 8, false);
var t1 = new THREE.Mesh(tubeGeometry, material);
// scene.add(t1);

// our code
var box = new THREE.BoxGeometry(1, 1, 1);
var sphere = new THREE.SphereGeometry(.65, 32, 32);

var singleGeometry = new THREE.Geometry();

var boxMesh = new THREE.Mesh(box);
var sphereMesh = new THREE.Mesh(sphere);
sphereMesh.position.x = 0.5;
sphereMesh.position.y = 0.5;
sphereMesh.position.z = 0
boxMesh.position.x = 0;
boxMesh.position.y = 0;
boxMesh.position.z = 0
boxMesh.updateMatrix(); // as needed
singleGeometry.merge(boxMesh.geometry, boxMesh.matrix);

sphereMesh.updateMatrix(); // as needed
singleGeometry.merge(sphereMesh.geometry, sphereMesh.matrix);

var material = new THREE.MeshPhongMaterial({ color: 0xFF0000 });
var mesh = new THREE.Mesh(singleGeometry, material);
scene.add(mesh);

// a light
var light = new THREE.HemisphereLight(0xfffff0, 0x101020, 1.25);
light.position.set(0.75, 1, 0.25);
scene.add(light);

var update = function() {
    // cube.rotation.x += 0.01;
    // cube.rotation.y += 0.001;
    // t1.rotation.x += 0.01;
};

var render = function() {
    renderer.render(scene, camera);
};

// update, render, repeat
var GameLoop = function() {
    requestAnimationFrame(GameLoop);

    update();
    render();
};

GameLoop();