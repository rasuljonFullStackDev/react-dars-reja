import React, { useState } from 'react'

const Input = () => {
    const [input, setInput] = useState({
        name: "",
        password: "",
        email: "",
        country: "",
        id: null
    })
    // agar true qoshsin false edit 
    const [result,setResult] = useState(true);
    const [data, setData] = useState([]);
    const sendFun = (e) => {
        e.preventDefault();
       
        if(result){
            setData([...data, { ...input, id: new Date().getTime() }])
        }else{
            setData(data=>data.map((val)=> val.id === input.id ? input : val))
            setResult(true)
            setInput({
                name: "",
                password: "",
                email: "",
                country: "",
                id: null
            })
        }
        setInput({
            name: "",
            password: "",
            email: "",
            country: "",
            id: null
        })
        modalFun()
    }
    const [modal, setModal] = useState(false);
    const inputFun = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    }
    const modalFun = () => {
        setModal(!modal)
        setInput({
            name: "",
            password: "",
            email: "",
            country: "",
            id: null
        })
        setResult(true)
    }
    // delete
    const deleteFun = (id) =>{
       console.log(id);
      setData(data=>data.filter((val)=> val.id !== id ))
    }
    // edit 
    const editFun = (val) =>{
        modalFun();
        setInput({
            name: val.name,
            password: val.password,
            email: val.email,
            country: val.country,
            id: val.id
        })
        setResult(false);
    }
    return (
        <div className='form'>
            {/* moadal */}
            <button onClick={modalFun}>ADD</button>
            <div className={modal ? "modal_crud activ" : "modal_crud"}>
                <div className="modal_body forms">
                    <h1>Form</h1>
                    <form onSubmit={sendFun}>
                        <input type="text" name='name' value={input.name} onChange={inputFun} placeholder='name' />
                        <input type="password" name='password' value={input.password} onChange={inputFun} placeholder='password' />
                        <input type="email" name='email' value={input.email} onChange={inputFun} placeholder='email' />
                        <input type="text" name='country' value={input.country} onChange={inputFun} placeholder='country' />
                        <button className='btn'>{result ? "ADD" : "EDIT"}</button>
                    </form>
                    <button className='close' onClick={modalFun}>X</button>
                </div>
            </div>
            <table border="1">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>Password</th>
                        <th>Email</th>
                        <th>Country</th>
                        <th>
                            <button>Show</button>
                            <button>edit</button>
                            <button>Delete</button>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((val, i) => (
                            <tr key={val.id}>
                                <td>{i + 1}</td>
                                <td>{val.name}</td>
                                <td>{val.password}</td>
                                <td>{val.email}</td>
                                <td>{val.country}</td>
                                <td>
                                    <button >Show</button>
                                    <button onClick={()=>editFun(val)}>edit</button>
                                    <button onClick={()=>deleteFun(val.id)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>
        </div>
    )
}

export default Input