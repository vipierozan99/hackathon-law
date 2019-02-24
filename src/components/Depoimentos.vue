<template>
  <v-container xs12 sm4 text-xs-center>
    <div id="Depoimentos">
      <v-card class="mx-auto" color="#ffffff" white max-width="400">
        <v-card-title primary-title>
          <div>
            <h1 class="HeadLine mb-0">informações</h1>
          </div>
        </v-card-title>
        <v-layout justify-space-between row reverse>
          <v-card light class="balonMe">
            <message/>
          </v-card>
        </v-layout>

        <v-layout justify-space-between row>
          <v-card dark class="balonYou">
            <message/>
          </v-card>
        </v-layout>
      </v-card>
    </div>
  </v-container>
</template>

<script>
import Message from "@/components/Message";

export default {
  name: "Depoimentos",
  components: {
    Message
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
