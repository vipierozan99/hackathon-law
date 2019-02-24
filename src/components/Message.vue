<template>
  <div class="Message">
    <v-layout > 
      <v-card dark v-bind:class="getSentCSS()"> 
          <h3 >{{this.author}}</h3>
          <v-flex>
              <div class="headline mb-0">{{this.text}}</div>
          </v-flex>
        </v-card>
    </v-layout>
  </div>
</template>

<script>
export default {
  props:{
    author:String,
    text:String,
    wasSent: Boolean
  },
  methods:{
    getSentCSS(){
      if(this.wasSent){
        return "balonMe"
      }else{
        return "balonYou"
      }
    }
  }
};
</script>

<style>
.balonMe {
  border-radius: 125px 0px 125px 125px;
  -moz-border-radius: 125px 0px 125px 125px;
  -webkit-border-radius: 125px 0px 125px 125px;
  border: 10px solid #000000;
  margin-left:auto; margin-right:0;
}
.balonYou {
  border-radius: 0px 125px 125px 125px;
  -moz-border-radius: 0px 125px 125px 125px;
  -webkit-border-radius: 0px 125px 125px 125px;
  border: 10px solid #000000;
}
</style>
