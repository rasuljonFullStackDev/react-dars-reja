import React,{useState} from 'react'
import UseEffect from './UseEffect';

const Form = () => {
    const [value,setValue] = useState({
        username:"",
        password:"",
        age:""
    })
    const sendData = (e) =>{
        e.preventDefault();
        console.log(value);
        setValue({
            username:"",
            password:"",
            age:""
        })
    }
    const inputFun =(e) =>{
        setValue({...value,[e.target.name]:e.target.value})
    }
   
  return (
    <div>
        <form  onSubmit={sendData}>
            <input type="text" placeholder='name' name='username' value={value.username} onChange={inputFun} />
            <input type="password" placeholder='password' name='password' value={value.password} onChange={inputFun} />
            <input type="tel" placeholder='age' name='age' value={value.age} onChange={inputFun} />
            <button type='submit'>Send</button>
        </form>
        <UseEffect/>
    </div>
  )
}

export default Form