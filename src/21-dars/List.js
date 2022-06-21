import React,{useContext} from 'react'
import { ReducerContext } from './api/ReducerContext'
import Runtime from 'runtime'
const List = () => {
    const {data,input,setInput,dataSend,dataDelete,list} = useContext(ReducerContext)
    const send = (e) =>{
        e.preventDefault();
        console.log(input);
        dataSend({
            id:new Date().getTime(),
            name:input
        })
    }
  return (
    <div>
        <form onSubmit={send}>
            <input type="text" placeholder='name' value={input} onChange={(e)=>setInput(e.target.value)} />
            <button type='submit'>send</button>
        </form>
        <div className="cards">
            {data.map((val)=>(
                <div className='card' key={val.id}>
                    <h1>{val.name}</h1>
                    <button onClick={()=>dataDelete(val.id)}>delete</button>
                </div>
            ))}
        </div>
        <h1>List</h1>
        <div className="cards">
            {list.map((val)=>(
                <div className='card' key={val.id}>
                    <h1>{val.name}</h1>
                    <button onClick={()=>dataDelete(val.id)}>delete</button>
                </div>
            ))}
        </div>
    </div>
  )
}
export default List