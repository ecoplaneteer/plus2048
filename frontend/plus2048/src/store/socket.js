import { Socket } from 'phoenix'
import { GAME_MODE } from '@/util/contants'

const state = {
  isConnected: false,
}

let socket = null
let channels = {}

const actions = {
  connectSocket: ({ commit, state }, username) => {
    if (!state.isConnected) {
      socket = new Socket(process.env.VUE_APP_WEBSOCKET_URL, {
        params: { username },
      })
      socket.connect()
      commit('SET_CONNECTED', true)
    }
  },
  disconnect: ({ commit }) => {
    socket.disconnect()
    socket = null
    channels = {}
    commit('SET_CONNECTED', false)
  },
  joinChannel: ({ dispatch }, channelInfo) => {
    const channel = socket.channel(channelInfo.topic)

    channel
      .join()
      .receive('ok', () => {
        channels[channelInfo.name] = channel

        if (channelInfo.name === 'game') {
          channel.on('game:init', (response) => {
            dispatch('game/initGame', response, { root: true })
          })
          channel.on('game:moved', (response) => {
            dispatch('game/gameMoved', response, { root: true })
          })
          channel.on('game:voting', (response) => {
            dispatch('game/gameVoting', response, { root: true })
          })
          channel.on('game:restarted', (response) => {
            dispatch('game/gameRestarted', response, { root: true })
          })
          channel.on('game:game_mode_changed', (response) => {
            dispatch('game/modeChanged', response, { root: true })
          })
        } else if (channelInfo.name === 'chat') {
          channel.on('chat:init', (response) => {
            dispatch('chat/initChat', response, { root: true })
          })
          channel.on('chat:new_msg', (response) => {
            dispatch('chat/updateMessages', response, { root: true })
          })
        }
      })
      .receive('error', () => {
        console.log('error')
      })
  },
  // eslint-disable-next-line no-empty-pattern
  makeMove: ({}, dir) => {
    channels.game.push(`move:${dir}`, {})
  },
  restartGame: ({ rootState }) => {
    channels.game.push(`restart_game`, { game_mode: rootState.game.gameMode })
  },
  toggleGameMode: ({ rootState }) => {
    channels.game.push(`toggle_game_mode`, {
      game_mode:
        rootState.game.gameMode === GAME_MODE.ANARCHY
          ? GAME_MODE.DEMOCRACY
          : GAME_MODE.ANARCHY,
    })
  },
  // eslint-disable-next-line no-empty-pattern
  sendNewMessage: ({}, message) => {
    channels.chat.push(`chat:new_msg`, { body: message })
  },
}

const getters = {}

const mutations = {
  SET_CONNECTED: (state, isConnected) => {
    state.isConnected = isConnected
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
