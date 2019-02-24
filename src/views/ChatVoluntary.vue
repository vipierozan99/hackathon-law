<template>
    <div id="chatDirect">
        <v-list>
          <v-list-tile
            v-for="chat in chatRooms"
            :key="chat.ref.path"
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
        <voluntary-chat-client v-if="dialogChat" :docRefPath="dialogChat.ref.path"/>
        </v-dialog>
        <v-btn flat @click="debug" color="green">debug</v-btn>
    </div>
</template>

<script>
import store from "@/store.js"
import {Datab} from "@/firebase.js"
import VoluntaryChatClient from "@/components/VoluntaryChatClient.vue"

export default {
    name:"chatVoluntary",
    components:{
        VoluntaryChatClient
    },
    created(){
        if(store.state.currentUserChatRooms.length==0){
            console.log("no requests")
        }else{
            console.log("trying query")
            store.state.currentUserChatRooms.forEach(docRef => {
                docRef.onSnapshot(querySnap=>{
                    var data = querySnap.data()
                    data.ref = querySnap.ref
                    this.$set(this.chatRooms,docRef.path,data)
                })
            });
        }
    },
    data(){
        return{
            chatRooms:{},
            dialog: false,
            dialogChat: null,
            messageToSend:null
        }
    },
    computed:{
        chatRoomsList(){
            var chatRoomsList = []
            for(var chatRoom in this.chatRooms){
                chatRoomsList.push(chatRoom)
            }
            return chatRoomsList
        }
    },
    methods:{
        openChat(chat){
            console.log(chat.ref.path)
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
            this.dialogChat.ref.update({
                messages:this.dialogChat.messages
            }) 
        },
        wasSent(author){
            if(author==store.state.currentUser.user.email){
                return true
            }else{
                return false
            }
        },
        debug(){
            console.log(this.chatRooms["ChatRooms/qe3zzNqj9CXNguVwWXKv"].ref.path)
        }

    }

}
</script>

<style>

</style>
