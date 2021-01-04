<template>
  <div>
    <router-view></router-view>
    <h3>Home</h3>
    <button @click="toUsers">Usersのページに行く</button>
    <p>{{ doubleCount }}</p>
    <p>{{ tripleCount }}</p>
    <input
      type="text"
      v-model="message"
    >
      <!-- :value="message"
      @input="updateMessage" -->
    <p>{{ message }}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters("count", ["doubleCount", "tripleCount"]),
    // doubleCount() {
    //   return this.$store.getters["count/doubleCount"];
    // },
    // tripleCount() {
    //   return this.$store.getters["count/tripleCount"];
    // },
    // message() {
    //   return this.$store.getters.message;
    // }
    message: {
      get() {
        return this.$store.getters.message;
      },
      set(value) {
        this.$store.dispatch("updateMessage", value);
      },
    }
  },
  // computed: mapGetters({
  //   myComponentDoubleCount: "doubleCount"
  // }),
  //   doubleCount() {
  //     return this.$store.getters.doubleCount;
  //   },
  //   tripleCount() {
  //     return this.$store.getters.tripleCount;
  //   }
  methods: {
    // updateMessage(e) {
    //   this.$store.dispatch("updateMessage", e.target.value);
    // },
    toUsers() {
      this.$router.push({
        name: 'users-id-profile',
        params: { id: 1 }
      });
    }
  }
};
</script>