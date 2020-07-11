import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo:{},
    loginState:false
  },
  mutations: {
    eUserInfo(state,param) {
      state.userInfo = param;
    },
    eLoginState(state,param) {
      state.loginState = param;
    }
  },
  getters:{

  },
  actions: {
    setUserInfo(context,param) {
      context.commit('eUserInfo',param);
    },
    setLoginState(context,param) {
      context.commit('eLoginState',param);
    },
  },
  modules: {
  }
})
