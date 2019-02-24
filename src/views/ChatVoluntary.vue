<template>
    <div id="chatDirect">
        <v-list>
          <v-list-tile
            v-for="chat in chatRoomList"
            :key="chat.id"
            avatar 
          >
            <v-list-tile-avatar>
              <v-icon>account_box</v-icon>
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title @click="openChat(chat)">{{chat.members[1]}}</v-list-tile-title>
            </v-list-tile-content>

            
          </v-list-tile>
        </v-list>

        <v-dialog
        v-model="dialog"
        width="800"
        >
            <v-card v-if="dialogChat">
                <v-card-title
                class="headline grey lighten-2"
                primary-title
                >
                {{dialogChat.members[1]}}
                </v-card-title>
                <div id="messageBox" style="min-height:200px">
                    <message v-for="(message,index) in dialogChat.messages" :key="index" :author="message.author" :text="message.text"></message>
                </div>
                <v-card-actions>
                    <v-text-field
                        label="Digite sua mensagem"
                        v-model="messageToSend"
                    ></v-text-field>
                    <v-btn flat @click="sendMessage" color="green">Enviar</v-btn>
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
    name:"chatVoluntary",
    components:{
        Message
    },
    computed:{
        chatRooms(){
            return store.state.currentUserChatRooms
        },
    },
    mounted(){
        store.state.currentUserChatRooms.forEach(docRef => {
            docRef.get().then(docSnap=>{
                var data = docSnap.data()
                data.path = docRef.path
                this.chatRoomList.push(data)
            })
        });
    },
    data(){
        return{
            chatRoomList:[],
            dialog: false,
            dialogChat: null,
            messageToSend:null
        }
    },
    methods:{
        openChat(chat){
            console.log(chat)
            this.dialog = true
            this.dialogChat = chat
        },
        sendMessage(){
            if(!this.messageToSend){
                return false
            }
            var newMessage = {
                author: this.dialogChat.members[0],
                text: this.messageToSend
            }
            this.dialogChat.messages.push(newMessage)
            Datab.doc(this.dialogChat.path).update({
                messages:this.dialogChat.messages
            }) 
        }
    }

}
</script>

<style>

</style>
