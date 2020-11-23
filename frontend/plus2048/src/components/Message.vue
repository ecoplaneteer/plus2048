<template>
  <div>
    <MessageContainer
      v-for="(message, index) in messages"
      v-bind:key="index"
      :own="message.user === username"
    >
      <Username v-if="index > 0 && messages[index - 1].user != message.user">{{
        message.user
      }}</Username>
      <Username v-if="index == 0">{{ message.user }}</Username>
      <Content :own="message.user === username">
        <div v-html="message.body"></div>
      </Content>
    </MessageContainer>
  </div>
</template>

<script>
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { State } from 'vuex-class'
import styled from 'vue-styled-components'

const MessageProps = {
  own: Boolean,
}

const MessageContainer = styled('div', MessageProps)`
  ${(props) => (props.own ? 'text-align: right' : '')};
  margin-bottom: 3px;
`
const Content = styled('div', MessageProps)`
  padding: 8px;
  background-color: ${(props) => (props.own ? 'lightgreen' : 'lightskyblue')};
  border-radius: 10px;
  display: inline-block;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 2px 1px -1px rgba(0, 0, 0, 0.12);
  max-width: 90%;
  word-wrap: break-word;
  margin-top: 5px;
`

const Username = styled.div`
  font-size: 18px;
  font-weight: bold;
`
@Component({
  components: {
    MessageContainer,
    Content,
    Username,
  },
})
export default class Message extends Vue {
  @Prop(Array) messages
  @State((state) => state.chat.username) username
}
</script>
