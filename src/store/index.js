import Vue from 'vue'
import Vuex from 'vuex'

import middleModule from './Middle'
import rightModule from './Right'
import homeModule from './Home'
Vue.use(Vuex)
const store = new Vuex.Store({
    modules: {
        middleStore: middleModule,
        rightStore:rightModule,
        homeStore:homeModule
    }
})

export default store