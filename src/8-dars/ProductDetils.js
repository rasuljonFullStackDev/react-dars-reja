import React, { useEffect, useState } from "react";
import axios from "axios";
import loadimg from "./img/load.svg"
import { useParams } from "react-router-dom";
const ProductDetils = () => {
    const [load,setLoad] = useState(true);
    const [product, setProduct] = useState({});
    const { id } = useParams();
    useEffect(() => {
        if (+id) {
            axios.get(`https://fakestoreapi.com/products/${id}`)
                .then((res) => {
                    setProduct(res.data)
                    setLoad(false)
                })
                .catch((err) => {
                    console.log(err);
                    setLoad(false)
                })
        }
    }, [])
    return (
        <>
            <div className={load ? "load activ" : "load"}>
            <img src={loadimg} alt="load" />
            </div>
            <div className="card cardDetil">
                <div className="img">
                    <img src={product.image} alt="" />
                </div>
                <div className="content">
                    <h1>{product.title}</h1>
                    <p>{product.description}</p>
                    <p><b>price:{product.price}$</b></p>
                </div>
            </div>

        </>
    )
}
export default ProductDetils;