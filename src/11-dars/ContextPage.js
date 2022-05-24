import React,{useContext} from 'react'
import { DataContext } from './DataContext'
const ContextPage = () => {
    const {data} = useContext(DataContext);
    console.log(data);
  return (
    <div>
        <h1>ContextPage</h1>
        <h2>{data.name}</h2>
        
    </div>
  )
}

export default ContextPage