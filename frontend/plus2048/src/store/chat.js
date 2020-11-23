const state = {
  username: undefined,
  messages: [],
}

const actions = {
  initChat({ commit }, messageData) {
    commit('INIT_CHAT', messageData)
  },
  setUser: ({ commit }, username) => {
    localStorage.setItem('username', username)
    commit('SET_USER', username)
  },
  quitGame: ({ commit, dispatch }) => {
    localStorage.removeItem('username')
    dispatch('socket/disconnect', {}, { root: true })
    commit('QUIT_GAME')
  },
  updateMessages: ({ commit }, message) => {
    commit('UPDATE_MESSAGES', message)
  },
}

const getters = {}

const mutations = {
  INIT_CHAT: (state, messageData) => {
    state.messages = messageData.messages
  },
  SET_USER: (state, username) => {
    state.username = username
  },
  QUIT_GAME: (state) => {
    state.username = undefined
    state.messages = []
  },
  UPDATE_MESSAGES: (state, message) => {
    state.messages.push(message)
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
