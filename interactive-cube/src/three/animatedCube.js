import * as THREE from 'three';


export default class AnimatedCube {
    constructor(id) {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
        
        this.renderer = new THREE.WebGLRenderer();
        document.getElementById(id).appendChild( this.renderer.domElement );
        
        const geometry = new THREE.BoxGeometry( 1, 1, 1 );
        const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
        this.cube = new THREE.Mesh( geometry, material );
        this.scene.add( this.cube );
        
        this.camera.position.z = 5;        
    }

    rotate() {
        this.cube.rotation.x += 5;
        this.cube.rotation.y += 5;
        this.renderer.render( this.scene, this.camera );
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
