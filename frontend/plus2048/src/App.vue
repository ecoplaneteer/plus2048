<template>
  <v-app>
    <v-app-bar v-if="username" color="blue" app>
      <v-app-bar-nav-icon @click="onQuitClick">
        <v-icon color="white">mdi-arrow-left</v-icon>
      </v-app-bar-nav-icon>
      <v-toolbar-title class="white--text">2048+</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <Container v-if="username" />
      <Join v-else />
    </v-main>
  </v-app>
</template>

<script>
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

import { State } from 'vuex-class'
import Container from '@/views/Container'
import Join from '@/views/Join'

@Component({
  name: 'App',

  components: {
    Container,
    Join,
  },
})
export default class App extends Vue {
  @State((state) => state.chat.username) username

  onQuitClick() {
    this.$store.dispatch('chat/quitGame')
  }
}
</script>
