import React,{useContext} from 'react'
import { ReducerContext } from './api/ReucerContext'
const List = () => {
    const {data} = useContext(ReducerContext)
  return (
    <div>
        <div className="cards">
            {data.map((val)=>(
                <div className='card' key={val.id}>
                    <h1>{val.name}</h1>
                </div>
            ))}
        </div>
    </div>
  )
}
export default List