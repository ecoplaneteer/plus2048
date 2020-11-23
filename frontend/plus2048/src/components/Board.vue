<template>
  <BoardContainer>
    <div v-for="(row, r_index) in grid" :key="`row-${r_index}`">
      <Cell v-for="(col, c_index) in row" :key="`col-${c_index}`" />
    </div>
    <Tile
      v-for="tile in tiles"
      :tile="tile"
      :key="`row-${tile.row}-col-${tile.col}`"
    />

    <GameMessage v-if="status !== 'playing'" :status="status" />
  </BoardContainer>
</template>

<script>
import Vue from 'vue'
import { Component, Watch } from 'vue-property-decorator'
import { State } from 'vuex-class'

import styled from 'vue-styled-components'
import Tile from './Tile'
import Cell from './Cell'
import GameMessage from './GameMessage'

const BoardContainer = styled.div`
  width: 550px;
  height: 550px;
  padding: 5px;
  background-color: #f2f2f2;
  border-radius: 5px;
  outline: none;
  position: relative;
`

@Component({
  components: {
    BoardContainer,
    Cell,
    Tile,
    GameMessage,
  },
})
export default class Board extends Vue {
  @State((state) => state.game.grid) grid
  @State((state) => state.game.status) status

  tiles = []
  @Watch('grid', { immediate: true })
  onGridChagne(newGrid, oldGrid) {
    if (!oldGrid || !newGrid) {
      return
    }
    let new_tiles = []
    for (let i = 0; i < newGrid.length; i++) {
      const oldRow = oldGrid[i]
      const row = newGrid[i]
      for (let j = 0; j < row.length; j++) {
        if (row[j] !== 0) {
          new_tiles.push({
            row: i,
            col: j,
            value: row[j],
            new: oldRow[j] !== 0 && oldRow[j] !== row[j],
          })
        }
      }
    }
    this.tiles = new_tiles
  }
}
</script>
