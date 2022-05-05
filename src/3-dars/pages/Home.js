import React,{useState} from "react";
const Home = () =>{
    const [count,setCount] = useState(0)
    const [menu,setMenu] = useState(false);
    const plusFun = () =>{
        setCount(count + 1)
    }
    const minusFun = () =>{
        if(count>0){
            setCount(count - 1)
        }
    }
    const resetFun = () =>{
        setCount(0)
    }
    const menuFun = () =>{
        setMenu(!menu)
    }
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={plusFun}>+</button>
            <button onClick={minusFun}>-</button>
            <button onClick={resetFun}>Reset</button>
            <button className={menu ? "btn activ" : "btn"} onClick={menuFun}>menu</button>
        </div>
    )
}

export default Home;
