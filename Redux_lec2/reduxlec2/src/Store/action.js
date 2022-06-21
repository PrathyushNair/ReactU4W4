import { Add_todo, Complete_todo, Counter_dec, Counter_inc, Delete_todo, Get_Todosloading, Get_Todossuccess, Update_todo } from "./actiontype";
import axios from "axios";
//import { useDispatch } from "react-redux";

export const counterInc=()=>({type:Counter_inc})
export const counterDec=()=>({type:Counter_dec})

export const todoAdd=(payload)=>({type:Add_todo,payload})
export const todoComplete=(id)=>({type:Complete_todo,payload:id})
export const todoRemove=(id)=>({type:Delete_todo,payload:id})
export const todoUpdate=(payload)=>({type:Update_todo,payload})

export const getTodods=(dispatch)=>{ 
  //waiting time  
   //
   dispatch({type:Get_Todosloading,payload:true})
     return axios.get("http://localhost:8080/todos").then((resp)=>( 
    //loading ends
        
    
    dispatch({type:Get_Todossuccess,payload:resp.data} )
    //dispatch({type:Get_Todosloading,payload:false})
)

)
  }

// export const adddata=(dispatch,psyload )=>{
//     axios.post("http://localhost:8080/todos",payload)
//     .then((r)=>(dispatch({type:,payload})))
// }


   
