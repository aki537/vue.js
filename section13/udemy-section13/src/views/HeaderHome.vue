<template>
  <nav>
    <h2>Home</h2>
    <router-link
      to="/" 
      active-class="link--active"
      exact
      class="link"
    >Home</router-link>
    <router-link
      :to="{ name: 'users-id-profile', params: { id: 1 }, query: { lang: 'ja', page: 2 }, hash: '#next-user' }"
      active-class="link--active"
      exact
      class="link"
    >users</router-link>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
  </nav>
</template>

<script>
// import { mapMutations } from "vuex";

export default {
  methods: {
    increment() {
      this.$store.dispatch('increment', 2)
    },
    decrement() {
      this.$store.dispatch('decrement', 2)
    },
    // ...はスプレッド演算子と呼ばれてES6の書き方
    // ...mapMutations(["increment", "decrement"])
    // increment() {
    //   this.$store.commit("increment", 2);
    // },
    // decrement() {
    //   this.$store.commit("decrement", 2);
    // }
  }
}
</script>

<style scoped>
.link {
  margin-right: 10px;
}
.link--active {
  font-size: 20px;
}
</style>