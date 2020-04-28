<template>
  <div class="row justify-content-center">
    <div class="col-md-4 p-5" v-for="project in $attrs.projects" :key="project.id">
      <router-link :to="'project/' + project.id">{{project.name}}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>