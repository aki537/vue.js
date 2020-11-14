<template>
  <div>
    <p>いいね({{ halfNumber }})</p>
    <button @click="increment">+1</button>
    <p>{{ testProps }}</p>
  </div>
</template>

<script>
export default {
  props: {
    totalNumber: {
      type: Number,
      default: 10
    },
    // 新しいプロパティをつければ複数のpropsを作成できる
    testProps: {
      type: String
    }
  },
  // 配列でも同じ感じでできる
  // props: ["totalNumber", "testProps"],
  computed: {
    halfNumber() {
      // thisでpropsもdataのようにアクセスできる
      return this.totalNumber / 2;
    }
  },
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
