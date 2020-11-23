import Vue from 'vue'
import App from './App.vue'
import store from './store'
import vuetify from './plugins/vuetify'
import '@babel/polyfill'

Vue.config.productionTip = false

store.dispatch('chat/setUser', localStorage.username)
if (localStorage.username) {
  store.dispatch('socket/connectSocket', localStorage.username)
}

new Vue({
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app')
