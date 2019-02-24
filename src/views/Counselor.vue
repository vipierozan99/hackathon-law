<template> 
    <div id="Counselor">
        <v-card>
        
        <v-card-title>
          <div v-if="chatRoom">
            <span class="headline mb-0" >Alguém achou voce!</span><br>
            <span class="grey--text">Fale agora com sua conselheira!</span><br>
          </div>
          <div v-if="!chatRoom">
            <span  class="headline mb-0">Você ainda nao foi encontrada :(</span><br>
            <span class="grey--text">Mas aguarde, logo algum anjo te achará</span><br>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn v-if="chatRoom" flat @click="openChat(chatRoom)" color="green">Converse!</v-btn>
        </v-card-actions>
      </v-card>

      <v-dialog
        v-model="dialog"
        width="800"
        >
            <v-card v-if="dialogChat">
                <v-card-title
                class="headline grey lighten-2"
                primary-title
                >
                {{dialogChat.members[0]}}
                </v-card-title>
                <div id="messageBox" style="min-height:200px">
                    <message v-for="(message,index) in dialogChat.messages" :key="index" :author="message.author" :text="message.text" :wasSent="wasSent(message.author)"></message>
                </div>
                <v-card-actions>
                    <v-form ref="sendMessageForm" @submit="sendMessage" style="width:100%">
                        <v-text-field
                        label="Digite sua mensagem"
                        v-model="messageToSend"
                        ></v-text-field>
                        
                    </v-form>
                    <v-btn flat type="submit" @click="sendMessage" color="green">Enviar</v-btn>
                </v-card-actions>
                
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
import store from "@/store.js"
import {Datab} from "@/firebase.js"
import Message from "@/components/Message.vue"
export default {   
    name:"Counselor",
    components:{
        Message
    },
    computed:{
        chatRooms(){
            return store.state.currentUserChatRooms
        },
    },
    mounted(){
        store.state.currentUserChatRooms[0].get().then(docSnap=>{
                var data = docSnap.data()
                data.path = store.state.currentUserChatRooms[0].path
                this.chatRoom = data
            })
        
    },
    data(){
        return{
            chatRoom:null,
            dialog: false,
            dialogChat: null,
            messageToSend:null
        }
    },
    methods:{
        openChat(chat){
            this.dialog = true
            this.dialogChat = chat
        },
        sendMessage(){
            if(!this.messageToSend){
                return false
            }
            var newMessage = {
                author: this.dialogChat.members[1],
                text: this.messageToSend
            }
            this.dialogChat.messages.push(newMessage)
            Datab.doc(this.dialogChat.path).update({
                messages:this.dialogChat.messages
            }) 
            this.messageToSend=null
        },
        wasSent(author){
            if(author==store.state.currentUser.user.email){
                return true
            }else{
                return false
            }
        },
    }


}
</script>

<style>

</style>
