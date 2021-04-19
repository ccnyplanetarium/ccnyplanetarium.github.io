---
layout: post
title:  "Globe Drawing for Earth Day"
date: 2021-02-18
excerpt: "Let's make some globes"
image: "assets/images/globe-warp-500.jpg"
author: "James Hedberg"
categories: posts
---



{%
include figure.html
max-width="800px"
file="earthwarp.gif" alt="Globe Warping"
caption="Wrapping a map on a sphere [CC-BY: J.Hedberg/CCNYPlanetarium]"
%}

I don't know about you, but around here we love drawing maps, and we love looking at globes. But, it's been a little hard to do both at the same time. Globe making is not a particularly easy hobby, and especially when little hands are involved, the painstaking work of printing out a dozen little segments (gores) and gluing them to a perfect sphere can be challenging. So, here's a compromise. You draw a map, we'll put it on a virtual sphere that you can play with. Like this one (click and drag to see the whole globe):

<canvas id="c" style="display: block; padding: 5px;
  width: 80%;
  height: 350px;
  margin: auto;"></canvas>

---

### Instructions:

Here's a quick list of steps to make your own virtual globe based on a drawing:

1 - All you'll need is a world map template in the *equirectangular projection* - you can use this <a href="{{base.url}}/assets/dynamic-media/globes/worldmap-template.pdf">pdf file</a>:


<div class="row">
<figure class="figure d-block mx-auto" style="max-width: 300px;">
<a href="{{base.url}}/assets/dynamic-media/globes/worldmap-template.pdf"><img class="figure-img img-fluid" src="{{base.url}}/assets/images/map-template.jpg"/></a>
   <figcaption class="figure-caption">A world map template</figcaption>
</figure>
</div>




2 - Then print out the pdf, get some crayons or pencils or whatever you want and have fun coloring your map. (when you print it out, make sure to select the option that scales the image to fit your paper - every printer is a little different and this will make sure you get the whole map printed)

3 - After you're done, you'll need to scan it in, or take a picture of it and submit it via this form:

<a href="https://docs.google.com/forms/d/e/1FAIpQLSea36PxYpKEelEz1ogO7Bb7XgUsOYOlIiU5gGtLadPHxuCexQ/viewform?usp=sf_link" class="btn btn-primary" target="_blank">Submit a Globe Form &rarr;</a>

4 - Then, we'll process the image and add it to the growing gallery of hand drawn globes:

Check it out <a href="{{base.url}}/kids-draw-planets/">here</a>:

<div class="row">
<figure class="figure d-block mx-auto" style="max-width: 300px;">
<a href="{{base.url}}/kids-draw-planets/"><img class="figure-img img-fluid" src="{{base.url}}/assets/images/gallery-thumb.jpg"/></a>
   <figcaption class="figure-caption">The Gallery</figcaption>
</figure>
</div>


[and of course you could just go off the rails and draw Mars or make up your own planet or something, but we'll stick with Earth for now].

---

### About the author

Dr. Hedberg has made some globes by hand and can assure you it's difficult. Though, if he had to it all over again, being a globe maker wouldn't be a good choice.

{%
include figure.html
max-width="600px"
file="globe-gores-moon.jpg" alt="Globe Warping"
caption="Make a globe i.r.l"
%}

<script type="module">

  import * as THREE from '{{base.url}}/assets/javascript/threejs/three.module.js';
  import { OrbitControls } from '{{base.url}}/assets/javascript/threejs/OrbitControls.js';

function main() {
const canvas = document.querySelector('#c');
const renderer = new THREE.WebGLRenderer({canvas});

const fov = 75;
const aspect = 2;  // the canvas default
const near = 0.1;
const far = 5;
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.z = 2;

const scene = new THREE.Scene();

{
  const color = 0xFFFFFF;
  const intensity = 1;
  const light = new THREE.DirectionalLight(color, intensity);
  light.position.set(-1, 2, 4);
  scene.add(light);
}

const controls = new OrbitControls( camera, canvas );
controls.minDistance = 1.5;
controls.maxDistance = 5;
controls.enablePan = false;
controls.enableZoom = true;


const geometry = new THREE.SphereGeometry( 1, 64, 32 );
geometry.name = "theGlobe";
const material = new THREE.MeshStandardMaterial({
  roughness: 1
});

const textureLoader = new THREE.TextureLoader();
textureLoader.load("{{base.url}}/assets/dynamic-media/globes/globe-drawings/earth-jah.jpg", function(map) {

  map.anisotropy = 8;

  material.map = map;
  material.needsUpdate = true;
  material.opacity = 1;

});
const theGlobe = new THREE.Mesh( geometry, material )
theGlobe.name = "theGlobe"
scene.add( theGlobe);


function resizeRendererToDisplaySize(renderer) {
  const canvas = renderer.domElement;
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  const needResize = canvas.width !== width || canvas.height !== height;
  if (needResize) {
    renderer.setSize(width, height, false);
  }
  return needResize;
}

function render(time) {
  time *= 0.0001;

  theGlobe.rotation.y = time;
  if (resizeRendererToDisplaySize(renderer)) {
    const canvas = renderer.domElement;
    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    camera.updateProjectionMatrix();
  }



  renderer.render(scene, camera);

  requestAnimationFrame(render);
}

requestAnimationFrame(render);
}

main();


</script>
