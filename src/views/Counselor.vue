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
          <v-btn v-if="chatRoom" flat @click="openChat()" color="green">Converse!</v-btn>
        </v-card-actions>
      </v-card>

      <v-dialog
        v-model="dialog"
        width="800"
        >
            <v-card v-if="chatRoom">
                <v-card-title
                class="headline grey lighten-2"
                primary-title
                v-text="chatRoom.members[0]"
                >
                
                </v-card-title>
                <div id="messageBox" style="min-height:200px">
                    <message v-for="(message,index) in chatRoom.messages" :key="index" :author="message.author" :text="message.text" :wasSent="wasSent(message.author)"></message>
                </div>
                <v-card-actions>
                    <v-form @submit="sendMessage" style="width:100%">
                        <v-text-field
                        label="Digite sua mensagem"
                        v-model="messageToSend"
                        ></v-text-field>
                        
                    </v-form>
                    <v-btn flat @click="sendMessage" color="green">Enviar</v-btn>
                    <v-btn flat @click="debug" color="green">debug</v-btn>
                </v-card-actions>
                
            </v-card>
        </v-dialog>
        <v-btn flat @click="debug" color="green">debug</v-btn>
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
    created(){
        if(store.state.currentUserChatRooms.length==0){
            console.log("not taken")
        }else{
            console.log("trying query")
            store.state.currentUserChatRooms[0].onSnapshot(querySnap=>{
                console.log(querySnap.data())
                var data = querySnap.data()
                data.ref = querySnap.ref
                this.chatRoom =  data
            })
        }

    },
    data(){
        return{
            dialog: false,
            messageToSend:null,
            chatRoom:null
        }
    },
    methods:{
        openChat(){
            this.dialog = true
        },
        sendMessage(){
            if(!this.messageToSend){
                return false
            }
            var newMessage = {
                author: this.chatRoom.members[1],
                text: this.messageToSend
            }
            this.chatRoom.messages.push(newMessage)
            this.chatRoom.ref.update({
                messages:this.chatRoom.messages
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
        debug(){
            console.log(this.chatRoom)
        }
    }


}
</script>

<style>

</style>
