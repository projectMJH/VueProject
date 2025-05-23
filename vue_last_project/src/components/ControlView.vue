  <template>
    <div>
      <ul>
        <!--
           v-for와 v-if는 동시에 사용할 수 없다 
        -->
        <li v-for="(item,index) in items2" :key="index">
           <span v-if="index%2===0">{{index}}-{{ item.name }}</span>
        </li>
      </ul>
    </div>
  </template>
  <script>
  
  export default{
    setup() {
        const items=["홍길동","심청이","박문수","이순신","춘향이"]
        const items2=[
          {id:1,name:"홍길동"},
          {id:2,name:"심청이"},
          {id:3,name:"박문수"},
          {id:4,name:"이순신"},
          {id:5,name:"춘향이"}
            
        ]
        return {
          items,
          items2
        } 
    },
  }
  </script>