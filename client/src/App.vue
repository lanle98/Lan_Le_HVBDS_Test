<template>
  <div id="app" class="container">
    <router-link to="/">
      <img class="mb-5" alt="Vue logo" src="./images/hvbds_logo.png" />
    </router-link>

    <router-view :projects="this.projects"></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      projects: []
    };
  },
  mounted() {
    fetch("/api")
      .then(res => res.json())
      .then(data => (this.projects = data.projects));
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
