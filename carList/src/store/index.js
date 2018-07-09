import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutation'

Vue.use(Vuex)

const store={
  state: {
    token: ''
  },
  mutations
}

export default new Vuex.Store({
  ...store
})


