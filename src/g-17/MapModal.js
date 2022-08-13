import React, { useState } from 'react'
import { useEffect } from 'react';

const MapModal = () => {
    const [data, setData] = useState([
        {
            id: 0,
            name: "Ali",
            phone: 9999899
        }
        , {
            id: 1,
            name: "Bahrom",
            phone: 9999899
        },
        {
            id: 2,
            name: "Farrux",
            phone: 9999899
        }
        ,
        {
            id: 3,
            name: "Muzaffar",
            phone: 9999899
        }
    ])

    const [showData,setShowData] = useState({});
    const [modal,setModal] = useState(false);
    const openModal = () =>setModal(!modal);
    const show = (item) =>{
        openModal()
        setShowData(item);
    }

    useEffect(()=>{
        window.addEventListener('click',(e)=>{
            console.log(e.target.className);
            if(e.target.className==='modal activ'){
                setModal(false)
                // console.log("ss");
            }
        })
    },[])

    return (
      <>
        <div className='container'>
            {
                data.map((item) => {
                    return (
                        <div className="card" key={item.id}>
                            <h1>{item.name}</h1>
                            <p>{item.phone}</p>
                            <button onClick={()=>show(item)} >Show</button>
                        </div>
                    )
                })
            }

        </div>
        <div className={modal ? "modal activ" : "modal"}>
            <div className="modal_body">
                <h1>{showData.name}</h1>
                <p>{showData.phone}</p>
                <button onClick={openModal} className='close'>close</button>
            </div>
        </div>
      
      
      </>
    )
}

export default MapModal