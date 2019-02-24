<template> 
    <div id="ClientChatList" style="margin-top:30px">
        <div class="clientJumbo"> 
            <v-card light style="margin:auto;margin-top:80px">
        
        <div v-if="chatRoomsList.length==0" style="text-align:center">
            <span class="headline mb-0">Você ainda nao foi encontrada :(</span><br>
            <span class="grey--text">Mas aguarde, logo algum anjo te achará</span><br>
            <v-btn @click="refreshChatList">Atualizar</v-btn>
          </div>
          
        
        <div v-if="chatRoomsList.length!=0">
            <span  class="headline mb-0">Você foi encontrada !</span><br>
            <span class="grey--text">Fale agora com sua conselheira!</span><br>
            <client-chat-box v-for="chatRef in chatRoomsList" :key="chatRef.path" :docRefPath="chatRef.path"/>
          </div>
            </v-card>
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
            return store.state.currentUserChatRooms
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
        },
        refreshChatList(){
            var newVoluntaryChatRooms = this.user[0].chatRooms
            store.dispatch('updateChatRooms', newVoluntaryChatRooms)
        }
    }


}
</script>

<style>
.clientJumbo{
    border-radius: 28px 28px 28px 28px;
    -moz-border-radius: 28px 28px 28px 28px;
    -webkit-border-radius: 28px 28px 28px 28px;
    border: 0px solid #000000;
    background-color: #292723;
    margin: auto;
    width: 800px;
    height:400px;
    padding: 20px
}

</style>
