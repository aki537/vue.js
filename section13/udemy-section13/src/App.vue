<template>
  <div style="width: 700px; margin: auto; padding-top: 50px;">
    <nav>
      <!-- aタグを使うと毎回アクセスされるからよくない -->
      <!-- <a href="/">Home</a>
      <a href="/users">Users</a> -->
      <router-link
        to="/" 
        active-class="link--active"
        exact
        class="link"
      >Home</router-link>
      <router-link
        to="users" 
        active-class="link--active"
        exact
        class="link"
      >users</router-link>
    </nav>
    <!-- <Home></Home> -->
    <router-view></router-view>
  </div>
</template>

<script>
// import Home from "./views/Home.vue";
// export default {
//   components: {
//     Home
//   }
// }
</script>

<style scoped>
.link {
  margin-right: 10px;
}
.link--active {
  font-size: 20px;
}
</style>