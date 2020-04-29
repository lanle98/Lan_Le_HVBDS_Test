<template>
  <div class="checkout">
    <h1>Checkout</h1>
    <form action="../api/checkout" method="POST">
      <div>
        <label>First Name</label>
        <input name="first_name" type="text" />
      </div>
      <div>
        <label>Last Name</label>
        <input name="last_name" type="text" />
      </div>
      <div>
        <label>Phone Number</label>
        <input name="phone" type="number" />
      </div>
      <div>
        <label>Money</label>
        <input name="money" type="number" :value="this.$props.money" readonly />
      </div>
      <button type="submit">Start Investing</button>
      <p>{{mssg}}</p>
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
      mssg: ""
    };
  },
  mounted() {
    fetch("../api/checkout")
      .then(res => res.json())
      .then(data => console.log(data));
  },
  methods: {
    invest() {
      if (this.first_name == "" || this.last_name == "" || this.phone == "") {
        this.mssg = "Please fill in the required fields";
      } else {
        this.mssg = "";
      }
    }
  }
};
</script>