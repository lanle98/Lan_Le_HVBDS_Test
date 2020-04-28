<template>
  <div>
    <h3>Budget: {{this.$props.budget}}</h3>
    <form action>
      <input v-model="input" name="percentage" placeholder="Percent you want to invest..." />
    </form>
    <h2>{{this.convertToMoney}}</h2>
  </div>
</template>

<script>
export default {
  props: ["budget"],
  data() {
    return {
      input: "",
      result: ""
    };
  },
  computed: {
    convertToMoney() {
      let value = (this.input * this.$props.budget) / 100;
      return value.toString();
    }
  }
};
</script>