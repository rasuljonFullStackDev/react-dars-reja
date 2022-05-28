import React,{useContext,useEffect} from 'react'
import { useParams,useNavigate } from 'react-router-dom';
import { DataContext } from '../13-dars/Api/DataContext';
const Edit = () => {
    const path = useNavigate();
    const {id} = useParams()
    const {setValue,value,sendProduct, data} = useContext(DataContext);
    console.log(data.filter((val)=>val.id===+id));
    useEffect(()=>{
        setValue(data.filter((val)=>val.id===+id)[0])
    },[])
    const inputFun = (e) =>{
        setValue({...value,[e.target.name]:e.target.value})
    }   
    const sendProductFun = (e)=>{
        sendProduct(e);
        path("/")
    }
  return (
    <div>
        <h1>Edit product</h1>
        <button onClick={()=>path("/")}>Back</button>
        <form onSubmit={sendProductFun}>
            <input type="text" onChange={inputFun} value={value.name} name="name" placeholder='name' />
            <input type="number" onChange={inputFun} value={value.price} name="price" placeholder='price' />
            <input type="color" onChange={inputFun} value={value.color} name="color" placeholder='color' style={{ width:"50px", height:"50px"  }} />
            <button type='submit'>Edit</button>
        </form>
    </div>
  )
}

export default Edit;