import Vue from "vue";
import Router from "vue-router";
// import Home from "./views/Home.vue";
// import Users from "./views/Users.vue";
// import UsersPosts from "./views/UsersPosts.vue";
// import UsersProfile from "./views/UsersProfile.vue";
// import HeaderHome from "./views/HeaderHome.vue";
// import HeaderUsers from "./views/HeaderUsers.vue";

const  Home = () => import( /* webpackChunkName: "Home" */ "./views/Home.vue");
const  Users = () => import( /* webpackChunkName: "Users" */ "./views/Users.vue");
const  UsersPosts = () => import( /* webpackChunkName: "UsersPosts" */ "./views/UsersPosts.vue");
const  UsersProfile = () => import( /* webpackChunkName: "UsersProfile" */ "./views/UsersProfile.vue");
const  HeaderHome = () => import( /* webpackChunkName: "HeaderHome" */ "./views/HeaderHome.vue");
const  HeaderUsers = () => import( /* webpackChunkName: "HeaderUsers" */ "./views/HeaderUsers.vue");

// Vue.useはプラグインを適用するときに使う
Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {path: '/', components: {
      default: Home,
      header: HeaderHome,
    },
    beforeEnter(to, from, next) {
      next();
    }
  },
    {
      path: '/users/:id',
      components: {
        default: Users,
        header: HeaderUsers,
      }, 
      props: {
        default: true,
        header: false
      },
      children: [
        { path: "posts", component: UsersPosts },
        { path: "profile", component: UsersProfile, name: "users-id-profile" }
      ]
    }, {
      // path: '/hello',
      // *は全てのいみ
      path: '*',
      redirect: "/"
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    // toは$routeの中身が入ってる
    // この中のthisはnew Routerを示してる
    // appはnewVueの方
    return new Promise(resolve => {
      this.app.$root.$once('triggerScroll', () => {
        let position = { x: 0, y: 0 }
        if (savedPosition) {
          position = savedPosition;
        }
        if (to.hash) {
          position =  {
            selector: to.hash
          };
        }
        resolve(position);
      });
    });
    // return {
    //   selector: '#next-user',
    //   offset: { x: 0, y: 100 }
    // };

    // return { x: 0,y: 100 };
    // console.log('scrollBehavior');
  }
});