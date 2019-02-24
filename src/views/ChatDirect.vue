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
    </div>
</template>

<script>
import store from "@/store.js"
export default {
    name:"chatDirect",
    computed:{
        chatRooms(){
            return store.state.currentUserChatRooms
        },
    },
    mounted(){
        store.state.currentUserChatRooms.forEach(docRef => {
            docRef.get().then(docSnap=>{
                this.chatRoomList.push(docSnap.data())
            })
        });
    },
    data(){
        return{
            chatRoomList:[]
        }
    },
    methods:{
        openChat(chat){
            console.log(chat)
        }
    }

}
</script>

<style>

</style>
