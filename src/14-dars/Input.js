import React, { useEffect, useState,useContext } from 'react'
import { DataContextTakror } from './Api/DataContextTakror';
const Input = () => {
    const {data1,setData1} = useContext(DataContextTakror);

    const [input, setInput] = useState({
        name: "",
        age: null,
        id: null
    });
    const [data, setData] = useState([]);
    const sendInput = (e) => {
        e.preventDefault()
        console.log(input);
        if (input.id !== null) {
            setData(data => data.map((val) => val.id === input.id ? input : val))
            setInput({
                name: "",
                age: "",
                id: null
            })
        } else {
            setData([...data, { ...input, id: new Date().getTime() }]);
            console.log(data);
            setInput({
                name: "",
                age: "",
                id: null
            })
        }
    }
    const inputFun = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    }
    // delete
    const deleteFun = (id) => {
        setData(data => data.filter((val) => val.id !== id))
    }

    const editFun = (val) => {
        setInput({
            name: val.name,
            age: val.age,
            id: val.id
        })
    }
    const [show,setShow] = useState({});
    const [modal,setModal] = useState(false);
    const modalOpen = () => {setModal(!modal)}
    const showFun = (val) => {
        setShow(val)
        modalOpen();
    }
    useEffect(()=>{
        window.addEventListener('click',(e)=>{
            console.log(e.target.className);
            if(e.target.className.indexOf("modals activ") !==-1){
                setModal(false);
                console.log("open");
            }
        })
    },[])
    return (
        <div>
            {data1.name}
            <button onClick={()=>setData1({...data1, name:"Humoyun"})}>ozgartir</button>
            <form onSubmit={sendInput}>
                <input type="text" onChange={inputFun} name="name" value={input.name} placeholder='name' />
                <input type="number" onChange={inputFun} name="age" value={input.age} placeholder='age' />
                <button type='submit'>{input.id !== null ? "edit" : "Add"}</button>
            </form>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>age</th>
                        <th>activ</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((val, i) => (
                            <tr key={val.id}>
                                <td>{i + 1}</td>
                                <td>{val.name}</td>
                                <td>{val.age}</td>
                                <td>
                                    <button onClick={() => showFun(val)}>show</button>
                                    <button onClick={() => editFun(val)}>edit</button>
                                    <button onClick={() => deleteFun(val.id)} >delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <div className={modal ? "modals activ" : "modals"}>
                <div className="modal_bodys">
                    <h1>{show.name}</h1>
                    <p>{show.age}</p>
                    <button onClick={modalOpen} className="close">x</button>
                </div>
            </div>
        </div>
    )
}

export default Input