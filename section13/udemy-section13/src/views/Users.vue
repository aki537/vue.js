<template>
  <div>
    <h3>Users</h3>
    <router-link to="/users/1">ユーザー1</router-link>
    <router-link to="/users/2">ユーザー2</router-link>
    <hr>
    <h1>User No. {{ id }}</h1>
    <router-link :to="'/users/' + (Number(id) + 1) + '/profile?lang=ja#next-user'">次のユーザー</router-link>
    <router-view></router-view>
    <div style="height: 700px;"></div>
    <router-link 
      id="next-user"
      :to="{ name: 'users-id-profile', params: { id: Number(id) + 1 }, query: { lang: 'ja', page: 2 }, hash: '#next-user' }"
    >次のユーザー</router-link>
    <div style="height: 1400px;"></div>
  </div>
</template>

<script>
export default {
  props: ["id"],
  // コンポーネントが実行されたときに表示する
  // beforeRouteEnter(to, from, next) {
  //   console.log('beforeRouteEnter');
  //   next(vm => {
  //     console.log(vm.id);
  //   });
  // },
  // beforeRouteUpdate(to, from, next) {
  //   // URLが変わった時に新しいコンポーネントの変更がない時に実行する
  //   console.log('beforeRouteUpdate');
  //   next();
  // },
  // beforeRouteLeave(to, from, next) {
  //   console.log('beforeRouteLeave');
  //   const isLeave = window.confirm("本当にこのページを離れますか？");
  //   if (isLeave){
  //     next();
  //   } else {
  //     next(false);
  //   }
  // },
}
</script>