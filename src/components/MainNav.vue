<template>
    <div id="MainNav" >
        <v-navigation-drawer v-if="currentUser!=null"
      v-model="drawer"
      fixed
      app
    >
      <v-list dense>
        <v-list-tile to="/">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Feed</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile v-if="currentUserRole=='client'" to="getHelp">
          <v-list-tile-action>
            <v-icon>contact_mail</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Me ajude!</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
         <v-list-tile v-if="currentUserRole=='voluntary'" to="giveHelp">
          <v-list-tile-action>
            <v-icon>contact_mail</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Ajude alguém!</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="Black" dark fixed app>
      <v-toolbar-side-icon @click.stop="toggleDrawer"></v-toolbar-side-icon>
      <v-toolbar-title>JurisMulher</v-toolbar-title>
      <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat to="login" v-if="currentUser==null" >Login</v-btn>
      <v-btn flat to="registro" v-if="currentUser==null"  >Registrar</v-btn>
      
      <v-btn
        @click="logout"
        style="margin:auto"
        large
        v-if="currentUser!=null"
        color="success"
      >Hello {{currentUserRole}} {{currentUser.email}}, Logout!</v-btn>
   
    </v-toolbar-items>
    </v-toolbar>
    </div>
</template>

<script>
import { Auth, Datab } from "../firebase.js";
import store from "@/store.js"

export default {
  name:"MainNav",
  data(){
    return{
      drawer: null,
    }
  },
  props: {
    source: String
  },
  methods:{
    toggleDrawer(){
      this.drawer = !this.drawer
    },
    logout() {
      store.dispatch("logout");
      this.$router.replace("/");
    }
  },
  computed:{
    currentUser(){
      if(store.state.currentUser==null){
        return null
      }
      else{
      return store.state.currentUser.user
      }
    },
    currentUserRole(){
      return store.state.currentUserRole
    }
  }
 
}
</script>

<style>

</style>
