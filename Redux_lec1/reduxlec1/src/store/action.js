import { counter_dec } from "./actiontypes"
import { counter_inc } from "./actiontypes"
export const add=()=>
( {type:counter_inc})
   
export const dec=()=>({type:counter_dec })