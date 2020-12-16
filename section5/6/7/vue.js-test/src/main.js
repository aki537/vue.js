import Vue from 'vue';
import App from './App.vue';
// 新規作成したLikenumber.vueファイルをインポート
import LikeNumber from "./components/LikeNumber";

Vue.config.productionTip = false;

// Likenumber.vueファイルをグローバル登録
Vue.component('LikeNumber', LikeNumber);

Vue.directive("border", function(el, binding){
  // el.style.border = "solid black 2px";
  el.style.borderWidth = binding.value.width;
  el.style.borderColor = binding.value.color;
  el.style.borderStyle = binding.arg;
  if (binding.modifiers.round) {
    el.style.borderRadius = "0.5rem";
  }
  if (binding.modifiers.shadow) {
    el.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.26)";
  }
});

new Vue({
  render: h => h(App),
}).$mount('#app');


