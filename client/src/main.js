import Vue from 'vue'
import App from './App.vue'
import Project from './components/Project.vue'
import Home from './components/Home.vue'
import VueRouter from 'vue-router'

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/project/:id', name: 'project', component: Project, props: true },

]

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
