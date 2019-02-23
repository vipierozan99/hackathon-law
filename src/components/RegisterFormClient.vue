<template>
<div class="RegisterFormClient">
    <v-card White class="login-card">
      <v-card-title>
        <h1 style="margin:auto">Preciso de ajuda</h1>
      </v-card-title>
      <v-form ref="form" @submit="register">
        <v-container>
          <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
          <v-text-field
            v-model="password"
            :rules="passRules"
            type="password"
            label="Password"
            required
          ></v-text-field>
           
        </v-container>
        <div style="text-align:right; width:100%; padding:10px;">
          <v-btn dark class="botao" type="submit" color="Black">Register</v-btn>
        </div>
      </v-form>
    </v-card>
  </div>
    
</template>

<script>
import store from "@/store.js"

export default {
    name:"RegisterFormClient",
    data() {
    return {
      email: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+/.test(v) || "E-mail must be valid"
      ],
      password: "",
      passRules: [v => !!v || "Password is required"
      ],
      
      
    };
  },
  methods: {
    register() {
        store.dispatch("register", {email:this.email, password:this.password, role:"client",oab:null})
        this.$router.replace("login");
    }
  }

}
</script>

<style>
.botao{
  border-radius: 38px 38px 38px 38px;
  -moz-border-radius: 38px 38px 38px 38px;
  -webkit-border-radius: 38px 38px 38px 38px;
  border: 0px solid #000000;
}
</style>
