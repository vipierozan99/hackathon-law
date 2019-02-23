<template>
    <div id="GiveHelp">
        <v-layout>
    <v-flex xs12 sm4  v-for="(helpRequest,index) in helpRequestCollection" :key="index">
      <v-card style="margin:30px">
        
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{helpRequest.title}}</h3>
            <div> {{ helpRequest.description }} </div>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn flat color="orange">Ajude-a!</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>

    </div>
</template>

<script>
import {Datab} from "@/firebase.js"

export default {
    name:"GiveHelp",
    
    firestore(){
        return{
            helpRequestCollection: Datab.collection("HelpRequests")
        }
    }
}
</script>

<style>

</style>
