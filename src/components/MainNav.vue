<template>
  <div id="MainNav">
    <v-navigation-drawer v-if="currentUser!=null" v-model="drawer" fixed app>
      <v-list dense>
        <v-list-tile to="/dashboard">
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
        <v-list-tile v-if="currentUserRole=='client'" to="ClientChatList">
          <v-list-tile-action>
            <v-icon>contact_mail</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Meu Pedido</v-list-tile-title>
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
        <v-list-tile v-if="currentUserRole=='voluntary'" to="VoluntaryChatList">
          <v-list-tile-action>
            <v-icon>contact_mail</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Meus atendimentos</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="Black" dark fixed app>
      <v-toolbar-side-icon v-if="currentUser!=null" @click.stop="toggleDrawer"></v-toolbar-side-icon>
      <v-toolbar-title>
        <v-layout justify-start row>
          <v-flex xs4>
            <v-btn dark to="/">
            <v-card class="backLogozinho">
              <v-img height="40px" width="30px" src="https://firebasestorage.googleapis.com/v0/b/hackathon-law.appspot.com/o/Logo2brave.jpg?alt=media&token=d17ff5c8-7b84-4e43-aa1b-1bab97fbebcb"></v-img>
            </v-card>
              <div style="margin-left:15px">2BRAVE</div>
            </v-btn>
          </v-flex>
        </v-layout>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat to="login" v-if="currentUser==null">Login</v-btn>
        <v-btn flat to="registro" v-if="currentUser==null">Registrar</v-btn>

        <v-btn
          @click="logout"
          style="margin:auto"
          large
          v-if="currentUser!=null"
          light
          color="#E91E63"
        >Hello {{currentUserRole}} {{currentUser.email}}, Logout!</v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
import store from "@/store.js";

export default {
  name: "MainNav",
  data() {
    return {
      drawer: null
    };
  },
  props: {
    source: String
  },
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer;
    },
    logout() {
      store.dispatch("logout");
      this.$router.replace("/");
    }
  },
  computed: {
    currentUser() {
      if (store.state.currentUser == null) {
        return null;
      } else {
        return store.state.currentUser.user;
      }
    },
    currentUserRole() {
      return store.state.currentUserRole;
    }
  }
};
</script>

<style>
.logo {
  width: 50%;
  height: 100%;
}
.backLogozinho {
  border-radius: 20px 0px 20px 0px;
  -moz-border-radius: 20px 0px 20px 0px;
  -webkit-border-radius: 20px 0px 20px 0px;
  border: 0px solid #000000;
  background: rgba(255, 255, 255, 1);
  background: -moz-linear-gradient(
    left,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 1) 51%,
    rgba(5, 5, 5, 1) 51%,
    rgba(5, 5, 5, 1) 100%
  );
  background: -webkit-gradient(
    left top,
    right top,
    color-stop(0%, rgba(255, 255, 255, 1)),
    color-stop(51%, rgba(255, 255, 255, 1)),
    color-stop(51%, rgba(5, 5, 5, 1)),
    color-stop(100%, rgba(5, 5, 5, 1))
  );
  background: -webkit-linear-gradient(
    left,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 1) 51%,
    rgba(5, 5, 5, 1) 51%,
    rgba(5, 5, 5, 1) 100%
  );
  background: -o-linear-gradient(
    left,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 1) 51%,
    rgba(5, 5, 5, 1) 51%,
    rgba(5, 5, 5, 1) 100%
  );
  background: -ms-linear-gradient(
    left,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 1) 51%,
    rgba(5, 5, 5, 1) 51%,
    rgba(5, 5, 5, 1) 100%
  );
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 1) 51%,
    rgba(5, 5, 5, 1) 51%,
    rgba(5, 5, 5, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#050505', GradientType=1 );
  width: 30px;
  height: 40px;
}
</style>
