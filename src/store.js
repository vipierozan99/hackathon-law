import Vue from 'vue'
import Vuex from 'vuex'
import { Auth,Datab } from "@/firebase.js";


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser: null,
    currentUserRole: null
  },
  mutations: {
    login(state,user) {
      state.currentUser=user
    },
    logout(state){
      state.currentUser=null
      state.currentUserRole=null
    },
    loginRole(state, role){
      state.currentUserRole=role
    }

  },
  actions: {
    login(context, data){
      Auth.signInWithEmailAndPassword(data.email, data.password)
        .then((user) => {
          //can use user as arg
          //this.$router.replace("/");
          context.commit("login", user)
          var query = Datab.collection("Users").where("email","==",data.email)
          query.get().then((snapshot)=>{
            context.commit("loginRole", snapshot.docs[0].data().role)
          })
        })
        .catch(err => {
          alert(err.message);
        });
        
    },
    logout(context){
      Auth.signOut().then(() => {
        context.commit("logout")
      });
    },
    register(context, data){
      Auth.createUserWithEmailAndPassword(data.email, data.password)
        .then((user)=>{
          Datab.collection("Users").add({
            email: data.email,
            role: data.role
          })
        })
        .catch(function(error) {
        console.log(error);
      });
    }

  }
})
