<template>
  <div id="app">
    <img alt="Vue logo" src="./images/hvbds_logo.png" />
    <div v-for="project in projects" :key="project.id">
      <Project :project="project" />
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
        { id: 1, name: "project 1", budget: 2000 },
        { id: 2, name: "project 2", budget: 2000 },
        { id: 3, name: "project 3", budget: 2000 }
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
