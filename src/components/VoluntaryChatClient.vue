<template>
    <div id="chatbox">
        <v-card >
            <v-card-title
            class="headline grey lighten-2"
            primary-title
            >
            {{memberCheck()}}
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
    </div>
</template>

<script>
import Message from "@/components/Message.vue"
import {Datab} from "@/firebase.js"
import store from "@/store.js"



export default {
    name:"VoluntaryChatClient",
    components:{
        Message
    },
    firestore(){
        return{
            chatRoom: Datab.doc(this.docRefPath)
        }
    },
    data(){
        return{
            messageToSend:null
        }
    },
    props:{
        docRefPath:null
    },
    methods:{
        sendMessage(){
            if(!this.messageToSend){
                return false
            }
            var newMessage = {
                author: this.chatRoom.members[0],
                text: this.messageToSend
            }
            var newMessages = this.chatRoom.messages
            newMessages.push(newMessage)
            this.chatRoom.update({
                messages: newMessages
            })
            
        },
        wasSent(author){
            if(author==store.state.currentUser.user.email){
                return true
            }else{
                return false
            }
        },
        memberCheck(){
            if(this.chatRoom.members){
                return this.chatRoom.members[0]
            }
            else{
                return ''
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
