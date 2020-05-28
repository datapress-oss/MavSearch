// src/plugins/vuetify.js

import Vue from 'vue'
import Vuetify from 'vuetify'
import '@fortawesome/fontawesome-free/css/all.css'
import './../../node_modules/vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

const opts = {
  icons: {
    iconfont: 'fa'
  }
}

export default new Vuetify(opts)
