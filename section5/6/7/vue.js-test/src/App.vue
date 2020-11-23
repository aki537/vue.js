<template>
  <div>
    <LikeHeader v-slot:="slotProps">
      <!-- なにもないときはコンポーネントにもv-slotがかけて指定できる -->

      <!-- <template  v-slot:title="slotProps">
        <h2>こんにちは</h2>
         このslotPropsにさっきのユーザーのデータが入ってる
        <h2>{{ slotProps }}</h2>
        <h2>{{ slotProps.user.firstName }}</h2>
      </template>
      <template v-slot:default>
      </template>
      <template v-slot:number>
        <p>{{ oyanumber }}</p>
      </template> -->
      <!-- <template v-slot:default="slotProps"> -->
      <p>{{ slotProps }}</p>
      <h2>みなさん</h2>
      <h3>はじめまして</h3>
      <p>よろしくおねがいします</p>
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
