import React,{useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import { DataContext } from '../13-dars/Api/DataContext';
const Add = () => {
    const path = useNavigate();
 
    const {setValue,value,sendProduct,validator,valid} = useContext(DataContext);
    const inputFun = (e) =>{
        setValue({...value,[e.target.name]:e.target.value});
        validator();
        // console.log(valid);
    }   
    const sendProductFun = (e)=>{
        sendProduct(e);
        // path("/")
        console.log(valid);
    }
  return (
    <div>
        <h1>ADD product</h1>
        <button onClick={()=>path("/")}>Back</button>
        <form onSubmit={sendProductFun}>
            <input type="text" onChange={inputFun} value={value.name} name="name" placeholder='name' />
            <input type="number" onChange={inputFun} value={value.price} name="price" placeholder='price' />
            <input type="color" onChange={inputFun} value={value.color} name="color" placeholder='color' style={{ width:"50px", height:"50px"  }} />
            <button type='submit'>ADD</button>
        </form>
    </div>
  )
}

export default Add