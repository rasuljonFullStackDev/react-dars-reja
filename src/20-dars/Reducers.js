import React,{useReducer,useEffect} from 'react'
import { reducers,initialState } from './Loyiha'

const Reducers = () => {
    const[state,dispatch] = useReducer(reducers,initialState)
    console.log(state);
    const dataSend = () =>{
        dispatch({type:"add",payload:{id:new Date().getTime(),name:"Ali"}})
    }
    useEffect(()=>{
    },[])
  return (  
    <div>
        <button onClick={dataSend}>Send</button>
    </div>
  )
}

export default Reducers