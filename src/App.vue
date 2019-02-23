<template>
  <v-app>
    <mainNav/>
    
    <v-content>
      <router-view/>
    </v-content>
    <v-footer dark>
      <span >&copy; 2019</span>
    </v-footer>
</v-app>
</template>

<script>
import MainNav from "@/components/MainNav"
export default {
  name: 'App',
  components:{
    MainNav
  }

  
}
</script>
 <style>
 
 </style>
 