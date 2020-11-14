<template>
  <div>
    <!-- 親コンポーネント(App.vue)のnumberをここに反映させたい -->
    <p>いいね({{konumber / 2}})</p>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
export default {
  // App.vueのLikeNumberで定義したnumberがpropsで受け取れる
  props: ["konumber"],
  methods: {
    increment() {
      this.number += 1;
    }
  }
};
</script>

<style scoped>
div {
  border: 1px solid red;
}
</style>

