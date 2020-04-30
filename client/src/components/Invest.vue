<template>
  <div>
    <form>
      <input
        v-model="input"
        name="percentage"
        min="0"
        max="100"
        type="range"
        placeholder="number from 1-100"
      />
      {{this.input}}%
      <h2>Money: {{this.convertToMoney}}VND</h2>
      <button @click.prevent="checkout" type="submit">Check out</button>
      <p>{{this.mssg}}</p>
    </form>
  </div>
</template>

<script>
export default {
  props: ["budget"],
  data() {
    return {
      input: 0,
      mssg: ""
    };
  },
  computed: {
    convertToMoney() {
      let value = (this.input * this.$props.budget) / 100;
      return value;
    }
  },
  methods: {
    checkout() {
      if (this.input == 0) {
        this.mssg = "Please choose your percentage";
      } else {
        this.mssg = "";
        this.$emit("checkout", true, this.convertToMoney, this.input);
      }
    }
  }
};
</script>