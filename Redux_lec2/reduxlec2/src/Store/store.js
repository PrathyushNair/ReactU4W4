import {legacy_createStore,combineReducers} from "redux"
import { countreducer } from "./counterreducer"
import { todoreducer } from "./todoreducer"
import {  applyMiddleware, compose } from "redux";
import thunk from "redux-thunk"
const rootreducer=combineReducers({counter:countreducer,todo:todoreducer})



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export const store=legacy_createStore(rootreducer, applyMiddleware(thunk))