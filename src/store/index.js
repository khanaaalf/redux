import { createStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
export const reducerFn=(state={counter:0},action)=>{
    if(action.type==='inc')
    return {...state,counter:state.counter+1}
    else if(action.type==='dec')
    return {...state,counter:state.counter-1}
    return state
}
const reducer=combineReducers({
    counter: reducerFn
})

export const store=createStore(reducer);
