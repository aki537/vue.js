<template>
  <div>
    <LikeHeader>
      <h1>トータルのいいね数</h1>
      <h2>{{ oyanumber }}</h2>
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
</style>
