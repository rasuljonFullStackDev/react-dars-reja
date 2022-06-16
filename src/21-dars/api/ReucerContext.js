import React, { useReducer } from "react";
import { intialState } from "./Reducer/ReducerStore";
import { reducer } from "./Reducer/ReducerStore";

export const ReducerContext = React.createContext();

export const ReducerContextProvider = ({children})=>{
    const [state,dispatch] = useReducer(reducer,intialState);
    const {data} = state;
    console.log(state);
    return(
        <ReducerContext.Provider value={{ data }}>
            {children}
        </ReducerContext.Provider>
    )
}