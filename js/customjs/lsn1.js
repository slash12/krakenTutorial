var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 3000);
camera.position.z = 5;
camera.position.x = 1;
camera.rotation.y = 2 * Math.PI / 180
camera.rotation.x = 5 * Math.PI / 180
camera.rotation.z = -67 * Math.PI / 180

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerHeight, window.innerHeight);
document.body.appendChild(renderer.domElement);

/**Kraken Head */
// Geometry object
var geometry = new THREE.SphereGeometry(15, 8, 6, 0, 6.3, 0, 3.1);
// create a material, color or image texture
var material = new THREE.MeshBasicMaterial({ color: '#c2c5cc', wireframe: true });
var sphere = new THREE.Mesh(geometry, material);
// scene.add(sphere);

camera.position.z = 50;
camera.position.x = -5;
camera.position.y = 0;

/**Kraken first tail */
var curve1 = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-10, 5, 15),
    new THREE.Vector3(-5, 5, 5),
    new THREE.Vector3(0, 0, 0),
]);

var tubeGeometry = new THREE.TubeGeometry(curve1, 5, 2, 8, false);
var t1Mesh = new THREE.Mesh(tubeGeometry, material);
// set position of the t1Mesh
t1Mesh.position.x = 3;
t1Mesh.position.y = 0;
t1Mesh.rotation.y = 0.5;
t1Mesh.rotation.x = -1.95;

// pointy tentancle
var peakGeo = new THREE.ConeGeometry( 2, 10, 5, 1, false, 0, 6.3 );
var matPeak = new THREE.MeshBasicMaterial( {color: '#c2c5cc', wireframe:true} );
var coneMesh = new THREE.Mesh( peakGeo, matPeak );
// set the position of the cone
coneMesh.position.x = 3.0;
coneMesh.position.y = -5;
coneMesh.rotation.x = 15.7;
coneMesh.rotation.y = 5;
coneMesh.rotation.z = 0.5;
// tentacle 1 (should merge with cone)
var tentancle1 = new THREE.Geometry();
t1Mesh.updateMatrix();
tentancle1.merge(t1Mesh.geometry, t1Mesh.matrix);
coneMesh.updateMatrix();
tentancle1.merge(coneMesh.geometry, coneMesh.matrix);
var tentacleMat = new THREE.MeshBasicMaterial({color: '#c2c5cc', wireframe:true});
var tentacleMesh = new THREE.Mesh(tentancle1, tentacleMat);
tentacleMesh.rotation.x = -2.7;
tentacleMesh.position.y = 3.7;
scene.add(tentacleMesh);

// our code
// var box = new THREE.BoxGeometry(1, 1, 1);
// var sphere = new THREE.SphereGeometry(.65, 32, 32);

// var singleGeometry = new THREE.Geometry();

// var boxMesh = new THREE.Mesh(box);
// var sphereMesh = new THREE.Mesh(sphere);
// sphereMesh.position.x = 0.5;
// sphereMesh.position.y = 0.5;
// sphereMesh.position.z = 0
// boxMesh.position.x = 0;
// boxMesh.position.y = 0;
// boxMesh.position.z = 0

// boxMesh.updateMatrix(); // as needed
// singleGeometry.merge(boxMesh.geometry, boxMesh.matrix);

// sphereMesh.updateMatrix(); // as needed
// singleGeometry.merge(sphereMesh.geometry, sphereMesh.matrix);

// var material = new THREE.MeshPhongMaterial({ color: 0xFF0000 });
// var mesh = new THREE.Mesh(singleGeometry, material);
// scene.add(mesh);

var update = function() {
    // cube.rotation.x += 0.01;
    // cube.rotation.y += 0.001;
    // tentacleMesh.rotation.x += 0.01;
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