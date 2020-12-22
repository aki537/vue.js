import Vue from 'vue';
import App from './App.vue';
// 新規作成したLikenumber.vueファイルをインポート
import LikeNumber from "./components/LikeNumber";

Vue.config.productionTip = false;

// Likenumber.vueファイルをグローバル登録
Vue.component('LikeNumber', LikeNumber);
Vue.filter("upperCase", function(value) {
  console.log("フィルタ");
  return value.toUpperCase();
});

new Vue({
  render: h => h(App),
}).$mount('#app');


