<template>
  <ButtonContainer data-testid="button-container" @click="(e) => onClick(e)">
    <slot />
  </ButtonContainer>
</template>

<script>
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import styled from 'vue-styled-components'

const ButtonContainer = styled.button`
  width: 160px;
  margin: 20px;
  padding: 10px 25px;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  background: #8ab5a1;
  outline: none !important;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  border: 2px solid #8ab5a1;
  color: white;
  z-index: 1;

  &:after {
    position: absolute;
    content: '';
    width: 0;
    height: 100%;
    top: 0;
    right: 0;
    z-index: -1;
    background: #fff;
    transition: all 0.3s ease;
  }

  &:hover {
    color: black;
  }

  &:hover:after {
    left: 0;
    width: 100%;
  }
  &:active {
    top: 2px;
  }
`

@Component({
  components: {
    ButtonContainer,
  },
})
export default class Button extends Vue {
  @Prop(Function) onClick
}
</script>
