<template>
  <p>Count:{{ counter.count }}</p>
  <button @click="counter.increment">Increment</button>
  <button @click="counter.decrement">Decrement</button>
</template>

<script>
import { defineComponent } from 'vue';
import { useCounterStore } from './stores/counter';


export default defineComponent({
  setup(){
    const counter=useCounterStore();
    return {
      counter
    }
  }
});
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
