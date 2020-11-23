<template>
  <TileContainer :tile="tile">
    {{ tile.value !== -1 ? tile.value : '' }}
  </TileContainer>
</template>

<script>
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import styled, { keyframes } from 'vue-styled-components'
import img from '@/assets/bricks.jpg'

const handleBackgroundColor = (value) => {
  switch (value) {
    case -1:
      return `background-image: url(${img});`
    case 0:
      return 'background-color: #8ab5a1;'
    case 1:
      return 'background-color: #dcb;'
    case 2:
      return 'background-color: #00a99e;'
    case 4:
      return 'background-color: #0071bd;'
    case 8:
      return 'background-color: #2e3192;'
    case 16:
      return 'background-color: #b281ad;'
    case 32:
      return 'background-color: #902792;'
    case 64:
      return 'background-color: #24b574;'
    case 128:
      return 'background-color: #5ac8fa; font-size: 45px;'
    case 256:
      return 'background-color: #34c759; font-size: 45px;'
    case 512:
      return 'background-color: #ffcc00; font-size: 45px;'
    case 1024:
      return 'background-color: #ff9500; font-size: 35px;'
    case 2048:
      return 'background-color: #ff2d55; font-size: 35px;'
    default:
      return 'background-color: #8ab5a1'
  }
}

const newTile = keyframes`
  from {
    transform: scale(0);
  }

  to {
    transform: scale(1);
  }
`

const tileProps = {
  tile: Object,
}
const TileContainer = styled('span', tileProps)`
  position: absolute;
  user-select: none;
  -webkit-user-select: none;
  cursor: default;
  width: 80px;
  height: 80px;
  margin: 5px;
  line-height: 80px;
  display: inline-block;
  font-size: 55px;
  font-weight: bold;
  text-align: center;
  vertical-align: middle;
  border-radius: 5px;
  color: #fff;
  ${(props) => handleBackgroundColor(props.tile.value)};
  top: ${(props) => 90 * props.tile.row + 5}px;
  left: ${(props) => 90 * props.tile.col + 5}px;
  ${(props) =>
    props.tile.new
      ? `animation-duration: 0.20s;  animation-name: ${newTile};  animation-fill-mode: forwards;  animation-delay: 0.15s;`
      : ''}
`
@Component({
  components: {
    TileContainer,
  },
})
export default class Tile extends Vue {
  @Prop(Object, { required: true }) tile
}
</script>
