<template>
<div class="wrapper row3">
  <main class="container clear">
    <!-- main body -->
    <div class="content">
      <div id="gallery">
        <figure>
          <header class="heading">맛집 목록</header>
          <ul class="nospace clear">
            <li v-for="f,idx,key in food_list" :class="idx%4===0?'one_quarter first':'one_quarter'" :key="key">
              <router-link :to="{name:'FoodDetailView',params:{fno:f.fno}}">
                <img :src="'https://www.menupan.com'+f.poster" :title="f.name">
              </router-link>
            </li>
          </ul>
          <figcaption>Gallery Description Goes Here</figcaption>
        </figure>
      </div>
      <nav class="pagination">
        <ul>
          <li v-if="startPage>1"><a class="link" @click="prev()">&laquo; Previous</a></li>
          <li v-for="i,key in range(startPage,endPage)" :class="i===curpage?'current':''" :key="key">
            <a class="link" @click="pageChange(i)">{{i}}</a>
          </li>
          <li v-if="endPage<totalpage"><a class="link" @click="next()">&raquo; Next</a></li>
        </ul>
      </nav>
    </div>
    <!-- / main body -->
    <div class="clear"></div>
  </main>
</div>
</template>
<script>
export default({
  data(){
    return {
      food_list:[],
      curpage:1,
      totalpage:0,
      startPage:0,
      endPage:0
    }
  },
  mounted(){
    this.dataRecv()
  },
  methods:{
    pageChange(page){
      this.curpage=page
      this.dataRecv()
    },
    prev(){
      this.curpage=this.startPage-1
      this.dataRecv()
    },
    next(){
      this.curpage=this.endPage+1
      this.dataRecv()
    },
    range(start,end){
      let arr=[]
      let len=end-start
      for (let i=0;i<=len;i++)
      {
        arr[i]=start+i
      }
      return arr
    },
    async dataRecv(){
      try{
        const response=await fetch(
          `http://127.0.0.1:8000/web/food/list_vue/?page=${this.curpage}`
        )
        const result=await response.json()
        console.log(result)
        this.food_list=result.fd
        this.curpage=result.curpage
        this.totalpage=result.totalpage
        this.startPage=result.startPage
        this.endPage=result.endPage
      }catch(err){
        console.log(err)    
      }

    }
  }  
})
</script>
<style scoped>
a.link:hover{
  cursor: pointer;
}
</style>