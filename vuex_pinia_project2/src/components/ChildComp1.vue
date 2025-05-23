<template>
    <div>
        <h2>{{ msg }}</h2>
        <Child2 v-bind:msg="msg"/>
    </div>
</template>

<script>
import Child2 from './ChildComp2.vue';

export default{
    components:{
        Child2
    },
    props:['msg']
}
</script>