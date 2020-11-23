import Vue from 'vue'
import Vuex from 'vuex'
import socket from './socket'
import game from './game'
import chat from './chat'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    socket,
    game,
    chat,
  },
})
