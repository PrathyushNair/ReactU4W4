import React from 'react'
import {useDispatch,useSelector} from "react-redux"

import { counterDec } from '../Store/action'
import { counterInc } from '../Store/action'
export const CounterApp = () => {
  const dispatch=useDispatch()
  const count=useSelector((state)=>state.counter.count)
  return (
    <div>Counter:{count}
    <button onClick={()=>dispatch(counterInc())}>+</button>
    <button onClick={()=>dispatch(counterDec())}>-</button>
    </div>

  )
}
