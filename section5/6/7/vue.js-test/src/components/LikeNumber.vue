<template>
  <div>
    <!-- 親コンポーネント(App.vue)のnumberをここに反映させたい -->
    <p>いいね({{number / 2}})</p>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
export default {
  methods: {
    increment() {
      this.number += 1;
    }
  }
}
</script>

<style scoped>
div {
  border: 1px solid red;
}
</style>

