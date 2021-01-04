import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 2
  },
  getters: {
    doubleCount: state => state.count * 2,
    tripleCount: state => state.count * 3,
  },
  // stateの値を変えるときはmutationで変える
  mutations: {
    increment(state, number) {
      state.count += number;
    },
    decrement(state, number) {
      state.count -= number;
    },
  },
  // 非同期処理をするときはactionsを使う
  // （mutationsで非同期処理はかけない)
  actions: {
    // increment(context, number) {
    //   context.commit('increment', number);
    // },
    // 下の書き方でcontextを省略もできる
    increment({ commit }, number) {
      commit('increment', number);
    },
    decrement({ commit }, number) {
      commit('decrement', number);
    },
    // incrementAsync(context) {
    //   setTimeout(() => {

    //   },1000)
    // }
  }
});