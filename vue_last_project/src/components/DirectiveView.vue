<template>
    <div v-text="msg1"></div>
    <div v-html="msg2"></div>
    <div>{{ msg3 }}</div>
  </template>
  <script>
    export default{
      setup(){
        const msg1="Hello Vue3"
        const msg2="<font color=red>Hello Vue3</font>"
        const msg3="Hello Vue3!!"
                  +"Hello Vue3!!" 
                  +"Hello Vue3!!"
                  +"Hello Vue3!!"
                  +"Hello Vue3!!"
        return {
          msg1,
          msg2,
          msg3
        }
      }
    }
  </script>
  