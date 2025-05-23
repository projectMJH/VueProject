<template>
    <div id="m1">{{ date  }}</div>
    <div id="m2">{{ date2 }}</div>
  </template>
  <!--
      <script> = 데이터 제어 = <template>안에 있는 HTML제어 => index.html
      main.js = App.vue = comonents = index.html
      Back-End : 언어 (java) , Spring , Spring-Boot , 데이터베이스
      ========   
      Front-End : Vue/React = NodeJS 
      ==========
      툴 사용법 : AWS / CI/CD = DevOps
      => IT (10~20) : GPT 
      => 3년차 : 교육 / 필드  
  -->
  <script>
    export default{
      /*
           데이터만 설정이 가능 
      */
      data(){
        return {
          date:Date().toString()
        }
      },
      /*
         mounted(),methods..... 
         가독성이 좋다 
         vue3 = setup이용을 권장 
      */
      setup(){
        const date2=Date().toString()
        return {
          date2
        }
      }
    }
  </script>
  <style scoped>
   #m1{
     color:blue
   }
   #m2{
    color:blueviolet
   }
  </style>
  