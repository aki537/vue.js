<template>
  <div>
    <LikeHeader></LikeHeader>
    <h2>{{ oyanumber }}</h2>
    <!-- v-onで受け取る 属性には子の$emitの第一引数で指定したもの -->
    <!-- ＝の先に親に渡したい変数名 = $event で遅れる（渡し口） -->
    <!-- <LikeNumber :total-number="oyanumber" v-on:my-click="oyanumber = $event"></LikeNumber> -->
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
    // 引数を指定(valueじゃなくてもなんでも良い)することで向こうのtotalNumber+1が受け取れる
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
</style>
