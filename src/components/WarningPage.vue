<template>
  <div class="warning-page">
    <audio autoplay loop>
  <source src="../assets/Baka.MP3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>
    <div class="overlay"></div>
    <div class="content">
      <h1>No Source Code For Ya!!</h1>
      <p>WHAHAHAHAHAHHAHAHAHAHAHHAHAHAHAHHAHA!</p>
      <div class="button-container">
        <a href="javascript:void(0)" @click="cancelWarning">
          <button class="button">
            <span class="button_lg">
              <span class="button_sl"></span>
              <span class="button_text">Go Back</span>
            </span>
          </button>
        </a>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  methods: {
    // Proceed to source code after confirmation
    proceedToSourceCode() {
      // Replace with the specific URL you want to open
      window.open('https://github.com/your-repo/source-code', '_blank');
      
      // Redirect to the main App view (typically the home or default route)
      this.$router.push('/');
    },
    // Close warning and return to the default view
    cancelWarning() {
      // Redirect to the main App view (typically the home or default route)
      this.$router.push('/');
    }
  }
}
</script>
  
<style scoped>
@import url('https://fonts.cdnfonts.com/css/callahan-2');

.warning-page {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('../assets/bg.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: black;
  filter: brightness(.8) contrast(2);
}

.content {
  position: relative;
  z-index: 10;
  color: white;
  text-align: center;
  padding: 20px;
  box-sizing: border-box;
  background: rgba(15, 25, 35, 0.6); /* Slightly transparent dark background */
  backdrop-filter: blur(2px); /* Blur effect */
  border-radius: 15px;
  width: 80%;
  max-width: 600px;
  box-shadow: 0 8px 32px 0 rgba(247, 247, 247, 0.37);
  
}

.button-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  width: 100%;
}

.button {
  font-family: 'Technolab', sans-serif;
  border: none;
  background: none;
  color: #0f1923;
  cursor: pointer;
  position: relative;
  padding: 8px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 10px;
  transition: all 0.15s ease;
  width: 200px;
  margin: 0 auto; /* Center the button */
}

/* Rest of the button styles remain the same as in the previous version */
.button::before,
.button::after {
  content: '';
  display: block;
  position: absolute;
  right: 0;
  left: 0;
  height: calc(50% - 5px);
  border: 1px solid #2df106;
  transition: all 0.15s ease;
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
  transition: all 0.2s ease;
}

.button_sl {
  display: block;
  position: absolute;
  top: 0;
  bottom: -1px;
  left: -8px;
  width: 0;
  background-color: #5af711;
  transform: skew(-15deg);
  transition: all 0.2s ease;
}

.button_text {
  position: relative;
  text-decoration: none;
  color: white;
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

h1 {
  font-size: 3rem;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  font-family: 'Callahan', sans-serif;
}

p {
  font-size: 2rem;
  max-width: 600px;
  text-align: center;
  margin-bottom: 30px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  font-family: 'Callahan', sans-serif;
}
</style>