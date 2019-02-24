<template>
  <v-container xs12 sm4 text-xs-center>
    <div id="Depoimentos">
      <v-card class="mx-auto" color="#ffffff" white max-width="400">
        <v-card-title primary-title>
          <div>
            <h1 class="HeadLine mb-0">informações</h1>
          </div>
        </v-card-title>
        <v-tabs
      v-model="active"
      color="black"
      dark
      slider-color="pink"
    >
      <v-tab
        v-for="n in 3"
        :key="n"
        ripple
      >
        Item {{ n }}

      </v-tab>
      <v-tab-item
        v-for="n in 3"
        :key="n"
      >
        <v-card flat>
          <v-card-text>{{ text }}</v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs>

    <div class="text-xs-center mt-3">
      <v-btn @click="next">next tab</v-btn>
    </div>
      </v-card>
    </div>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        active: null,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      }
    },
    methods: {
      next () {
        const active = parseInt(this.active)
        this.active = (active < 2 ? active + 1 : 0)
      }
    }
  }
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
