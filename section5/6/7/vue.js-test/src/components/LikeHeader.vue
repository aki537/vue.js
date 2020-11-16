<template>
  <div>
    <slot name="title">
      <h2>デフォルトのタイトル</h2>
    </slot>
    <hr>
    <p>良いねの数</p>
    <slot name="number"></slot>
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