import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Registro  from './views/Registro.vue'
import Login from './views/Login.vue'
import Dashboard from './views/Dashboard.vue'
import GetHelp from './views/GetHelp.vue'
import GiveHelp from './views/GiveHelp.vue'



import {Auth} from"@/firebase.js";
import store from "@/store.js";

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
    {
      path: '/gethelp',
      name: 'gethelp',
      component: GetHelp,
      meta: {
        requiresAuth: true,
        client:true
      }
    },
    {
      path: '/givehelp',
      name: 'givehelp',
      component: GiveHelp,
      meta: {
        requiresAuth: true,
        voluntary:true
      }
    },
  ]
})

function authTest(requiresAuth, currentUser){
  if(requiresAuth && !currentUser){
    return false
  }
  else{
    return true
  }
}

function roleTest(requiredRole, currentUserRole){
  if(requiredRole==null){
    return true
  }else{
    if(requiredRole==currentUserRole){
      return true
    }else{
      return false
    }
  }
}

function viewAuthorized(currentUser,currentUserRole,requiresAuth,requiredRole){
  if(!authTest(requiresAuth,currentUser)){
    return false
  }
  else if(!roleTest(requiredRole, currentUserRole)){
    return false
  }else{
    return true
  }
}




router.beforeEach((to, from, next) => {
  let currentUser = store.state.currentUser;
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  let currentUserRole = store.state.currentUserRole;
  let requiresClient = to.matched.some(record => record.meta.client);
  let requiresVoluntary = to.matched.some(record => record.meta.voluntary);


  if (requiresAuth && !currentUser){ 
    next("login");
  }else if(requiresClient && currentUserRole!="client"){
    next("login");
  }else if(requiresVoluntary && currentUserRole!="voluntary"){
    next("login")
  }
  else next();
});




export default router;
