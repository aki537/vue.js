<template>
  <div>
    <!-- app.vueのLinkHeaderタグ内に書いた文字がスロットと置き換わる -->
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ["headerText"],
}
</script>