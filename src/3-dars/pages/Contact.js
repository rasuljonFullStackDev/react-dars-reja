import React from "react";
import { useNavigate,useParams } from "react-router-dom";
const Contact = () =>{
    const path  = useNavigate();
    const {id} = useParams();
    const pathFun = () =>{
        path("/about")
    }
    const pathFun1 = () =>{
        path("/contact/vtvbuhnuh")
    }
    return(
        <div>
            <h1>Contact page</h1>
            <button onClick={pathFun}>Home</button>
            <button onClick={pathFun1}>Parms</button>
            <p>{id}</p>
        </div>
    )
}

export default Contact;
