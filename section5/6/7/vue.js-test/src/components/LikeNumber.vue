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
      // $emitはカスタムイベントを作れる
      // 子から親への受け渡しは＄emitを使用（送り口）
      // 第一引数は好きな名前、第2引数は渡したい値を指定（今回はtotalNumberに+1した値を親に渡したい)
      this.$emit("my-click", this.totalNumber + 1);
    }
  }
};
</script>

<style scoped>
div {
  border: 1px solid red;
}
</style>
