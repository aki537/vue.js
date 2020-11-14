<template>
  <div>
    <!-- パスカルケース -->
    <LikeHeader></LikeHeader>
    <!-- 下みたいにもかける（ケバブケース） -->
    <!-- <like-header></like-header> -->
    <LikeNumber></LikeNumber>
  </div>
</template>

<script>
// ローカル登録するためLikeHeader.vueをインポート
import LikeHeader from "./components/LikeHeader.vue"

export default {
  // componentsに追加してローカル登録
  components: {
    // LikeHeader:  LikeHeader
    // ES6からはkeyとvalueが同じ場合短縮してかける
    LikeHeader
  }
}
</script>
