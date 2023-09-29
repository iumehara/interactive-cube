import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { TransformControls } from 'three/addons/controls/TransformControls.js';

export default class AnimatedCube {
    constructor(id) {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
        


        this.scene.background = new THREE.Color( 0xf0f0f0 );
        this.scene.add( new THREE.AmbientLight( 0xf0f0f0, 3 ) );


        const light = new THREE.SpotLight( 0xffffff, 4.5 );
        light.position.set( 0, 1500, 200 );
        light.angle = Math.PI * 0.2;
        light.decay = 0;
        light.castShadow = true;
        light.shadow.camera.near = 200;
        light.shadow.camera.far = 2000;
        light.shadow.bias = - 0.000222;
        light.shadow.mapSize.width = 1024;
        light.shadow.mapSize.height = 1024;
        this.scene.add( light );

        const planeGeometry = new THREE.PlaneGeometry( 2000, 2000 );
        planeGeometry.rotateX( - Math.PI / 2 );
        const planeMaterial = new THREE.ShadowMaterial( { color: 0x000000, opacity: 0.2 } );

        const plane = new THREE.Mesh( planeGeometry, planeMaterial );
        plane.position.y = - 200;
        plane.receiveShadow = true;
        this.scene.add( plane );

        const helper = new THREE.GridHelper( 2000, 100 );
        helper.position.y = - 199;
        helper.material.opacity = 0.25;
        helper.material.transparent = true;
        this.scene.add( helper );

        this.renderer = new THREE.WebGLRenderer();
        document.getElementById(id).appendChild( this.renderer.domElement );
        
        const geometry = new THREE.BoxGeometry( 1, 1, 1 );
        const material = new THREE.MeshBasicMaterial( { color: '#FFD9FD' } );
        this.cube = new THREE.Mesh( geometry, material );
        this.scene.add( this.cube );
        
        const controls = new OrbitControls( this.camera, this.renderer.domElement );
        controls.addEventListener( 'change', () => this.render() );

        this.camera.position.z = 5; 
        
        this.render()
    }

    render() {
        this.renderer.render( this.scene, this.camera );
    }

    rotate() {
        this.cube.rotation.x += 5;
        this.cube.rotation.y += 5;
        this.render()
    }

    redraw({x, y, z}) {
        const {width, height, depth} = this.cube.geometry.parameters
        const newX = x ? x : width
        const newY = y ? y : height
        const newZ = z ? z : depth
        this.cube.geometry = new THREE.BoxGeometry( newX, newY, newZ );
        this.scene.add( this.cube );
        this.renderer.render( this.scene, this.camera );
    }
}
