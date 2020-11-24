<template>
  <div>
    <!-- コンポーネントの横にv-slotとかけるのはデフォルトスロットしか無いときのみ -->
    <LikeHeader v-slot:="slotProps">
      <p>{{ slotProps }}</p>
      <h2>みなさん</h2>
      <h3>はじめまして</h3>
      <p>よろしくおねがいします</p>
      <!-- 下のみたいなのを書くとデフォルト以外のスロットもできるのでエラーが起きる -->
      <!-- <template v-slot:title="slotProps">
      <template v-slot:number="slotProps"> -->
      <!-- </template> -->
    </LikeHeader>
    <LikeNumber :total-number="oyanumber" @my-click="incrementNumber"></LikeNumber>
    <LikeNumber :total-number="oyanumber"></LikeNumber>
  </div>
</template>

<script>
import LikeHeader from "./components/LikeHeader.vue";

export default {
  data() {
    return{
      oyanumber: 14
    };
  },
  components: {
    LikeHeader
  },
  methods: {
    incrementNumber(value) {
      this.oyanumber = value
    }
  }
}
</script>

<style scoped>
div {
  border: 1px solid blue;
}

/* CSSはどっちに書いても適用される */
/* h1 {
  color: red
} */
</style>
