<template>
  <div>
    <!-- コンポーネントに付ける場合は#dafault="hogehoge"というふうにする -->
    <LikeHeader>
      <p>{{ slotProps }}</p>
      <h2>みなさん</h2>
      <h3>はじめまして</h3>
      <p>よろしくおねがいします</p>
      <!-- v-slot:を#に省略できる -->
      <template #[title]></template>
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
      oyanumber: 14,
      title: "title"
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
