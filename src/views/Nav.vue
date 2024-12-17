<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<template>
  <nav class="navbar" :class="{ 'menu-open': isMenuOpen }">
    <div class="nav-wrapper">
      <RouterLink to="/" class="logo">Hera</RouterLink>
      
      <!-- Hamburger Menu -->
      <div 
        class="hamburger-menu" 
        @click="toggleMenu"
        :class="{ 'is-active': isMenuOpen }"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
  
      <div class="nav-content" :class="{ 'mobile-open': isMenuOpen }">
       
        
        <div class="social-icons">
          <a href="https://www.facebook.com/paopao.hera" target="_blank" class="social-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
          </a>
          <a href="https://www.instagram.com/paopao.hera/" target="_blank" class="social-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
          <a href="https://github.com/paolohera" target="_blank" class="social-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7-.36.31-.63.82-.72 1.58v3.87"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
@import url('https://fonts.cdnfonts.com/css/technolab');

.logo {
  font-family: 'Technolab', sans-serif;
  color: white;
  font-size: 35px;
  margin-top: 15px;
  position: absolute;
  margin-left: 9%;
  cursor: pointer;
  text-decoration: none;
  z-index: 100;
}

.navbar {
  background-color: transparent;
  height: 80px;
  width: 100%;
  text-transform: uppercase;  
}

.nav-wrapper {
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-content {
  display: flex;
  align-items: center;
  margin-right: 12%;
  position: absolute;
  right: 0;
  top: 60%;
  transform: translateY(-50%);
}



.social-icons {
  display: flex;
  margin-left: 70px;
}

.social-icon {
  color: white;
  margin-left: 20px;
  transition: color 0.3s ease;
}

.social-icon:hover {
  color: rgb(35, 255, 6);
}

.hover-underline-animation {
  display: inline-block;
  position: relative;
  color: white;
}

.hover-underline-animation:after {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: rgb(35, 255, 6);
  transform-origin: bottom right;
  transition: transform .5s ease-out;
}

.hover-underline-animation:hover:after {
  transform: scaleX(1);
  transform-origin: bottom left;
}

/* Hamburger Menu */
.hamburger-menu {
  display: none;
  flex-direction: column;
  cursor: pointer;
  position: absolute;
  right: 8%;
  top: 50%;
  transform: translateY(-30%);
  z-index: 100;
}

.hamburger-menu span {
  width: 25px;
  height: 3px;
  background-color: white;
  margin: 3px 0;
  transition: 0.4s;
}

/* Mobile Responsiveness */
@media screen and (max-width: 768px) {
  .hamburger-menu {
    display: flex;
  }

  .nav-content {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 110vh;
    background-color: black;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 50;
    margin: 0;
    transform: translateX(100%);
    transition: transform 0.3s ease-in-out;
  }

  .nav-content.mobile-open {
    transform: translateX(0);
  }

  .links {
    flex-direction: column;
    margin: 0;
  }

  .links li {
    margin: 5px 0;
    text-align: center;
  }

  .links li a {
    font-size: 16px;
  }

  .social-icons {
    margin-top: 5px;
    margin-left: 0;
  }

  .social-icon {
    margin: 0 15px;
  }

  .logo {
    position: relative;
    font-size: 30px;
    z-index: 100;
  }

  /* Hamburger Menu Animation */
  .hamburger-menu.is-active span:nth-child(1) {
    transform: rotate(-45deg) translate(-5px, 6px);
  }

  .hamburger-menu.is-active span:nth-child(2) {
    opacity: 0;
  }

  .hamburger-menu.is-active span:nth-child(3) {
    transform: rotate(45deg) translate(-5px, -6px);
  }
}
</style>