import {legacy_createStore,combineReducers} from "redux"
import { Todoreducer } from "./todoreducer"

let rootreducer=combineReducers({todo:Todoreducer})
export const store=legacy_createStore(rootreducer)