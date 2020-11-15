<template>
  <div>
    <!-- app.vueのLinkHeaderタグ内に書いた文字がスロットと置き換わる -->
    <slot>
       <!-- slotの中に書いたコードはLinkheaderタグの中に何も書かれていない場合適用される -->
      <h2>デフォルトのタイトル</h2>
    </slot>
    <p>{{ headerText }}</p>
  </div>
</template>

<script>
export default {
  props: ["headerText"],
}
</script>

<style scoped>
/* CSSはどっちに書いても適用される */
h1 {
  color: red
}
</style>