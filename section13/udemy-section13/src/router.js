import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Users from "./views/Users.vue";

// Vue.useはプラグインを適用するときに使う
Vue.use(Router);

export default new Router({
  routes: [{path: '/', component: Home},{path: '/users', component: Users}]
});