<template>
  <div class="main">
    <button @click="show = !show">切り替え</button>
    <!-- transitionを作るときはnameをつける -->
    <transition name="fade">
      <p v-if="show">hello</p>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
    };
  },
}
</script>

<style scoped>
/* transitionでつけたnameで以下の6つのクラスを作る */
.fade-enter {
  /* 現れるときの最初の状態 */
}
.fade-enter-active {
  /* 現れるときのトランジションの状態 */
}
.fade-enter-to {
  /* 現れるときの最後の状態 */
}
.fade-leave {
  /* 消えるときの最初の状態 */
}
.fade-leave-active {
  /* 消えるときのトランジョンの状態 */
}
.fade-leave-to {
  /* 消えるときの最後の状態 */
}

.main {
  width: 70%;
  margin: auto;
  padding-top: 5rem;
  text-align: center;
}
</style>