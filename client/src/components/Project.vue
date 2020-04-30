<template>
  <div>
    <h1>{{project_detail.name}}</h1>
    <h2>Budget: {{project_detail.budget}}VND</h2>
    <Invest v-if="!this.checkout_status" @checkout="checkout" :budget="project_detail.budget" />
    <Checkout v-else :percent="this.percent" :money="this.money" />
  </div>
</template>

<script>
import Invest from "./Invest";
import Checkout from "./Checkout";
export default {
  name: "Project",
  components: { Invest, Checkout },
  data() {
    return {
      project_detail: {},
      checkout_status: false,
      money: "",
      percent: ""
    };
  },
  mounted() {
    fetch(`/api/project/${this.$attrs.id}`)
      .then(res => res.json())
      .then(data => (this.project_detail = data.project[0]));
  },
  methods: {
    checkout(status, money, percent) {
      this.checkout_status = status;
      this.money = money;
      this.percent = percent;
    }
  }
};
</script>
