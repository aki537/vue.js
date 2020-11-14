<template>
  <div>
    <p>いいね({{ halfNumber }})</p>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
export default {
  // props: ["totalNumber"],
  // 配列ではなくオブジェクトでも指定できる
  props: {
    // keyには同じくtotalNumber, valueには型を指定する（今回は数字なのでNumber（バリデーションを指定する））
    // totalNumber: Number
    // オブジェクトにもできて他にもバリデーションをつけれる（こっちの方が見やすい）
    totalNumber: {
      type: Number,
      // 絶対に指定する必要があるかどうか（v-bindでしてないと警告が出る）
      // required: true,
      // 指定していない場合のデフォルト値を設定（requiredと一緒にはかけない）
      default: 10
      //オブジェクトで指定する場合defaultは関数になる
      // default: function() {
      //   return {
      //     number: 5
      //   };
      // }
    }
  },
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
