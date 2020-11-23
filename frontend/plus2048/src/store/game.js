import { GAME_MODE } from '@/util/contants'

const state = {
  grid: [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
  ],
  userVoted: false,
  score: 0,
  status: 'playing',
  gameMode: null,
  votingEndsAt: null,
}

const getters = {}

const actions = {
  initGame({ commit }, gameData) {
    commit('UPDATE_GAME', gameData)
  },
  gameMoved({ commit }, gameData) {
    commit('UPDATE_GAME', gameData)
  },
  gameRestarted({ commit }, gameData) {
    commit('UPDATE_GAME', gameData)
  },
  modeChanged({ commit }, gameData) {
    commit('UPDATE_GAME', gameData)
  },
  gameVoting({ commit }, gameData) {
    commit('GAME_VOTING', gameData)
  },
}

const mutations = {
  UPDATE_GAME: (state, gameData) => {
    state.userVoted = false
    state.grid = gameData.game.grid
    state.score = gameData.game.score
    state.status = gameData.game.status
    state.gameMode = gameData.game_mode
    state.votingEndsAt = gameData.voting_ends_at
  },

  GAME_VOTING: (state, gameData) => {
    state.grid = gameData.game.grid
    state.score = gameData.game.score
    state.status = gameData.game.status
    state.gameMode = gameData.game_mode
    state.votingEndsAt = gameData.voting_ends_at
  },

  MAKE_MOVE: (state) => {
    state.userVoted = state.gameMode === GAME_MODE.DEMOCARCY
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
