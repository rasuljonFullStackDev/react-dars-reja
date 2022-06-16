import React,{useReducer} from 'react'
import { useState } from 'react';
import { reducer,initialState } from './Reducer'

const IndexReducer = () => {
    const [state,dispatch] = useReducer(reducer,initialState);
   const {data} = state;
   console.log(data);
   const send = (e) =>{
    e.preventDefault()
    dispatch({type:"add",payload:{id:new Date().getTime(),name:input}})
   }
   const del = (id) =>{
    dispatch({type:"delete",payload:id})
   }
   const [input,setInput] = useState("");

  return (
    <div>
        <form 
        onSubmit={send}
        >
            <input type="text" placeholder='name' value={input} onChange={(e)=>setInput(e.target.value)} />
            <button>Send</button>
        </form>
        <div className="cards">
            {data.map((val)=>(
                <div className="card" key={val.id}>
                    {val.name}
                    <button onClick={()=>del(val.id)}>Delete</button>
                </div>
            ))}
        </div>
    </div>
  )
}

export default IndexReducer