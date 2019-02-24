<template>
  <div class="BoxChat">
    <v-layout justify-space-between row reverse>
      <v-card light class="balonMe">
        <mensage/>
      </v-card>
    </v-layout>
  </div>
</template>

<script>
import mensage from "@/components/mensage";

export default {
  name: "Depoimentos",
  components: {
    mensage
  }
};
</script>

<style>
.balonMe {
  border-radius: 125px 0px 125px 125px;
  -moz-border-radius: 125px 0px 125px 125px;
  -webkit-border-radius: 125px 0px 125px 125px;
  border: 10px solid #000000;
}
.balonYou {
  border-radius: 0px 125px 125px 125px;
  -moz-border-radius: 0px 125px 125px 125px;
  -webkit-border-radius: 0px 125px 125px 125px;
  border: 10px solid #000000;
}
</style>
