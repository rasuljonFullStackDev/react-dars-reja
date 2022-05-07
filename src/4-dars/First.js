import React, { useState } from "react";
import Modal from "./Modal";
import Tanlash from "./Tanlash";
import Corusel from "./Corusel";
const First = () =>{
    const [id,setId] = useState({name:"Bahrom",age:18})
    const [text,setText] = useState("Salom");
    const [text1,setText1] = useState(false)
    const [massiv,setMassiv] = useState([
        {
            id:0,
            name:"Dildora",
            age:15
        },
        {
            id:1,
            name:"Humoyun",
            age:15
        }, {
            id:2,
            name:"Bobur",
            age:15
        }
    ])
    const ozgarSin = () =>{
     setText1(!text1)
    }
    return(
        <>
        {/* <h1>{id.name}</h1>
        <p>{id.age}</p>
        <h3>{text1 ? "salom" : "ozgardi"}</h3>
        <div>
            {
                massiv.map((val)=>(
                    <div key={val.id}>
                        <h1>{val.name}</h1>
                        <p>{val.age}</p>
                    </div>
                ))
            }
        </div>
        <button onClick={ozgarSin}>Ozgaritr</button>
        <Modal/> */}
           <Tanlash/> 
           <Corusel/>
        </>
    )
}
export default First;