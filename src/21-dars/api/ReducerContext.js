import React, { useReducer, useState } from "react";
import { add, deleteFun, listAdd } from "./Reducer/action/action";
import { intialState } from "./Reducer/ReducerStore";
import { reducer } from "./Reducer/ReducerStore";

export const ReducerContext = React.createContext();

export const ReducerContextProvider = ({children})=>{
    const [state,dispatch] = useReducer(reducer,intialState);
    const {data,list} = state;
    const [input,setInput] = useState("")
    console.log(state);
    const dataSend = (data) =>{
        dispatch(listAdd(data))
    }

    const dataDelete = (data) =>{
        dispatch(deleteFun(data))
    }
    return(
        <ReducerContext.Provider value={{ data,input,setInput,dataSend,dataDelete,list }}>
            {children}
        </ReducerContext.Provider>
    )
}