<template>
  <GameContainer>
    <ControlContainer>
      <Button :onClick="onRestartGame"> Restart Game </Button>
      <Score title="score">
        {{ score }}
      </Score>
      <Button :onClick="onToggleGameMode"> {{ gameMode }} </Button>
    </ControlContainer>
    <Board />
    <TimerContainer v-show="remainTime && gameMode === 'democracy'">
      <Score title="Remaining Time">
        {{ `${remainTime}s` }}
      </Score>
    </TimerContainer>
  </GameContainer>
</template>

<script>
import Vue from 'vue'
import { Component, Watch } from 'vue-property-decorator'
import styled from 'vue-styled-components'

import Board from '@/components/Board'
import Button from '@/components/Button'
import Score from '@/components/Score'
import { State } from 'vuex-class'
import { DIRECTIONS, CHANNEL } from '@/util/contants'

const GameContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
const ControlContainer = styled.div`
  text-align: center;
`
const TimerContainer = styled.div`
  position: absolute;
  bottom: 10px;
`

@Component({
  components: {
    Board,
    Button,
    Score,
    GameContainer,
    ControlContainer,
    TimerContainer,
  },
})
export default class Game extends Vue {
  @State((state) => state.socket.isConnected) isConnected
  @State((state) => state.game.grid) grid
  @State((state) => state.game.status) status
  @State((state) => state.game.score) score
  @State((state) => state.game.gameMode) gameMode
  @State((state) => state.game.votingEndsAt) votingEndsAt
  @State((state) => state.game.votes) votes
  @State((state) => state.game.userVoted) userVoted

  remainTime = 0

  @Watch('gameMode', { immediate: true })
  onGameModeChanged() {
    if (this.gameMode === 'democracy') {
      window.setInterval(() => {
        this.remainTime = (Date.parse(this.votingEndsAt) - new Date()) / 1000
      }, 200)
    } else {
      window.clearInterval()
    }
  }

  canMove() {
    return !this.userVoted && this.status === 'playing'
  }

  onRestartGame() {
    this.$store.dispatch('socket/restartGame')
  }

  onToggleGameMode() {
    this.$store.dispatch('socket/toggleGameMode')
  }

  onKeyDown(event) {
    switch (event.key) {
      case 'ArrowUp':
        if (this.canMove()) {
          this.$store.dispatch('socket/makeMove', DIRECTIONS.UP)
        }
        break
      case 'ArrowDown':
        if (this.canMove()) {
          this.$store.dispatch('socket/makeMove', DIRECTIONS.DOWN)
        }
        break
      case 'ArrowLeft':
        if (this.canMove()) {
          this.$store.dispatch('socket/makeMove', DIRECTIONS.LEFT)
        }
        break
      case 'ArrowRight':
        if (this.canMove()) {
          this.$store.dispatch('socket/makeMove', DIRECTIONS.RIGHT)
        }
        break
    }
  }

  mounted() {
    window.addEventListener('keydown', this.onKeyDown)

    if (this.isConnected) {
      this.$store.dispatch('socket/joinChannel', CHANNEL.GAME)
    }
  }

  unmounted() {
    window.removeEventListener('keydown', this.onKeyDown)
  }
}
</script>
