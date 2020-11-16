<template>
  <div>
    <LikeHeader>
      <!-- これもデフォルトとなるのでこんにちはの下に来る -->
      <h2>みなさん</h2>
      <template v-slot:title>
        <h2>こんにちは</h2>
      </template>
      <!-- templateでv-slotをしてしない場合はデフォルトスロットとなる -->
      <h3>はじめまして</h3>
      <p>よろしくおねがいします</p>
      <!-- 下のように勝手に変換して処理してる -->
      <!-- <template v-slot:default>
        <h2>みなさん</h2>
        <h3>はじめまして</h3>
        <p>よろしくおねがいします</p>
      </template> -->
      <template v-slot:number>
        <p>{{oyanumber}}</p>
      </template>
    </LikeHeader>
    <LikeNumber :total-number="oyanumber" @my-click="incrementNumber"></LikeNumber>
    <LikeNumber :total-number="oyanumber"></LikeNumber>
  </div>
</template>

<script>
import LikeHeader from "./components/LikeHeader.vue"

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
