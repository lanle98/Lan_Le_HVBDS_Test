<template>
  <div>
    <form>
      <input
        class="m-3"
        v-model="input"
        name="percentage"
        min="0"
        max="100"
        type="range"
        placeholder="number from 1-100"
      />
      {{ this.input }}%
      <p>{{ this.displayMssg }}</p>
      <h2 class="display-4" :class="{ 'text-success': input > 0 }">
        Money:
        {{
          this.convertToMoney
            .toString()
            .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
        }}VND
      </h2>
      <button
        class="btn btn-primary m-4"
        @click.prevent="checkout"
        type="submit"
      >
        Check out
      </button>
    </form>
  </div>
</template>

<script>
export default {
  props: ["budget"],
  data() {
    return {
      input: 0,
      mssg: "",
    };
  },
  computed: {
    convertToMoney() {
      let value = (this.input * this.$props.budget) / 100;
      return value;
    },
    displayMssg() {
      return this.input == 0 ? "Please choose your percentage" : "";
    },
  },
  methods: {
    checkout() {
      if (this.input == 0) {
        return;
      } else {
        this.mssg = "";
        this.$emit("checkout", true, this.convertToMoney, this.input);
      }
    },
  },
};
</script>
