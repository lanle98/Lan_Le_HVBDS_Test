<template>
  <div>
    <h1>{{project_detail.name}}</h1>
    <h2>Budget: {{project_detail.budget}}</h2>
    <Invest :budget="project_detail.budget" />
  </div>
</template>

<script>
import Invest from "./Invest";
export default {
  name: "Project",
  data() {
    return {
      project_detail: {}
    };
  },
  mounted() {
    this.project_detail = this.$route.params.project;
  },
  components: { Invest }
};
</script>
