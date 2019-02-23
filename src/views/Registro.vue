<template>
  <div id="registro">
    <v-layout row justify-space-between>
      <v-flex xs12 sm6>
        <register-form-client/>
      </v-flex>
      <v-flex xs12 sm6>
        <register-form-voluntary/>
      </v-flex>
    </v-layout>

    <v-layout row justify-space-between>
      <v-flex xs12 >
        <depoimentos/>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import Depoimentos from "@/components/Depoimentos";
import RegisterFormClient from "@/components/RegisterFormClient";
import RegisterFormVoluntary from "@/components/RegisterFormVoluntary";

export default {
  name: "Registro",
  components: {
    Depoimentos,
    RegisterFormClient,
    RegisterFormVoluntary
  }
};
</script>

<style>
</style>
