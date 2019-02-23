import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Registro  from './views/Registro.vue'
import Login from './views/Login.vue'
import Dashboard from './views/Dashboard.vue'



import { Auth } from "@/firebase.js";

Vue.use(Router)

var router =  new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }, 
    {
      path: '/registro',
      name: 'registro',
      component: Registro
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      meta: {
        requiresAuth: true
      }
    },
  ]
})





router.beforeEach((to, from, next) => {
  let currentUser = Auth.currentUser;
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) next("login");
  else next();
});

export default router;
