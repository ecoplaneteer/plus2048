<template>
  <StyledContainer>
    <Game />
    <Chat />
  </StyledContainer>
</template>

<script>
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import Game from '@/views/Game'
import Chat from '@/views/Chat'

import styled from 'vue-styled-components'

const StyledContainer = styled.div`
  display: flex;
  height: 100%;
`

@Component({
  components: {
    Game,
    Chat,
    StyledContainer,
  },
})
export default class Container extends Vue {}
</script>
