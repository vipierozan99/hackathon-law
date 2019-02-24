<template>
    <div id="chatbox">
        <v-card @click="openDialog">
            <v-card-title>{{memberCheck()}}</v-card-title>
        </v-card>
        <v-dialog
            v-model="dialog">
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
                <v-btn flat @click="sendMessage" color="#E91E63">Enviar</v-btn>
            </v-card-actions>
                
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
import Message from "@/components/Message.vue"
import {Datab} from "@/firebase.js"
import store from "@/store.js"



export default {
    name:"ClientChatBox",
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
            messageToSend:null,
            dialog:false
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
                author: this.chatRoom.members[1],
                text: this.messageToSend
            }
            var newMessages = this.chatRoom.messages
            newMessages.push(newMessage)
            Datab.doc(this.docRefPath).update({
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
        openDialog(){
            this.dialog=true
            return true
        },
    }

}
</script>

<style>

</style>
