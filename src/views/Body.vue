<script setup>
import Projects from '../components/Projects.vue'
import About from '../components/AboutMe.vue'

// Function to handle resume download
const handleResumeDownload = () => {
  const link = document.createElement('a')
  link.href = new URL('../assets/Paoloresume.docx', import.meta.url).href
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
</script>

<template>
  
 <div class="home-container">
   <div class="intro">
      <p>Hi there! I'm</p>
      <h1>Paolo Hera</h1>
      <h3>Frontend Dev at your service!</h3>
     
      <a href="https://www.raket.ph/paolohera" target="_blank">
  <button class="button">
    <span class="button_lg">
        <span class="button_sl"></span>
        <span class="button_text">Hire Me</span>
    </span>
  </button>

</a>

<button class="button" @click="handleResumeDownload">
        <span class="button_lg">
          <span class="button_sl"></span>
          <span class="button_text">Resume</span>
        </span>
      </button>



   </div>
   <div class="image-wrapper">
     <div class="imgcont2"></div>
     <div class="imgcont1"></div>
     <div class="imgcont">
         <img class="pic" src="/src/assets/wes.jpg">
     </div>
   </div>
 </div>
 
 <About />
 <Projects />

</template>

<style scoped>
@import url('https://fonts.cdnfonts.com/css/technolab');

.home-container {
 
  width: 100%;
  height: 80vh;
 
}

.intro {
  font-family: 'Technolab', sans-serif; 
  color: white;
  width: 40%;
  height: 300px;
  position: absolute;
  margin-top: 8%;  
  margin-left: 12%;
  text-align: left;
  padding-left: 20px;
}
p{
    font-size: 14px;
}
h1 {
  color: rgb(81, 255, 0);
  font-size: 28px;
  width: 300px;
  border-left: 2px solid rgb(81, 255, 0);
  padding-left: 5px;
}
h3{
font-size: 16px;
}
.image-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}

.pic {
  width: 250px;
  height: 350px;
  border-radius: 5px;
  object-fit: cover;
}

.imgcont {
  border: 1px solid rgb(35, 255, 6);
  width: 250px;
  height: 350px;
  position: absolute;
  align-items: center;
  margin-left: 60%;
  border-radius: 5px;
  display: flex;
  margin-top: 5%;
}

.imgcont1 {
  border: 1px solid white;
  width: 250px;
  height: 350px;
  position: absolute;
  align-items: center;
  margin-left: 61%;
  border-radius: 5px;
  display: flex;
  margin-top: 4%;
}

.imgcont2 {
  border: 1px solid rgb(35, 255, 6);
  width: 250px;
  height: 350px;
  position: absolute;
  align-items: center;
  margin-left: 62%;
  border-radius: 5px;
  display: flex;
  margin-top: 3%;
}

/* Mobile Responsiveness */
@media screen and (max-width: 768px) {
  .intro {
    width: 80%;
    margin-left: 10%;
    margin-top:  110%;
    font-size: 12px;
  }

  .image-wrapper {
    margin-top:10%;
    margin-left: -35%;
    height: 100px;
  }
  
.pic {
  width: 250px;
  height: 350px;
  border-radius: 5px;
  object-fit: cover;
}

.imgcont {
  
  margin-left: 50%;
  
  margin-top: 8%;
}

.imgcont1 {
  
  display: none;
}

.imgcont2 {
  display: none;
}


  .btn-cont {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 65%;
    margin-left: 0;
  }

  .btn-cont .btn {
    position: relative;
    margin: 0 auto;
  }
  
  .racket-btn {
    font-size: 14px;
    padding: 10px 20px;
  }
}

/* button styles */

    
.button {
    font-family: 'Technolab', sans-serif; 
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  border: none;
  background: none;
  color: #0f1923;
  cursor: pointer;
  position: relative;
  padding: 8px;
 top: 5px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 10px;
  transition: all .15s ease;
  z-index: 10;
  width: 200px;
 margin-right: 10px;
 margin-bottom: 10px;
}

.button::before,
.button::after {
  content: '';
  display: block;
  position: absolute;
  right: 0;
  left: 0;
  height: calc(50% - 5px);
  border: 1px solid #2df106;
  transition: all .15s ease;
}

.button::before {
  top: 0;
  border-bottom-width: 0;
}

.button::after {
  bottom: 0;
  border-top-width: 0;
}

.button:active,
.button:focus {
  outline: none;
}

.button:active::before,
.button:active::after {
  right: 3px;
  left: 3px;
}

.button:active::before {
  top: 3px;
}

.button:active::after {
  bottom: 3px;
}

.button_lg {
  position: relative;
  display: block;
  padding: 10px 20px;
  color: #fff;
  background-color: #0f1923;
  overflow: hidden;
  border: 1px solid white;

  box-shadow: inset 0px 0px 0px 1px transparent;
}

.button_lg::before {
  content: '';
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 2px;
  height: 2px;
  background-color: #0f1923;
}

.button_lg::after {
  content: '';
  display: block;
  position: absolute;
  right: 0;
  bottom: 0;
  width: 4px;
  height: 4px;
  background-color: #0f1923;
  transition: all .2s ease;
}

.button_sl {
  display: block;
  position: absolute;
  top: 0;
  bottom: -1px;
  left: -8px;
  width: 0;
  background-color: #19f711;
  transform: skew(-15deg);
  transition: all .2s ease;

}

.button_text {
  position: relative;
  text-decoration:none;
  color: white;
  width: 50px;
}

.button:hover {
  color: #0f1923;
}

.button:hover .button_sl {
  width: calc(100% + 15px);
}

.button:hover .button_lg::after {
  background-color: #fff;
}

</style>
