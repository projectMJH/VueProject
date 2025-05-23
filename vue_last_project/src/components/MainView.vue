<template>
    <div></div>
  </template>
  <!--
     JSP / MVC
     = 데이터 분석 / AI = 2800  3년후 
     = MVC(Spring) = 3000~3200 
     = 겁먹을 필요가 없다 
  
     1. 생명주기 
        beforeCreate() : vue객체 생성전 
        **created() : vue객체 생성 
           = router를 이용한 데이터 전송 
        beforeMount() : onload가 되기 전상태
                        ------ 브라우저에 HTML을 출력 (DOM생성)
        **mounted() : onload가 된 상태 
           = 서버에서 데이터 읽을 경우 
           = 변수의 초기화 : 생성자 
           = store에 있는 데이터 읽기 
             ----- 데이터 상태 관리 : 단방향 통신 
        beforeUpdate() : 데이터 변경 전 
        **updated() : 데이터 변경이 완료 
        ---------- HTML의 데이터를 자동으로 변경 
        beforeDestory() : 화면이 변경전 
        destoryed() : 화면 변경 
        형식)
             // const curpage=useState("0") => react (멤버변수 설정)
             export default{
                1. data(){} => 멤버변수 지정   
                 => setup(){}
                2. 생명주기 함수 
                   created(){},mounted()
                3. computed:{
                      계산된 데이터 => 총합 , 문자열 변경 ..
                   }
                4. components:{
                     컴포넌트 등록 
                  }
                5. methods: 사용자 정의 메소드 
             }
             export default App
             예)
                  -------------------------
                          메뉴 : 컴포넌트 
                  -------------------------
                          -----------
                            검색기
                          -----------
                    ----------------------
                          이미지 목록
                     
                    ----------------------
                          -----------
                            페이지
                          -----------
                      
                  -------------------------
                          Footer : 컴포넌트 
                  -------------------------
  
     2. 디렉티브 : 제어문 관련 / 화면 출력 
        => 태그안에서 처리 
        v-text
        v-html
  
        예) 
             data(){
                return {
                  msg:'<font color=red>Hello Vue</font>'
                }
             }
             <div>{{msg}}</div> = <font color=red>Hello Vue</font>
             <div v-text="msg"></div> =  <font color=red>Hello Vue</font>
             <div v-html="msg"></div> 빨간색 => Hello Vue
         v-bind => data()안에 설정된 데이터를 사용할때 
                   => 속성에 값을 첨부 (v-bind는 생략이 가능) :
                   <img v-bind:src=""> <img :src="">
         입출력값을 받아서 data()에 설정된 변수에 값을 지정 
         v-model => input,select,textarea
         => 태그 자체 제어 => ref="" 
         v-for => 반복문 
               v-for="변수,인덱스 in 배열" => 배열(JSON)
               => 태그안에서 작업 
         v-if / v-show / v-else
         ======================
     3. 값 출력
        <태그>{{}}</태그>
        <태그 :속성="">
     4. component
     5. router 
     6. 외부 데이터 읽기 
     7. vuex 
     => 화면 출력 
  -->
  