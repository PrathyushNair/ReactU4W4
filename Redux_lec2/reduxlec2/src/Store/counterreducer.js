import { Counter_dec, Counter_inc } from "./actiontype";

export const countreducer=(state={count:0},action)=>{
 switch (action.type)
{
    case Counter_inc:{
        state.count++
      return{...state}
    }
    case Counter_dec:{
        state.count--
        return{...state}
    }
    default:{
        return{...state}
    }
}
 
}