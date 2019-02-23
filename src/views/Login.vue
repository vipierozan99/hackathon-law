<template>
  <div class="login">
    <section>
      <v-card white class="login-card">
        <v-card-title>
          <h1 style="margin:auto">Login</h1>
        </v-card-title>
        <v-form ref="form" @submit="login">
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
          <div style="text-align:center; width:100%; padding:10px;">
            <v-btn round class="login-btn" type="submit" color="#F5F5F5">Login</v-btn>
          </div>
        </v-form>
      </v-card>
    </section>
  </div>
</template>

<script>
import { Auth } from "../firebase";
import store from "@/store";
export default {
  name: "login",
  data() {
    return {
      email: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+/.test(v) || "E-mail must be valid"
      ],
      password: "",
      passRules: [v => !!v || "Password is required"]
    };
  },
  methods: {
    login() {
      store.dispatch("login", { email: this.email, password: this.password });
      this.$router.replace("dashboard");
    }
  }
};
</script>

<style>
.login-btn {
  height: 60px;
}

.login-card {
  max-width: 600px;
  margin: auto;
  margin-top: 30px;
  border-radius: 10px 10px 10px 10px;
  -moz-border-radius: 10px 10px 10px 10px;
  -webkit-border-radius: 10px 10px 10px 10px;
  border: 0px solid #000000;
}

.botao{
  border-radius: 38px 38px 38px 38px;
  -moz-border-radius: 38px 38px 38px 38px;
  -webkit-border-radius: 38px 38px 38px 38px;
  border: 0px solid #000000;
}
</style>
