<template>
  <div>
    <h1>Payment successful</h1>
    <div class="info m-5">
      <h4 class="p-2">Name: {{transaction_info.first_name}} {{transaction_info.last_name}}</h4>
      <h4 class="p-2">Amount: {{transaction_info.amount}}VND</h4>
      <h4 class="p-2">Phone Number: {{transaction_info.phone}}</h4>
      <h4 class="p-2">Email: {{transaction_info.email}}</h4>
      <h4 class="p-2">Order ID: {{transaction_info.orderId}}</h4>
      <h4 class="p-2">Date: {{transaction_info.responseTime}}</h4>
    </div>
    <router-link to="/">Go back</router-link>
  </div>
</template>

<script>
export default {
  name: "Successful",
  data() {
    return {
      transaction_info: null
    };
  },
  mounted() {
    fetch("/api/transaction")
      .then(res => res.json())
      .then(data => (this.transaction_info = data[0]));
  }
};
</script>