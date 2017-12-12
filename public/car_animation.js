var scene, camera, renderer;

var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;

var SPEED = 0.01;

function init() {
    scene = new THREE.Scene();
    initMesh();
    initCamera();
    initLights();
    initRenderer();
    document.body.appendChild(renderer.domElement);
}

function initCamera() {
    camera = new THREE.PerspectiveCamera(70, WIDTH / HEIGHT, 1, 10);
    camera.position.set(0, 1.5 , 6);
    camera.lookAt(scene.position);
}


function initRenderer() {
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(WIDTH, HEIGHT);
}

function initLights() {
    var light = new THREE.PointLight(0xffffff);
    light.position.set(10,20,20);
    scene.add(light);
}

var mesh = null;

function initMesh() {
    var loader = new THREE.JSONLoader();
    loader.load('./4L16color.json', function(geometry, materials) {
        mesh = new THREE.Mesh(geometry, new THREE.MeshFaceMaterial(materials));
        mesh.scale.x = mesh.scale.y = mesh.scale.z = 0.30;
        mesh.translation = THREE.GeometryUtils.center(geometry);
        scene.add(mesh);
    });
}



function rotateMesh(datas) {
    if (!mesh) {
        return;
    }



    mesh.rotation.x = datas.pitch / 57.14; 
    mesh.rotation.z = datas.roll / 57.14;   //datas.roll;
    mesh.rotation.y = datas.yaw / 57.14; // 1.75 coef corespondant à 1 degrés (360 deg reel = 630 deg sur le canvas blender)
    
}

function render1() {

    setTimeout(
        function() {
            requestAnimationFrame(render1);
        }, 1000 / 200
    )
    //console.log('jola')
    //console.log(mesh.rotation.y)

    
    renderer.render(scene, camera);
}