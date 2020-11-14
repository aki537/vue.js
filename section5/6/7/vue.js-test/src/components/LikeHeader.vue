<template>
  <div>
    <!-- app.vueのLinkHeaderタグ内に書いた文字がスロットと置き換わる -->
    <slot></slot>
    <!-- ここでは使える -->
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