<template>
  <div>
    <h1>{{project.name}}</h1>
    <Invest :budget="$props.project.budget" />
  </div>
</template>

<script>
import Invest from "./Invest";
export default {
  props: ["project"],
  components: { Invest }
};
</script>
