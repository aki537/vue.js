<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        user: {
          firstName: "Jack",
          lastName: "Donald"
        }
      };
    }
  }
</script>

<style scoped>
/* CSSはどっちに書いても適用される */
h1 {
  color: red
}
</style>