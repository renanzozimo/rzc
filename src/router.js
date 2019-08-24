import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL, // eslint-disable-line
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/key",
      name: "key",
      component: () => import("./views/Key.vue")
    }
  ]
});
