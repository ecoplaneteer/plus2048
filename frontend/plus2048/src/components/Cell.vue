<template>
  <CellContainer />
</template>

<script>
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import styled from 'vue-styled-components'

const CellContainer = styled.span`
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
  background-color: #8ab5a1;
`

@Component({
  components: {
    CellContainer,
  },
})
export default class Cell extends Vue {}
</script>
