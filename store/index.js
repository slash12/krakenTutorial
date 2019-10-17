import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export function createStore () {
  return new Vuex.Store({
    state: {
      people: [{
        "uuid": "58dc3c76c9205670b433e934",
        "email": "dennisingram@cinesanct.com"
      }, {
        "uuid": "58dc3c76fb733629909f1ce8",
        "email": "louhendricks@zytrac.com"
      }, {
        "uuid": "58dc3c762d5b19946660567e",
        "email": "cindyholcomb@tourmania.com"
      }],
      activePerson: null
    },

    actions: {},

    mutations: {
      setActivePerson(state, person) {
        state.activePerson = person
      }
    },

    getters: {}
  })
}
