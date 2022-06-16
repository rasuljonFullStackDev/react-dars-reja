import React from 'react'
import { useState } from 'react'

const Crud = () => {
    const [modal, setModal] = useState(false);
    const modalOpen = () => {
        setModal(!modal)
        setInput({
            name: "",
            age: "",
            id: ""
        })
    }
    const [data, setData] = useState(JSON.parse(localStorage.getItem('data')) || []);
    const localSave = () => {
        if (localStorage.getItem('data')) {
            setData(JSON.parse(localStorage.getItem('data')) || [])
        }
    }
    const send = (e) => {
        e.preventDefault();
        if (input.id === "") {
            if (localStorage.getItem('data')) {
                localStorage.setItem('data', JSON.stringify([...JSON.parse(localStorage.getItem('data')), { ...input, id: new Date().getTime() }]))
            } else {
                localStorage.setItem('data', JSON.stringify([{ ...input, id: new Date().getTime() }]))
            }
            localSave()
        } else {
            localStorage.setItem('data', JSON.stringify(
                data.map((val) => val.id === input.id ? input : val)
            ))
            localSave()
        }
        modalOpen()
        console.log(data);
    }
    const [input, setInput] = useState({
        name: "",
        age: "",
        id: ""
    })
    const inputFun = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }
    const deleteFun = (id) => {
        localStorage.setItem('data', JSON.stringify(data.filter((val) => val.id !== id)));
        localSave()
    }
    const editFun = (val) => {
        modalOpen()
        setInput({
            name: val.name,
            age: val.age,
            id: val.id
        })
    }
    return (
        <div>
            <h1>CRUD</h1>
            <button onClick={modalOpen}>ADD</button>
            <div className={modal ? "modal activ" : "modal"}>
                <div className="modal_body">
                    <form onSubmit={send} >
                        <h1>{input.id === "" ? "ADD" : "EDIT"}</h1>
                        <input type="text" onChange={inputFun} name="name" value={input.name} placeholder='name' />
                        <input type="number" onChange={inputFun} name="age" value={input.age} placeholder='age' />
                        <button type='submit'>{input.id === "" ? "ADD" : "EDIT"}</button>
                    </form>
                </div>
            </div>
            <div className="cards">
                {
                    data.map((val) => (
                        <div className="card">
                            <h1>{val.name}</h1>
                            <p>{val.age}</p>
                            <button onClick={() => deleteFun(val.id)}>Delete</button>
                            <button onClick={() => editFun(val)}>Edit</button>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default Crud