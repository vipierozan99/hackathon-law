<template> 
    <div id="ClientChatList">
        
        
        <div v-if="chatRoomsList.length==0">
            <span  class="headline mb-0">Você ainda nao foi encontrada :(</span><br>
            <span class="grey--text">Mas aguarde, logo algum anjo te achará</span><br>
          </div>
          
        
        <div v-if="chatRoomsList.length!=0">
            <span  class="headline mb-0">Você ainda nao foi encontrada :(</span><br>
            <span class="grey--text">Mas aguarde, logo algum anjo te achará</span><br>
            <client-chat-box v-for="chatRef in chatRoomsList" :key="chatRef.path" :docRefPath="chatRef.path"/>
          </div>
        

    </div>
</template>

<script>
import store from "@/store.js"
import {Datab} from "@/firebase.js"
import ClientChatBox from "@/components/ClientChatBox.vue"



export default {   
    name:"ClientChatList",
    components:{
        ClientChatBox
    },
    computed:{
        chatRoomsList(){
            if(this.user.length!=0){
                return this.user[0].chatRooms
            }else{
                return []
            }
        }
    },
    firestore(){
        return{
            user: Datab.collection("Users").where("email","==",store.state.currentUser.user.email)
        }
    },
  
    data(){
        return{
            dialog: false,
            messageToSend:null,

        }
    },
    methods:{
        openChat(){
            this.dialog = true
        },
        debug(){
            console.log(this.chatRoomsList)
        }
    }


}
</script>

<style>

</style>
