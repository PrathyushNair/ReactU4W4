
import React, { useContext, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { TrigContext } from './Context/TrigContext';

function App() {
  const {trig,setTrig}=useContext(TrigContext)
  console.log("trig",trig)
  const todos=useSelector((state)=>state.todo.todos)
  const dispatch=useDispatch()
  let ref=useRef()
  React.useEffect(()=>{
    fetch(`http://localhost:8000/tasks`)
    .then((resp)=>(resp.json()))
    .then((resp)=>{dispatch({type:"fetch",payload:resp})})
    
  },[dispatch,trig])
  console.log("todos",todos)
  return (
    <div className="App">
     <div>Todo with routing</div>
     <input ref={ref} placeholder="Enter Task"></input>
     <button onClick={()=>dispatch({type:"add",payload:{title:"hello",isCompleted:false},func:setTrig,trig:trig})}>Add task</button>

     {
       todos.map((el)=>(<div key={el.id}>{el.value}</div>)
         
       )
     }
    </div>
  );
}

export default App;
