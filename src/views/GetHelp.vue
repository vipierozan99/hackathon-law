<template>
  <div id="getHelp">
    <v-card white height="460px" width="50%" style="margin:auto;padding:10px">
      <v-card-title>
        <h1>O que está acontecendo com você?</h1>
      </v-card-title>
      <v-form ref="helpRequestForm" @submit.prevent="createHelpRequest">
        <v-text-field
          v-model="requestTitle"
          label="Título do Pedido"
          :rules="requiredRule"
          required
        ></v-text-field>
        <v-textarea
          v-model="requestDesc"
          label="Descrcrição do Pedido"
          :rules="requiredRule"
          required
          box
          auto-grow
        ></v-textarea>

        <v-select v-model="tags" :items="tagOptions" attach chips label="Tags" multiple></v-select>

        <div style="text-align:right; width:100%; padding:0; ">
          <v-layout align-end justify-start row reverse fill-height>
            <v-btn dark color="botao" style="height:40px;" type="submit">Criar</v-btn>
          </v-layout>
        </div>
      </v-form>
    </v-card>
  </div>
</template>

<script>
import { Datab } from "@/firebase.js";
import store from "@/store.js";

export default {
  name: "getHelp",
  data() {
    return {
      requestTitle: null,
      requestDesc: null,
      requiredRule: [v => !!v || "This field is required"],
      tagOptions: ["violencia fisica", "violencia verbal", "violencia sexual"],
      tags: []
    };
  },
  methods: {
    createHelpRequest() {
      if (!this.$refs.helpRequestForm.validate()) {
        return false;
      }
      Datab.collection("HelpRequests")
        .add({
          title: this.requestTitle,
          description: this.requestDesc,
          client: store.state.currentUser.user.email,
          tags: this.tags
        })
        .then(() => {
          this.$router.replace("/");
        });
    }
  }
};
</script>

<style>
</style>
