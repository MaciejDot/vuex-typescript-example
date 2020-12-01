<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import { StoreType } from './store'
export default Vue.extend({
  name: 'App',
  components: {
    HelloWorld
  },
  computed:{
    store: function() : StoreType {
        return (this as any).$store as StoreType 
    }
  },
  created(){
    console.log(this.store.state.cart)
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
