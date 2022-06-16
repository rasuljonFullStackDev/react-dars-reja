import React, { useState, useEffect } from 'react'
import axios from 'axios';
const CrudBackend = () => {
    const [data, setData] = useState([]);
    const [modal, setModal] = useState(false);
    const [input, setInput] = useState({
        username: "",
        password: "",
        img: "",
        code: "",
        id: ""
    })
    const modalOpen = () => {
        setModal(!modal)
        setInput({
            username: "",
            password: "",
            img: "",
            id: ""
        })
        setShow({})
    }
    const jsonData = () => {
        axios({
            url: "https://rasuljon.uz/back-end/crud.php?read_json"
        })
            .then((res) => {
                console.log(res.data);
                setData([...res.data])
            })
            .catch((err) => {
                console.log(err);
                const { code } = err;
                setInput({ ...input, code: code })
                if (code) {
                    alert("net yoq")
                }
            })
    }
    useEffect(() => {
        jsonData()
    }, [])

    // add
    const send = (e) => {
        e.preventDefault();
        console.log(input);
        let formData = new FormData();////malumot jonatish uchun ishlatiladi
        formData.append('username', input.username)
        formData.append('password', input.password)
        if (input.id !== "") {
            formData.append('status', 'update_data')
            formData.append('id', input.id)

        } else {
            formData.append('status', 'add_data')
        }
        formData.append('img', input.img)
        axios({
            url: "https://rasuljon.uz/back-end/crud.php",
            method: "post",
            data: formData
        })
            .then((res) => {
                console.log(res.data);
                if (res.status === 200) {
                    jsonData();
                    modalOpen()
                    setInput({
                        username: "",
                        password: "",
                        img: ""
                    })
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }
    const inputFun = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }
    // img yuklash
    const imgUpload = (e) => {
        setInput({ ...input, img: e.target.files[0] })
        console.log(e.target.files[0]);
    }
    // delete
    const deleteFun = (id) => {
        // status=delete_data
        let formData = new FormData();
        formData.append('status', 'delete_data')
        formData.append('id', id)
        axios({
            method: "post",
            url: "https://rasuljon.uz/back-end/crud.php",
            data: formData
        })
            .then((res) => {
                console.log(res.data);
                if (res.status === 200) {
                    jsonData();
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }
    // edit
    const editFun = (val) => {
        modalOpen();
        setInput({
            username: val.username,
            password: val.password,
            img: val.img,
            id: val.id
        })



    }
    const [show, setShow] = useState({});
    const showFun = (val) => {
        modalOpen()
        setShow(val);

    }
    return (
        <div className='crud'>
            <h1>Add crud</h1>
            <button onClick={modalOpen}>ADD</button>
            {/* read */}

            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>img</th>
                        <th>Username</th>
                        <th>Password</th>
                        <th>activ</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((val, i) => (
                            <tr key={val.id}>
                                <td>{i + 1}</td>
                                <td ><img style={{ width: "50px", height: "50px" }} src={val.img} alt="" /></td>
                                <td>{val.username}</td>
                                <td>{val.password}</td>
                                <td>
                                    <button onClick={() => showFun(val)}>show</button>
                                    <button onClick={() => editFun(val)}>edit</button>
                                    <button onClick={() => deleteFun(val.id)}>delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <div className={modal ? "modal activ" : "modal"}>
                <div className="modal_body">
                    {
                        show.username ?
                            <>
                                <h1>{show.username}</h1>
                                <p>{show.password}</p>
                                <div>
                                    <img style={{ width: "100px", height: "100px" }} src={show.img} alt="" />
                                </div>
                            </>
                            :
                            <form onSubmit={send}>
                                <input type="text" onChange={inputFun} name="username" value={input.username} placeholder='username' />
                                <input type="password"
                                    onChange={inputFun} name="password" value={input.password} placeholder='password' />
                                <input type="file" onChange={imgUpload} name='img' placeholder='password' />
                                <button type='submit'>
                                    {input.id !== "" ? "EDIT" : "ADD"}
                                </button>
                            </form>
                    }
                    <button className="close" onClick={modalOpen}>X</button>
                </div>
            </div>
        </div>
    )
}

export default CrudBackend