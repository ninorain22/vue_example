import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  timeEntries: []
}

const mutations = {
  INIT_TIME_ENTRIES (state, data) {
    state.timeEntries = data
  },
  UPDATE_TIME (state, timeEntry) {
    state.timeEntries.push(timeEntry)
  },
  DELETE_TIME (state, timeEntry) {
    state.timeEntries.$remove(timeEntry)
  }
}

export default new Vuex.Store({
  state,
  mutations
})
