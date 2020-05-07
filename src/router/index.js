import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/event",
    name: "Event",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Event.vue")
  },
  {
     path: "/memory",
     name: "Memory",
     component: () =>
       import(/* webpackChunkName: "about" */ "../views/Memory.vue")
  },
  {
      path: "/musician&label",
      name: "Musician & Label",
      component: () =>
        import(/* webpackChunkName: "about" */ "../views/MusicianLabel.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
