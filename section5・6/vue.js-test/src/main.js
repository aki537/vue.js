import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// インポートされたApp.vueファイルはconsole.logで
// 見るとコンポーネントのオブジェクトの形なってる
console.log(App);

// render関数を使えばAppはコンポーネントになってるので表示できる
new Vue({
  render: h => h(App),
}).$mount('#app')
