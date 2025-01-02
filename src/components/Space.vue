<template>
    <div id="space-container"></div>
  </template>
  
  <script>
  import { onMounted, onBeforeUnmount } from 'vue';
  import * as THREE from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.module.js';
  
  export default {
    setup() {
      let scene, camera, renderer, stars, shootingStars;
  
      const createShootingStar = () => {
        const geometry = new THREE.BufferGeometry();
        const trail = 20;
        const positions = new Float32Array(trail * 3);
        
        const x = (Math.random() - 0.5) * 2000;
        const y = (Math.random() - 0.5) * 2000;
        const z = Math.random() * 500;
        
        for (let i = 0; i < trail; i++) {
          positions[i * 3] = x - i * 2;
          positions[i * 3 + 1] = y - i * 2;
          positions[i * 3 + 2] = z;
        }
        
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        
        const material = new THREE.LineBasicMaterial({
          color: 0xffffff,
          opacity: 1,
          transparent: true
        });
        
        const shootingStar = new THREE.Line(geometry, material);
        shootingStar.velocity = new THREE.Vector3(
          -Math.random() * 4 - 2,
          -Math.random() * 4 - 2,
          0
        );
        
        return shootingStar;
      };
  
      const init = () => {
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        renderer = new THREE.WebGLRenderer({ alpha: true }); // Enable transparency
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.getElementById('space-container').appendChild(renderer.domElement);
  
        // Create background stars
        const starGeometry = new THREE.BufferGeometry();
        const starMaterial = new THREE.PointsMaterial({ color: 0xFFFFFF });
        const starVertices = [];
        for (let i = 0; i < 10000; i++) {
          const x = (Math.random() - 0.5) * 2000;
          const y = (Math.random() - 0.5) * 2000;
          const z = (Math.random() - 0.5) * 2000;
          starVertices.push(x, y, z);
        }
        starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));
        stars = new THREE.Points(starGeometry, starMaterial);
        scene.add(stars);
  
        // Initialize shooting stars array
        shootingStars = [];
        for (let i = 0; i < 5; i++) {
          const shootingStar = createShootingStar();
          scene.add(shootingStar);
          shootingStars.push(shootingStar);
        }
  
        camera.position.z = 500;
      };
  
      const updateShootingStars = () => {
        shootingStars.forEach((star, index) => {
          const positions = star.geometry.attributes.position.array;
          
          // Update positions
          for (let i = positions.length - 1; i >= 3; i -= 3) {
            positions[i] = positions[i - 3];
            positions[i - 1] = positions[i - 4];
            positions[i - 2] = positions[i - 5];
          }
          
          // Update head position
          positions[0] += star.velocity.x;
          positions[1] += star.velocity.y;
          positions[2] += star.velocity.z;
          
          // Reset if out of bounds
          if (positions[1] < -1000 || positions[0] < -1000) {
            const newStar = createShootingStar();
            scene.remove(star);
            scene.add(newStar);
            shootingStars[index] = newStar;
          } else {
            star.geometry.attributes.position.needsUpdate = true;
          }
        });
      };
  
      const animate = () => {
        requestAnimationFrame(animate);
        stars.rotation.y += 0.0005;
        stars.rotation.x += 0.0001;
        updateShootingStars();
        renderer.render(scene, camera);
      };
  
      const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };
  
      onMounted(() => {
        init();
        animate();
        window.addEventListener('resize', handleResize);
      });
  
      onBeforeUnmount(() => {
        window.removeEventListener('resize', handleResize);
      });
  
      return {};
    }
  };
  </script>
  
  <style>
  #space-container {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: black;
    z-index: -1; /* This ensures the space background stays behind other content */
  }
  </style>