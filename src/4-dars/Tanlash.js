import React, { useState } from "react";

const Tanlash = () =>{
    const [massiv,setMassiv] = useState([
        {
            id:0,
            name:"Dildora",
            age:15,
            text:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas, dignissimos."
        },
        {
            id:1,
            name:"Humoyun",
            age:15,
            text:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas, dignissimos."
        }, {
            id:2,
            name:"Bobur",
            age:15,
            text:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas, dignissimos."
        }
    ])
    const [modal, setModal] = useState(false);
    const openModal = () =>{
        setModal(!modal)
    }
    const [tanladi,setTanladi] = useState({});
    const tanlaFun = (val) =>{
        console.log(val);
        setTanladi(val)
        openModal()
    }
    return(
        <>
            {massiv.map((val)=>(
                <button className={val.id===tanladi.id ? "activ" :""} onClick={()=>tanlaFun(val)}>{val.name}</button>
            ))}
            <div className={modal ?  "modal activ" : "modal" }>
            <div className="modal_body">
                <h1>{tanladi.name} <b>{tanladi.age}</b> </h1>
                <p>{tanladi.text}</p>
                <button className="close" onClick={openModal}>X</button>
            </div>
        </div>
        </>
        
    )
}

export default Tanlash;