<template>
  <v-container>
    <v-layout wrap>
      <v-flex sm12 md6 offset-md3>
        <v-card elevation="4" light tag="section">
          <v-card-title>
            <v-layout align-center justify-space-between>
              <h3 class="headline">
                2048+
              </h3>
              <v-flex>
                <v-img
                  alt="2048+"
                  class="ml-3"
                  contain
                  height="48px"
                  position="center right"
                  src="https://lh3.googleusercontent.com/tBQouybR60opLNoFHcP8TXfSdCJso6SoiftJvU_d7xuM9ayeVG_k8MkHlq36yV5myNnT=s180"
                ></v-img>
              </v-flex>
            </v-layout>
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <p>Join with your name</p>
            <v-form @submit="onJoinClick">
              <v-text-field
                outline
                label="Username"
                type="text"
                v-model="username"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions :class="{ 'pa-3': $vuetify.breakpoint.smAndUp }">
            <v-spacer></v-spacer>
            <v-btn
              color="info"
              :large="$vuetify.breakpoint.smAndUp"
              @click="onJoinClick"
            >
              Join
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class Join extends Vue {
  username = ''

  onJoinClick() {
    this.$store.dispatch('chat/setUser', this.username)
    this.$store.dispatch('socket/connectSocket', this.username)
  }
}
</script>
