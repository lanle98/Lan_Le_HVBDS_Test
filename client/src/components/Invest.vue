<template>
  <div>
    <form method="POST">
      <input
        v-model="input"
        name="percentage"
        min="0"
        max="100"
        type="range"
        placeholder="number from 1-100"
      />
      {{this.input}}%
      <h2>Money: {{this.convertToMoney}}</h2>
      <button type="submit">Start Investing</button>
    </form>
  </div>
</template>

<script>
export default {
  props: ["budget"],
  data() {
    return {
      input: 0,
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