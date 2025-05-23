<!--
     v-on:click="함수명"  => @click=""
       = button , img , a
     v-on:change="함수명" => @change=""
       = select 
     v-on:keydown="함수명" => @keydown  , @keydown-enter
     v-on:keyup.enter.prevent="함수명"   => @keyup=""
       = input type=text
     v-on:mousedown="함수명"
       = hover 
     v-on:mouseup="함수명"
       = mouseover / mouseout 

     submit => 유효성 검사후에 처리 
        prevent 

     디렉티브 
      v- 
      출력 v-text {{}} v-html v-model v-bind 
      이벤트 v-on:이벤트명 @이벤트명 
      제어문 v-if v-show v-if v-else

      v-for 
        v-for="값 in 배열"
        v-for="값,키 in 배열"
        v-for="값,키,인덱스 in 배열" 

        => key가 생략되면 오류 발생 
        
        data(){
          return {
            no:Number,
            name:String 
          }
        }
-->
<template>
    <p>{{ counter + counter2 }}</p>
    <button @click="counter++">클릭시에 숫자가 올라갑니다</button>
    <button @click.prevent="onClick">클릭시에 숫자가 올라갑니다</button>
  </template>
  <script>
  import {ref} from 'vue'
  export default{
    // methods , 생명주기 함수 처리가 가능 => react
    setup() {
      let counter=ref(0)
      // 데이터형에 함수를 포함하고 있다 
      // 익명의 함수를 이용한다 
      // function App(){이벤트 : 익명으로 선언}
      const onClick=(e)=>{
         if(e){
            e.preventDefault()
            counter.value++
         }
      }
      return {
        counter,
        onClick
      }
    },
    data(){
       return {
          counter2:0
       }
    },
    methods:{
      onClick2:function(e){
         if(e){
           e.preventDefault()
         }
         this.counter2++
      }
    }
  }
  </script>