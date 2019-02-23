import Vue from 'vue'
import Vuex from 'vuex'
import { Auth,Datab } from "@/firebase.js";


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser: null
  },
  mutations: {
    login(state,user) {
      state.currentUser=user
    },
    logout(state){
      state.currentUser=null
    }

  },
  actions: {
    login(context, data){
      Auth.signInWithEmailAndPassword(data.email, data.password)
        .then((user) => {
          //can use user as arg
          context.commit("login", user)
          //this.$router.replace("/");
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
