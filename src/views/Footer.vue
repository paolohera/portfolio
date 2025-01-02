<script setup>
const phoneNumber = '+63 966 911 8034';
const address = 'Osmeña St. Gun-Ob Lapu-Lapu City, Cebu. Philippines';
</script>

<template>
  <footer class="footer">
    <div class="footer-container">
    
      <!-- Social Links -->
      <div class="footer-section">
        <h4>Contact Me</h4>
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
    <div class="footer-bottom">
      <p>&copy; 2024 Paolo Hera. All rights reserved.</p>
    </div>
  </footer>
</template>

<style scoped>
@import url('https://fonts.cdnfonts.com/css/technolab');

.footer {
  background-color: transparent;
  color: #fff;
  padding: 2.5rem 1.5rem;
  font-family: 'Poppins', sans-serif;
  border-top: 2px solid rgb(54, 248, 5);
}

.social-icons{
  margin-left: -30px;
}

.social-icon {
  color: white;
  margin-left: 20px;
  transition: color 0.3s ease;
}

.social-icon:hover {
  color: rgb(35, 255, 6);
}

.footer-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.footer-section {
  flex: 1;
  min-width: 250px;
  text-align: center;
}

.footer-section h4 {
  margin-bottom: 1.5rem;
  font-size: 16px;
  color: #07fd28;
  font-family: 'Technolab', sans-serif;
}

.footer-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-section ul li {
  margin: 0.75rem 0;
}

.footer-section ul li a {
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s ease;
}

.footer-section ul li a:hover {
  color: #0af832;
}

.footer-section p {
  margin: 0.5rem 0;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.footer-section p i {
  margin-right: 0.5rem;
  color: #00d4ff;
}

.social-links a {
  color: #fff;
  font-size: 1.8rem;
  margin: 0 0.5rem;
  transition: transform 0.3s ease, color 0.3s ease;
}

.social-links a:hover {
  color: #00d4ff;
  transform: scale(1.2);
}

.footer-bottom {
  text-align: center;
  margin-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  padding-top: 1rem;
}

.footer-bottom p {
  font-size: 1rem;
  color: #fff;
}

@media (max-width: 768px) {
  .footer-container {
    flex-direction: column;
    align-items: center;
  }

  .footer-section {
    text-align: center;
  }
}
</style>
