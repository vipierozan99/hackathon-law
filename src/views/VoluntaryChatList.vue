<template>
    <div id="VoluntaryChatList">
        <v-list>
            <voluntary-chat-box v-for="chatRef in chatRoomsList" :key="chatRef.path" :docRefPath="chatRef.path"/>
        </v-list>
    </div>
</template>

<script>
import store from "@/store.js"
import {Datab} from "@/firebase.js"
import VoluntaryChatBox from "@/components/VoluntaryChatBox.vue"

export default {
    name:"VoluntaryChatList",
    components:{
        VoluntaryChatBox
    },
    computed:{
        chatRoomsList(){
            return store.state.currentUserChatRooms
        }
    },
    methods:{
        debug(){
            console.log(this.chatRoomsList)
        }
    }
}
</script>

<style>

</style>
