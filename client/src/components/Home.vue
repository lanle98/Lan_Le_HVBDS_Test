<template>
  <div class="row justify-content-center">
    <div
      class="col-md-4 p-5"
      v-for="project in $attrs.projects"
      :key="project.id"
    >
      <router-link :to="'project/' + project.id">
        <img
          class="img-fluid"
          :src="require('../images/' + project.thumbnail)"
          alt="thumbnail"
        />
        <h2 class="p-2">{{ project.name }}</h2>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>
