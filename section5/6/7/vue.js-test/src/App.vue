<template>
  <div>
    <LikeHeader></LikeHeader>
    <h2>{{ oyanumber }}</h2>
    <LikeNumber :total-number="oyanumber"></LikeNumber>
    <!-- 今回はpropsで指定したtest-propsに文字列testを渡す -->
    <LikeNumber :total-number="oyanumber" test-props="test"></LikeNumber>
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
  }
}
</script>

<style scoped>
div {
  border: 1px solid blue;
}
</style>
