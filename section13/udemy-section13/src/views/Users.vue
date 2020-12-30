<template>
  <div>
    <h3>Users</h3>
    <!-- おなじURLだからライフサイクルフック(下のcureated）が呼ばれない -->
    <router-link to="/users/1">ユーザー1</router-link>
    <router-link to="/users/2">ユーザー2</router-link>
    <hr>
    <h1>User No. {{ id }}</h1>
  </div>
</template>

<script>
export default {
  props: ["id"],
  // watch: {
  //   $route(to, from) {
  //     console.log(to);
  //     console.log(from);
  //     console.log('$routerが変わった');
  //   }
  // },
  // created() {
  //   console.log("created");
  // }
}
</script>