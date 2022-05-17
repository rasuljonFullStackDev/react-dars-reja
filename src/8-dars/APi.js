import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Api = () => {
    const path = useNavigate()
    const [data, setData] = useState([]);
    const [load,setLoad] = useState(true);
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then((res) => {
                console.log(res.data);
                setData([...res.data])
                setLoad(false)
            })
            .catch((err) => {
                console.log(err);
                setLoad(false)
            })
    })
    const prodctDetil = (id) =>{
        path(`/product/${id}`)
    } 
    return (
        <>
    <div className={load ? "load activ" : "load"}>
        <img src="./icon/load.svg" alt="" />
    </div>

            <h1>Api</h1>
            <div className="cards">
                {
                    data.map((val) => (
                        <div className="card" onClick={()=>prodctDetil(val.id)} key={val.id}>
                            <img src={val.image} alt="" />
                            <h1>{val.title}</h1>
                            <p>price<b>{val.price}$</b></p>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Api;