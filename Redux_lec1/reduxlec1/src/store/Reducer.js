
import { counter_dec } from "./actiontypes"
import { counter_inc } from "./actiontypes"
export const reducer=(state,action)=>{
    console.log(state,action)
    // if(action.type==="add")
    // {
    //     state.count++
    // }
    // else if(action.type==="dec")
    // {
    //     state.count--
    // }
    // return {...state}
    switch(action.type){
        case counter_inc:{
            state.count++
            return{...state}
        }
        case counter_dec:{
            state.count--
            return{...state}
        }
        default:{
            return{...state}
        }
    }
}