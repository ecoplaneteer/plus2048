<template>
  <GameMessageContainer>
    <p> {{ status === 'game_won' ? 'You won' : 'Game over' }} </p>
    <Button :onClick="onTryAgain">
      Try again
    </Button>
  </GameMessageContainer>
</template>

<script>
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import styled from 'vue-styled-components'
import Button from './Button'

const GameMessageContainer = styled.div`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(238, 228, 218, 0.5);
  z-index: 100;
  text-align: center;
  -webkit-animation: fade-in 800ms ease 1200ms;
  -moz-animation: fade-in 800ms ease 1200ms;
  animation: fade-in 800ms ease 1200ms;
  -webkit-animation-fill-mode: both;
  -moz-animation-fill-mode: both;
  animation-fill-mode: both;
  box-sizing: border-box;

  p {
    font-size: 60px;
    font-weight: bold;
    height: 60px;
    line-height: 60px;
    margin-top: 222px;
  }
`

@Component({
  components: {
    GameMessageContainer,
    Button,
  },
})
export default class GameMessage extends Vue {
  @Prop(String) status
  onTryAgain() {
    this.$store.dispatch('socket/restartGame')
  }
}
</script>
