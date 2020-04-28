<template>
  <div id="app" class="container">
    <img alt="Vue logo" src="./images/hvbds_logo.png" />
    <div class="row justify-content-center">
      <div class="col-md-4" v-for="project in projects" :key="project.id">
        <Project :project="project" />
      </div>
    </div>
  </div>
</template>

<script>
import Project from "./components/Project.vue";

export default {
  name: "App",
  components: {
    Project
  },
  data() {
    return {
      projects: [
        { id: 1, name: "project 1", budget: 3000000 },
        { id: 2, name: "project 2", budget: 4000000 },
        { id: 3, name: "project 3", budget: 5000000 }
      ]
    };
  },
  mounted() {
    fetch("/api")
      .then(res => res.json())
      .then(data => console.log(data));
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
