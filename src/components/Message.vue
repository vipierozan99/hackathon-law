<template>
  <div class="Message">
    <v-layout>  
        <h3 >{{this.author}}</h3>
        <v-flex>
            <div class="headline mb-0">{{this.text}}</div>
        </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  props:{
    author:String,
    text:String,
    wasSent: Boolean
  }
};
</script>

<style>
</style>
