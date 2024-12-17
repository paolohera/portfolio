<script>
import { useRouter } from 'vue-router'

export default {
  setup() {
    const router = useRouter()

    // Navigate to the warning page
    const goToWarningPage = () => {
      router.push({ name: 'warning' })  // This will navigate to WarningPage
    }

    return {
      goToWarningPage
    }
  }
}
</script>

<template>
  <div class="recent-projects">
    <h2>Recent Projects</h2>
  </div>

  <div class="container">
    <!-- Static Card 1 -->
    <div class="card">
      <img src="/src/assets/ola.png" alt="Room Reservation" class="card-image" />
      <h3 class="card-title">Room Reservation</h3>
      <p class="card-description">
        A Web Application Where users can reserve their desired room with less hassle. I was assigned to be the Frontend on this project.
      </p>
      <a href="javascript:void(0)" @click="goToWarningPage">
      <button class="button">
        <span class="button_lg">
          <span class="button_sl"></span>
          <span class="button_text">Source Code</span>
        </span>
      </button>
    </a>
    </div>

    <!-- Static Card 2 -->
    <div class="card">
      <img src="/src/assets/pish.png" alt="Ecommerce Website" class="card-image" />
      <h3 class="card-title">Ecommerce Website</h3>
      <p class="card-description">
        Ecommerce Website created by Troy Saberon and Paolo Hera, where users can purchase their desired products or fish online. I was assigned to be the Frontend on this project.
      </p>
      <a href="javascript:void(0)" @click="goToWarningPage">
      <button class="button">
        <span class="button_lg">
          <span class="button_sl"></span>
          <span class="button_text">Source Code</span>
        </span>
      </button>
    </a>
    </div>

    <!-- Static Card 3 -->
    <div class="card">
      <img src="/src/assets/cpc.png" alt="Student Management" class="card-image" />
      <h3 class="card-title">Student Management</h3>
      <p class="card-description">
        A web application created by Michael John Tampus and Paolo Hera, used for managing student information using PHP, HTML & CSS.
      </p>
      <a href="javascript:void(0)" @click="goToWarningPage">
      <button class="button">
        <span class="button_lg">
          <span class="button_sl"></span>
          <span class="button_text">Source Code</span>
        </span>
      </button>
    </a>
    </div>

    <!-- Static Card 4 -->
    <div class="card">
      <img src="/src/assets/olas.png" alt="Prototype" class="card-image" />
      <h3 class="card-title">Prototype</h3>
      <p class="card-description">
        A Static Website created by me using HTML & CSS. Its purpose is only to guide and let users view what Olango Island Has.
      </p>
      <a href="javascript:void(0)" @click="goToWarningPage">
      <button class="button">
        <span class="button_lg">
          <span class="button_sl"></span>
          <span class="button_text">Source Code</span>
        </span>
      </button>
    </a>
    </div>

    <!-- Static Card 5 -->
    <div class="card">
      <img src="/src/assets/student.png" alt="Ecommerce Prototype" class="card-image" />
      <h3 class="card-title">Student Companion</h3>
      <p class="card-description">
        TaskFlow is a feature-rich task management system tailored for students to keep their academic life organized.
         From setting task deadlines, marking progress, and reviewing completed tasks, TaskFlow does it all!
      </p>
      <a href="javascript:void(0)" @click="goToWarningPage">
      <button class="button">
        <span class="button_lg">
          <span class="button_sl"></span>
          <span class="button_text">Source Code</span>
        </span>
      </button>
    </a>
    </div>

    <!-- Static Card 6 -->
    <div class="card">
      <img src="/src/assets/task.png" alt="Calendar" class="card-image" />
      <h3 class="card-title">Task Support</h3>
      <p class="card-description">
        your personal productivity powerhouse that helps you: Organize tasks efficiently, Prioritize with ease,
        Find tasks instantly and Track progress like a pro.

      </p>
      <a href="javascript:void(0)" @click="goToWarningPage">
      <button class="button">
        <span class="button_lg">
          <span class="button_sl"></span>
          <span class="button_text">Source Code</span>
        </span>
      </button>
    </a>
    </div>
  </div>
</template>


<style scoped>
@import url('https://fonts.cdnfonts.com/css/ruwudu');

.container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin: 50px 0;
}

.recent-projects {
  width: 80%;
  text-align: center;
  color: white;
  margin: 100px auto 0;
  border-bottom: 2px solid rgb(4, 228, 4);
  text-transform: uppercase;
  font-family: 'Technolab', sans-serif;
}

.card {
  width: 300px;
  height: 400px;
  background-color: transparent;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 12px;
  text-align: center;
  position: relative;
  border: 1px solid white;
}

.card-image {
  width: 100%;
  height: 150px;
  border-radius: 4px;
  margin-bottom: 8px;
}

.card-title {
  margin: 8px 0 4px;
  font-size: 13px;
  color: rgb(38, 245, 10);
  font-family: 'Technolab', sans-serif;
}

.card-description {
  font-family: 'Ruwudu', sans-serif;
  font-size: 14px;
  color: white;
  margin-bottom: 8px;
  text-align: justify;
  padding: 0 20px;
}

.button {
  font-family: 'Technolab', sans-serif;
  border: none;
  background: none;
  color: #0f1923;
  cursor: pointer;
  position: absolute;
  bottom: 12px;
  left: 50%;
  transform: translateX(-50%);
  padding: 8px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 10px;
  transition: all 0.15s ease;
  width: 200px;
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
  background-color: #19f711;
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

@media (max-width: 768px) {
  .button {
    position: inherit;
    margin-left: 50%;
  }
  h2{
    font-size: 16px;
  }
}
</style>