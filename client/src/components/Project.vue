<template>
  <div>
    <h1 class="text-primary">{{ project_detail.name }}</h1>
    <img
      class="img-fluid"
      :src="require('../images/' + project_detail.thumbnail)"
      alt="img"
    />
    <h2 class="p-3 text-info">
      Budget:
      {{
        project_detail.budget
          .toString()
          .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
      }}VND
    </h2>
    <p class="m-3 px-5">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo animi
      qui iusto eveniet fugiat quisquam voluptatem laudantium dolores
      consectetur. Ipsum repellat, aut molestiae maiores autem dolor odit ullam
      architecto commodi! Lorem ipsum dolor sit amet consectetur adipisicing
      elit. Explicabo animi qui iusto eveniet fugiat quisquam voluptatem
      laudantium dolores consectetur. Ipsum repellat, aut molestiae maiores
      autem dolor odit ullam architecto commodi!
    </p>
    <Invest
      v-if="!this.checkout_status"
      @checkout="checkout"
      :budget="project_detail.budget"
    />
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
      percent: "",
    };
  },
  mounted() {
    fetch(`/api/project/${this.$attrs.id}`)
      .then((res) => res.json())
      .then((data) => (this.project_detail = data.project[0]));
  },
  methods: {
    checkout(status, money, percent) {
      this.checkout_status = status;
      this.money = money;
      this.percent = percent;
    },
  },
};
</script>
