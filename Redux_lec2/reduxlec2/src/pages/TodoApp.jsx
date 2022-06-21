import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTodods, todoUpdate } from '../Store/action'
//import { todoRemove } from '../Store/action'
//import { todoComplete } from '../Store/action'
import { todoAdd } from '../Store/action'

export const TodoApp = () => {
  const ref=React.useRef()
  const todos=useSelector((state)=>state.todo.todos)
  const dispatch=useDispatch()
 const loading=useSelector((state)=>state.todo.loading)
  const addNew=()=>{
    let value=ref.current.value
    dispatch(todoAdd({value:value,isCompleted:false}))
  }
React.useEffect(()=>{
  getTodods(dispatch)
},[dispatch])
console.log(loading)
  if(loading){
   
    return <div>Loading...</div>
  }
  return (
    <div>TodoApp
    <input ref={ref} placeholder='Enter task'></input>
      <button onClick={addNew} >Add task</button>

      {
        todos.map((el)=>(
          <div key={el.id}>{el.value}</div>
        ))
      } 
    </div>
  )
}
// onChange={(e)=>setInput(e.target.value)}
// onClick={()=>dispatch({type:"add",payload:""})}