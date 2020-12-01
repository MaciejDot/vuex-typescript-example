import Vue from 'vue'
import Vuex from 'vuex'
import {UnpackStore, MapMutationsType } from "vuex-exact"
Vue.use(Vuex)

const options = {
  state: {
  },
  mutations: {
    terraform: (cont: any, payload: any) => {}
  },
  actions: {
  },
  modules: {
    cart: {
      namespaced: true,
      mutations: {
        addToCart : (state: any, payload:any) => {}
      }
    }
  }
} 

export type StoreType = UnpackStore<typeof options.state, typeof options>
export default new Vuex.Store(options) as StoreType