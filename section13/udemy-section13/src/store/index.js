import Vue from 'vue';
import Vuex from 'vuex';
import count from "./modules/count";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    message: ""
  },
  getters: {

    message: state => state.message
  },
  // stateの値を変えるときはmutationで変える
  mutations: {
    
    updateMessage(state, newMessage) {
      state.message = newMessage;
    }
  },
  // 非同期処理をするときはactionsを使う
  // （mutationsで非同期処理はかけない)
  actions: {
    // increment(context, number) {
    //   context.commit('increment', number);
    // },
    // 下の書き方でcontextを省略もできる
    
    updateMessage({ commit }, newMessage) {
      commit("updateMessage", newMessage);
    }
    // incrementAsync(context) {
    //   setTimeout(() => {

    //   },1000)
    // }
  },
  modules: {
    count
  }
});