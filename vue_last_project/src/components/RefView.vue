<template>
    <input type="text" v-bind:value="abbr"/>
    <input type="text" v-model="msg"/>
    <hr>
    <abbr v-bind:title="msg">{{ abbr }}</abbr>
  </template>
  <!--
    v-bind => 변수값을 대입할때 사용 
    v-model => 입출력값을 제어 
    *** MVVM , 가상돔 
        ------------
       Model : 데이터 => data() , setup() => (Spring => VO)
       View : <template>HTML</template>
       ViewModel : 생명주기함수 / 사용자 정의 함수 => 요청에 따라 데이터 제어
  
       ViewModel <=> Model <=> View 
                     변경시마다 HTML에 전송 
  -->
  <script>
  import {ref} from 'vue'
  export default{
    setup() {
      const abbr=ref("Hello")
      const msg=ref("Hello Vue3")
      return {
        abbr,
        msg
      }
    },
  }
  </script>
  