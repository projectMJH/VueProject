<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <DirectiveView/>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
//import MsgView from './components/MsgView.vue';
import DirectiveView from './components/DirectiveView.vue';
//import RefView from './components/RefView.vue';
//import EventView from './components/EventView.vue';
//import ControlView from './components/ControlView.vue';

export default {
  name: 'App',
  components: {
    DirectiveView
  }
}
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
