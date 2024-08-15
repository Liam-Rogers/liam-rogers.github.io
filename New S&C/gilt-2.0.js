// gilt-2.0.js

class GiltViewer {
    constructor({ container, modelUrl, width = 1800, height = 500, backgroundColor = "#fffAff" }) {
        this.container = container;
        this.modelUrl = modelUrl;
        this.width = width;
        this.height = height;
        this.backgroundColor = backgroundColor;

        this.initViewer();
    }

    initViewer() {
        // Set up the Three.js scene
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, this.width / this.height, 0.1, 5000);
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(this.width, this.height);
        renderer.setClearColor(this.backgroundColor);

        // Append the renderer to the container
        this.container.appendChild(renderer.domElement);

        // Add natural lighting

        // Ambient Light for general illumination
        const ambientLight = new THREE.AmbientLight(0xffffff, 500); // soft white light
        scene.add(ambientLight);

        // Directional Light to simulate sunlight
        const directionalLight = new THREE.DirectionalLight(0xffffff, 500);
        directionalLight.position.set(5, 10, 7.5).normalize();
        scene.add(directionalLight);

        // Optional: Point Light for localized light
        const pointLight = new THREE.PointLight(0xffffff, 500);
        pointLight.position.set(0, 4, 4); // Position the light near the model
        scene.add(pointLight);

        // Add OrbitControls for user interaction
        const controls = new THREE.OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true; // for smooth controls
        controls.dampingFactor = 0.05;
        controls.screenSpacePanning = false;
        controls.minDistance = 2;
        controls.maxDistance = 10;
        controls.maxPolarAngle = Math.PI / 2;

        // Load the GLB model
        const loader = new THREE.GLTFLoader();
        loader.load(this.modelUrl, (gltf) => {
            const model = gltf.scene;
            scene.add(model);

            // Positioning the camera and model
            camera.position.z = 5;
            model.position.set(0, -1, 0);

            this.animate(renderer, scene, camera, controls);
        }, undefined, (error) => {
            console.error('An error occurred loading the model:', error);
        });
    }

    animate(renderer, scene, camera, controls) {
        const animateScene = () => {
            requestAnimationFrame(animateScene);

            // Update the controls on each frame
            controls.update();

            renderer.render(scene, camera);
        };
        animateScene();
    }
}
