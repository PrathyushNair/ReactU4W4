import React from 'react';
import './App.css';

import { Navbar } from './components/Navbar';
import { Routes,Route } from 'react-router-dom';
import { CounterApp } from './pages/CounterApp';
import { TodoApp } from './pages/TodoApp';
function App() {
  //let dispatch=useDispatch()
  // let count=useSelector((state)=>state.count)
  //let todos=useSelector((state)=>state.todos)
  //let [input,setInput]=React.useState("")
  return (
    <div className="App">
      <div>Redux Lec2</div>
      <Navbar/>
      {/* <div>Count:{count}</div> */}
      
      <Routes>
        <Route path="/" element={<CounterApp/>}></Route>
        <Route path="/todoapp" element={<TodoApp/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
