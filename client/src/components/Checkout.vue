<template>
  <div class="checkout container">
    <h1>Checkout</h1>
    <form action="../api/checkout" method="POST">
      <div class="row m-2">
        <label class="col-4">First Name</label>
        <input class="col-8" required name="first_name" type="text" />
      </div>
      <div class="row m-2">
        <label class="col-4">Last Name</label>
        <input class="col-8" required name="last_name" type="text" />
      </div>
      <div class="row m-2">
        <label class="col-4">Phone Number</label>
        <input class="col-8" required name="phone" type="number" />
      </div>
      <div class="row m-2">
        <label class="col-4">Email</label>
        <input class="col-8" required name="email" type="email" />
      </div>
      <div class="row m-2">
        <label class="col-4">Money</label>
        <input
          class="col-8"
          name="money"
          type="number"
          :value="this.$props.money"
          readonly
        />
      </div>
      <button type="submit">Start Investing</button>
      <p>{{ mssg }}</p>
    </form>
  </div>
</template>

<script>
export default {
  props: ["money", "percent"],
  data() {
    return {
      first_name: "",
      last_name: "",
      phone: "",
      mssg: "",
    };
  },
  mounted() {},
  methods: {
    invest() {
      if (this.first_name == "" || this.last_name == "" || this.phone == "") {
        this.mssg = "Please fill in the required fields";
      } else {
        this.mssg = "";
      }
    },
  },
};
</script>
