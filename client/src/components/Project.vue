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
    fetch(`/api/project/${this.$attrs.id}`)
      .then(res => res.json())
      .then(data => (this.project_detail = data.projects[0]));
  },
  components: { Invest }
};
</script>
