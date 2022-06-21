import { Add_todo, Complete_todo, Delete_todo, Get_Todosloading, Get_Todossuccess, Update_todo } from "./actiontype"
const initialState={loading:false,error:false,todos:[]}
export const todoreducer=(state=initialState,action)=>{
switch (action.type){
    case Add_todo:{
 
        return {...state,todos:[...state.todos,{...action.payload,id:state.todos.length}]}
    }
    case Get_Todosloading:{
       
        console.log({...state,loading:true})
        return {...state,loading:action.payload}
    }
    case Complete_todo:{
        return {...state}
    }
    case  Delete_todo:{
        return {...state}
    }
    case Update_todo:{
        return {...state}
    }
    case Get_Todossuccess:{
        console.log(action.payload)
        state.todos=[...action.payload]
        return{...state,todos:[...state.todos]}
    }
    default:{
        return {...state}
    }
}
 
}