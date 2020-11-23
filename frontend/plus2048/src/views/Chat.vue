<template>
  <ChatContainer>
    <MessageContainer ref="messageContainer">
      <message :messages="messages"></message>
    </MessageContainer>
    <InputContainer>
      <MessageInput
        type="text"
        placeholder="Type here..."
        @keydown="(e) => e.stopPropagation()"
        @keyup.enter="sendMessage"
        v-model="content"
      />
      <v-btn icon class="blue--text" @click="sendMessage">
        <v-icon>mdi-send-outline</v-icon>
      </v-btn>
    </InputContainer>
  </ChatContainer>
</template>

<script>
import Vue from 'vue'
import { Component, Watch } from 'vue-property-decorator'
import { State } from 'vuex-class'
import styled from 'vue-styled-components'
import Message from '@/components/Message'
import { CHANNEL } from '@/util/contants'

const ChatContainer = styled.div`
  width: 300px;
`

const MessageContainer = styled.div`
  box-sizing: border-box;
  height: calc(100vh - 9.5rem);
  overflow-y: auto;
  padding: 10px;
  background-color: #f2f2f2;
`

const InputContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  bottom: 0;
  height: 4.9rem;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 -5px 10px -5px rgba(0, 0, 0, 0.2);
`

const MessageInput = styled.input`
  left: 2.5rem;
  padding: 1rem;
  width: 100%;
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 1.25rem;
`

@Component({
  components: {
    Message,
    ChatContainer,
    MessageContainer,
    InputContainer,
    MessageInput,
  },
})
export default class Chat extends Vue {
  @State((state) => state.chat.messages) messages
  @State((state) => state.socket.isConnected) isConnected
  @State((state) => state.chat.username) username

  @Watch('messages', { immediate: true })
  onMessageChanged() {
    this.$nextTick(() => {
      const el = this.$refs.messageContainer.$el
      el.scrollTop = el.scrollHeight
    })
  }

  content = ''

  mounted() {
    if (this.isConnected) {
      this.$store.dispatch('socket/joinChannel', CHANNEL.CHAT)
    }
  }

  sendMessage(e) {
    e.preventDefault()

    const trimmed = this.content.trim()
    if (trimmed === '') {
      return
    }

    this.$store.dispatch('socket/sendNewMessage', trimmed)

    this.$nextTick(() => {
      const el = this.$refs.messageContainer.$el
      el.scrollTop = el.scrollHeight
    })

    this.content = ''
  }
}
</script>
