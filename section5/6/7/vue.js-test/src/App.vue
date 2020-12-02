<template>
  <div>
    <LikeHeader>
      <h3>はじめまして</h3>
    </LikeHeader>
    <LikeNumber :total-number="oyanumber" @my-click="incrementNumber"></LikeNumber>
    <button @click="currentComponent = 'Home'">Home</button>
    <button @click="currentComponent = 'About'">About</button>
    <keep-alive>
      <component v-bind:is="currentComponent"></component>
    </keep-alive>
    <div>
      <h2>イベントのフォーム</h2>
      <label for="title">タイトル</label>
      <input
        id="title" 
        type="text"
        v-model.lazy="eventDate.title">
        <pre>{{eventDate.title}}</pre>
      <label for="maxNumber">タイトル</label>
      <input
        id="maxNumber" 
        type="number"
        v-model.number="eventDate.maxNumber">
        <p>{{ typeof eventDate.maxNumber }}</p>
      <label for="host">主催者</label>
      <input
        id="host" 
        type="text"
        v-model.trim="eventDate.host">
        <pre>{{eventDate.host}}</pre>
    </div>
    <!-- <About v-if="currentComponent === 'About'"></About>
    <Home v-if="currentComponent === 'Home'"></Home> -->
  </div>
</template>

<script>
import LikeHeader from "./components/LikeHeader.vue";
import About from "./components/About.vue"
import Home from "./components/Home.vue"

export default {
  data() {
    return{
      oyanumber: 14,
      title: "title",
      currentComponent: "Home",
      eventDate: {
        title: "タイトル",
        maxNumber: 0,
        host: ""
      }
    };
  },
  components: {
    LikeHeader,
    About,
    Home
  },
  methods: {
    incrementNumber(value) {
      this.oyanumber = value
    }
  }
}
</script>

