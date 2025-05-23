<template>
  <div>
    <p>Count:{{ count }}</p>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
  </div>
</template>

<script>
import {mapState,mapActions} from 'vuex';

export default {
  computed:{
    ...mapState(['count'])
  },
  methods:{
    ...mapActions(['increment','decrement'])
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
