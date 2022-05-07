import React,{useState} from "react";

const Modal = () =>{
    const [modal, setModal] = useState(false);
    const openModal = () =>{
        setModal(!modal)
    }
    return(
        <>
        <button onClick={openModal}>button open</button>
        <div className={modal ?  "modal activ" : "modal" }>
            <div className="modal_body">
                <h1>Modal </h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem eveniet, dolor hic nulla veniam dolorum rerum possimus quod labore quam, expedita provident ipsam commodi totam?</p>
                <button className="close" onClick={openModal}>X</button>
            </div>
        </div>
        </>
    )
}


export default  Modal;