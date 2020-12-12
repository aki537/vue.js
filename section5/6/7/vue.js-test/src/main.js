import Vue from 'vue'
import App from './App.vue'
// 新規作成したLikenumber.vueファイルをインポート
import LikeNumber from "./components/LikeNumber"

Vue.config.productionTip = false

// Likenumber.vueファイルをグローバル登録
Vue.component('LikeNumber', LikeNumber)

Vue.directive("border", function(el, binding){
  el.style.border = "solid black 2px";
});
// {
//   bind() {
//     // ディレクティブで初めて対象の要素に紐付いたとき
//   },
//   // insert() {
//   //   // 親Nodeに挿入されたとき
//   // },
//   update() {
//     // コンポーネントが更新される度、子コンポーネントが更新される前
//   },
//   // componentUpdate() {
//   //   // コンポーネントが更新される度。子コンポーネントが更新された後
//   // },
//   // unbind() {
//   //   // ディレクティブが紐付いている要素から取り除かれたとき
//   // },
// }


new Vue({
  render: h => h(App),
}).$mount('#app')
