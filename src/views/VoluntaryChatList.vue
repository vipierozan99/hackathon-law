<template>
    <div id="VoluntaryChatList" style="margin-top:30px;margin-bottom:30px">
        <div class="voluntaryJumbo">
            <h1 style="margin:auto; color:white; text-align:center">Aqui estão as mulheres que você ajuda!</h1>
            <div style="width:90%;height:90%;margin:auto;">
                <voluntary-chat-box v-for="chatRef in chatRoomsList" :key="chatRef.path" :docRefPath="chatRef.path"/>
            </div>
        </div>
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
.voluntaryJumbo{
    border-radius: 28px 28px 28px 28px;
    -moz-border-radius: 28px 28px 28px 28px;
    -webkit-border-radius: 28px 28px 28px 28px;
    border: 0px solid #000000;
    background-color: #292723;
    margin: auto;
    max-width: 800px;
    height:400px;
    padding: 20px
}

</style>
