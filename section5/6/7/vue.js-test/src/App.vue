<template>
  <div>
    <LikeHeader></LikeHeader>
    <h2>{{ oyanumber }}</h2>
    <!-- パスカルケースでもキャメルケースでもどっちでもかける -->
    <!-- なるべくケバブケースで書いたほうが良い（属性はケバブケースで書くためそれに習ったほうが良い） -->
    <LikeNumber v-bind:totalNumber="oyanumber"></LikeNumber>
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
  }
}
</script>

<style scoped>
div {
  border: 1px solid blue;
}
</style>
