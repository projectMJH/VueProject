<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <Child1 v-bind:msg="msg"/>

</template>
<!-- 
  단점 : 입출력 = 양방향 v-model
        ----------------------------------
        컴포넌트에 값을 전송할 때 단방향
        ---------------------------------- 보완 : vuex = pinia
        react : 단방향 => 보완 : redux = mobx, saga
                                  |
                              직접 제작

-->

<script>
import Child1 from './components/ChildComp1.vue';

export default {
  name: 'App',
  components: {
    Child1
  },
  data(){
    return {
      msg:'Hello Vue!1'
    }
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
