<template>
  <div>
    <slot name="title"></slot>
    <!-- templateで囲まれてるとこ以外がデフォルトスロットとして下のslotに入る -->
    <slot></slot>
    <!-- <slot name="default"></slot> この意味と上は一緒 -->
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