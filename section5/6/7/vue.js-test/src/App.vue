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
    <div styele="padding: 10rem;">
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
      <label for="detail">イベントの内容</label>
      <textarea id="detail" cols="30" rows="10" v-model="eventDate.detail"></textarea>
      <p style="white-space: pre;">{{ eventDate.detail }}</p>
      <input
        type="checkbox" 
        id="isPrivate"
        v-model="eventDate.isPrivate">
      <label for="isPrivate">非公開</label>
      <p>{{ eventDate.isPrivate }}</p>
      <p>参加条件</p>
      <input 
        type="checkbox" 
        id="10" 
        value="10代" 
        v-model="eventDate.target">
      <label for="10">10代</label>
      <input 
        type="checkbox" 
        id="20" 
        value="20代" 
        v-model="eventDate.target">
      <label for="20">20代</label>
      <input 
        type="checkbox" 
        id="30" 
        value="30代" 
        v-model="eventDate.target">
      <label for="30">30代</label>
      <p>{{ eventDate.target }}</p>
      <p>参加費</p>
      <input 
        type="radio" 
        id="free" 
        value="無料" 
        v-model="eventDate.price">
      <label for="free">無料</label>
      <input 
        type="radio" 
        id="paid" 
        value="有料" 
        v-model="eventDate.price">
      <label for="paid">有料</label>
      <select v-model="eventDate.location" multiple>
        <p>開催場所</p>
        <option v-for="location in locations" :key="location">
          {{location}}
        </option>
      </select>
      <p>{{ eventDate.location }}</p>
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
      locations: ["東京","大阪","名古屋"],
      eventDate: {
        title: "タイトル",
        maxNumber: 0,
        host: "",
        detail: "",
        isPrivate: false,
        target: [],
        price: "無料",
        location: []
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

