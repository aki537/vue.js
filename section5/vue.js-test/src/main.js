import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  //ES5の書き方(アロー関数を使わないとこうなる)
  // render: function(h) {
  //   return h(App)
  // },
}).$mount('#app')
