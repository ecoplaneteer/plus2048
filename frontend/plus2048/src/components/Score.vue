<template>
  <ScoreContainer :title="title">
    <slot />
  </ScoreContainer>
</template>

<script>
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import styled from 'vue-styled-components'

const scoreProps = {
  title: String,
}

const handleContent = (title) => {
  return `content: '${title}';`
}

const ScoreContainer = styled('div', scoreProps)`
  position: relative;
  display: inline-block;
  background: #8ab5a1;
  padding: 15px 25px;
  font-size: 25px;
  height: 25px;
  line-height: 47px;
  font-weight: bold;
  border-radius: 3px;
  color: white;
  margin-top: 8px;
  text-align: center;
  box-sizing: unset;
  width: 60px;

  &:after {
    ${(props) => handleContent(props.title)}
    position: absolute;
    width: 100%;
    top: 10px;
    left: 0;
    text-transform: uppercase;
    font-size: 13px;
    line-height: 13px;
    text-align: center;
    color: white;
  }
`

@Component({
  components: {
    ScoreContainer,
  },
})
export default class Score extends Vue {
  @Prop(String) title
}
</script>
