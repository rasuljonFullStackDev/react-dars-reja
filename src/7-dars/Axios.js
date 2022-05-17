import React,{useEffect,useState} from 'react'
import axios from 'axios'
const Axios = () => {
    const [data,setData] = useState([]);
    const [load,setLoad] = useState(false);
    useEffect(()=>{
        axios.get('https://rasuljon.uz/back-end/crud.php?read_json')
        .then((res)=>{
            console.log(res.data);
            setData([...res.data])
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])
    return (        
        <div>
           
            <div className="cards">
                {
                    data.map((val)=>(
                       <div className="card">
                           <img src={val.img} alt="" />
                           <h1>{val.username}</h1>
                           <p>{val.password}</p>
                       </div> 
                    ))
                }
            </div>
        </div>
    )
}
export default Axios
