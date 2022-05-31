import React, { useEffect, useState } from 'react'
import Input from './Input';

const Takrorlash = () => {
    const [data, setData] = useState([
        {
            id: 0,
            name: "name 1",
            age: 14
        },
        {
            id: 1,
            name: "name 2",
            age: 17
        },
        {
            id: 2,
            name: "name 3",
            age: 18
        }
    ]);
    const [modal, setModal] = useState(false);
    const modalOpen = () => {
        setModal(!modal)
    };
    useEffect(() => {
        window.addEventListener('click', (e) => {
            if (e.target.className === "modals activ") {
                modalOpen()
            }
        })
    }, []);
    const [modalData,setModalData] = useState({})
    const modalOpenFun = (val) =>{
        console.log(val);
        setModalData(val);
        modalOpen()
    }
    return (
        <div>
            {/* map */}

           <div className="cards">
           {
                data.map((val) => (
                    <div className='card' onClick={()=>modalOpenFun(val)} key={val.id}>
                        <h1>{val.name}</h1>
                        <p>{val.age}</p>
                    </div>
                ))
            }
           </div>
            {/* <button onClick={modalOpen}>Modal open</button>
            <div className={modal ? "modals activ" : "modals"}>
                <div className="modal_bodys">
                    <h1>{modalData.name}</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quo officiis quod aliquam assumenda provident?

                    </p>
                    <button onClick={modalOpen} className='close'>X</button>
                </div>
            </div> */}

            <Input/>
        </div>
    )
}

export default Takrorlash