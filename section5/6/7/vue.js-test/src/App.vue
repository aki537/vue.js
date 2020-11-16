<template>
  <div>
    <LikeHeader>
      <!-- templateをdivに変えるとエラーが出る -->
      <div v-slot:title>
        <h2>こんにちは</h2>
      </div>
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
