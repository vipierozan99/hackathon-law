<template>
    <div id="GiveHelp">
    <v-layout row wrap>
        <v-flex xs12 sm6  v-for="(helpRequest,index) in helpRequestCollection" :key="index">
            <v-card style="margin:30px">
                <v-card-title primary-title>
                <div>
                    <h3 class="headline mb-0">{{helpRequest.title}}</h3>
                    <div> {{ helpRequest.description }} </div>
                </div>
                </v-card-title>
                <v-layout justify-start>
                    <v-flex v-for="(tag,index) in helpRequest.tags" :key="index" class="text-xs-center">
                        <v-chip>{{tag}}</v-chip>
                    </v-flex>
                </v-layout>

                <v-card-actions>
                <v-btn flat color="Black" @click="openChat(helpRequest.client)">Ajude-a!</v-btn>
                </v-card-actions>
            </v-card>
        </v-flex>
    </v-layout>
    </div>
</template>

<script>
import {Datab} from "@/firebase.js"
import store from "@/store.js"

export default {
    name:"GiveHelp",
    firestore(){
        return{
            helpRequestCollection: Datab.collection("HelpRequests")
        }
    },
    methods:{
        openChat(clientEmail){
            //creating chatroom
            Datab.collection("ChatRooms").add({
                members:[store.state.currentUser.user.email, clientEmail],
                messages:[]
            }).then(chatRoomRef=>{
                var query = Datab.collection("Users").where("email","==",clientEmail)
                query.get().then((userSnapshot)=>{
                    //console.log(userSnapshot.docs[0])
                    var newchatRooms = userSnapshot.docs[0].data().chatRooms
                    newchatRooms.push(chatRoomRef)
                    userSnapshot.docs[0].ref.update({
                        chatRooms: newchatRooms
                    })
                })
            })
            
            //adding to chatRooms array in users
            //console.log("chatroomref set")
            
                
            //context.commit("loginChatRooms", snapshot.docs[0].data().chatRooms)
        
        }
    }
}
</script>

<style>

</style>
