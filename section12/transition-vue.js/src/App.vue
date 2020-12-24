<template>
  <div class="main">
    <button @click="show = !show">切り替え</button>
    <!-- transitionを作るときはnameをつける -->
    <transition name="fade">
      <p v-if="show">hello</p>
    </transition>
    <transition name="slide">
      <p v-if="show">bye</p>
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
  opacity: 0;
}
.fade-enter-active {
  /* 現れるときのトランジションの状態 */
  transition: opacity 0.5s;
}
.fade-enter-to {
  /* 現れるときの最後の状態 */
  opacity: 1;
}
.fade-leave {
  /* 消えるときの最初の状態 */
  opacity: 1;
}
.fade-leave-active {
  /* 消えるときのトランジョンの状態 */
  transition: opacity 0.5s;
}
.fade-leave-to {
  /* 消えるときの最後の状態 */
  opacity: 0;
}

/* .slide-enter {

} */
.slide-enter-active {
  animation: slide-in 0.5s;
}
/* .slide-enter-to {

}
.slide-leave {

} */
.slide-leave-active {
  animation: slide-in 0.5s reverse;
}
/* .slide-leave-to {

} */

@keyframes slide-in {
  from {
    transform: translateX(100px);
  }
  to {
    transform: translateX(0);
  }
}

.main {
  width: 70%;
  margin: auto;
  padding-top: 5rem;
  text-align: center;
}
</style>