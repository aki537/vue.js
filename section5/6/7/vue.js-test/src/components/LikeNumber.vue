<template>
  <div>
    <p>いいね({{ halfNumber }})</p>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
export default {
  props: {
    totalNumber: {
      type: Number,
      default: 10
    },
  },
  computed: {
    halfNumber() {
      // thisでpropsもdataのようにアクセスできる
      return this.totalNumber / 2;
    }
  },
  methods: {
    increment() {
      this.$emit("my-click", this.totalNumber + 1);
      // わかりやすいデータフローにするため子から親にはデータをわたせない
      // this.totalNumber += 1  自分のtotalNumberが変わるだけで親の値は変わらない
    }
  }
};
</script>

<style scoped>
div {
  border: 1px solid red;
}
</style>
