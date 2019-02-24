<template>
<div class="RegisterFormClient">
    <v-card dark class="login-card">
      <v-card-title>
        <h1 style="margin:auto">Quero ajudar</h1>
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

          <v-text-field
            v-model="OABNumber"
            :rules="OABNumberRules"
            :counter="7"
            label="Numero OAB"
            required
          ></v-text-field>
        </v-container>

       
        <div style="text-align:right; width:100%; padding:10px;">
          <v-btn round Class="letrablack" type="submit" color="#E91E63" >Register</v-btn>
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
      OABNumber:"",
      OABNumberRules: [
        v => !!v || 'Name is required',
        v => v.length <= 7 || 'Name must be less than 7 Numbers'
      ],
    };
  },
  methods: {
    register() {
        store.dispatch("register", {email:this.email, password:this.password, role:'voluntary',oab:this.OABNumber})
        this.$router.replace("login");
    }
  }

}
</script>

<style>
.letrablack{
  color: white;
}
</style>
