/*
    vuex 의 구성요소
    store(Model 역할) : 저장 공간 = 상태 관리 프로그램
        = state : 변경이 가능한 변수저장 공간
        = props : 고정된 데이터
    actions(Controller 역할) : 사용자가 요청한 기능 설정 => 메서드
    = 모든 .vue에서 사용이 가능하게 만든다
    = state에 전송할 때 => commit 함수를 이용해서 저장

    View--> Actions
            | 
          state  

*/
import { createStore } from "vuex";
// 저장할 데이터 설정
// 변경 (데이터 변경) = 함수수
const store=createStore({
    // View (Component)에서 사용할 데이터 선언
    // data() {}, setup()
    // food_data:{}, food_detail:{}
    state(){
        return{
            count:0
        }
    },
    // 데이터 갱신 => Update, Delete, Insert
    mutations:{
        increment(state){
            state.count++
        },
        decrement(state){
            state.count--
        }
    },
    actions:{
        increment({commit}){
            commit('increment')
        },
        decrement({commit}){
            commit('decrement')
        }
    }
})
export default store