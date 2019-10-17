import Vue from 'vue'
import Vuetify from './Vuetify'

// This way of loading corresponds to "window not defined" errors
let VueSelect = null
if (process.browser) {
  VueSelect = require('vue-select')
  Vue.component("v-select", VueSelect.VueSelect);
}

export default {
  Vuetify
}
