<template>
  <div>
    <slot name="title" :user="user" text="text">
    </slot>
    <slot></slot>
    <hr>
    <p>良いねの数</p>
    <slot name="number"></slot>
  </div>
</template>

<script>
export default {
  deta() {
    return{
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