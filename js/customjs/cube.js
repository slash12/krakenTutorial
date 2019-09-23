// scene definitaion
const scene = new THREE.Scene();

// camera definition
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
// setting up the renderer
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
// adding it to the document
document.body.appendChild( renderer.domElement );

// adding a 3d cube
var geometry = new THREE.BoxGeometry( 1, 1, 1 );
// defining the box texture, color
var material = new THREE.MeshBasicMaterial( { color: '#C0C0C0' } );
// cube object
var cube = new THREE.Mesh( geometry, material );

// adding cube to scene
scene.add( cube );
// define the camera position for the cube
camera.position.z = 3;

// RENDERING FUNCTION
function animate() {
    requestAnimationFrame(animate);
    // adding rotation to cube
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    // rendering the scene and camera
    renderer.render(scene, camera);
}

animate();