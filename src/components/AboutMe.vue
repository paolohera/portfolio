<template>
  <div class="about">
    <div class="content">
      <h1>
        An IT college student specializing in network configuration, proficient in operating system installation, hardware, and software setup. My coding expertise lies in HTML, CSS, JavaScript, and Vue.js, where I am passionate about crafting immersive and user-friendly web experiences. In addition to my technical skills, I am dedicated to continuous learning and staying updated with the latest advancements in the IT industry, always eager to tackle new challenges and expand my knowledge.
      </h1>
    </div>
  </div>
</template>

<style scoped>
/* Aesthetic background with soft gradient */
.about {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height:  50vh;
  background: transparent; /* Soft pastel gradient */
  padding: 0 2rem;
  font-family: 'Poppins', sans-serif;
  animation: fadeIn 1.5s ease-in-out;
 
}

/* Content container with smooth, elegant design */
.content {
  width: 100%;
  max-width: 900px;
  padding: 3rem 2rem;
  background-color: transparent; /* Slightly transparent white */
  border-radius: 12px;
  animation: fadeInUp 1.5s ease-out;
  text-align: center;

}

/* Heading styling with clean and simple text */
h1 {
  color: #f7f4f4;
  font-size: 1rem;
  line-height: 1.8;
  font-weight: 400;
  margin: 0;
  letter-spacing: 0.5px;
  font-family: 'Poppins', sans-serif;
  
}

/* Soft animation for fade-in and smooth entrance */
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes fadeInUp {
  0% {
    transform: translateY(30px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .content {
    padding: 2rem;
    max-width: 90%;
  }
  h1 {
    font-size: 1.1rem;
    line-height: 1.6;
  }
  .about{
    margin-top: 70%;
  }
}
</style>
