import React, { useState, useEffect } from 'react'
import axios from 'axios';
const Hook = () => {
  const [menu, setMenu] = useState(false);
  const clickFun = () => {
    // alert("salom")
    setMenu(!menu)
    axios.get(`https://jsonplaceholder.typicode.com/posts/${send}`)
      .then((res) => {
        console.log(res.data);
        setData(res.data)
      })
      .catch((err) => {
        console.log(err);
        setData({
          status: 404
        })
      })
  }
  const [data, setData] = useState({})
  const [send, setSend] = useState("");
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${send}`)
      .then((res) => {
        console.log(res.data);
        setData(res.data)
      })
      .catch((err) => {
        setData({
          status: 404
        })
      })
  }, [])
  return (
    <div>
      <input type="number" onChange={(e) => setSend(e.target.value)} />
      <button onClick={clickFun} className={menu ? "btn activ" : "btn"}>Click</button>
      <div className="card">
        {data.status === 404 ? <>
          <h1>Topilmadi</h1>
        </> :
          <>
            <p>{data.id}</p>
            <h1>{data.title}</h1>
            <p>{data.body}</p>
          </>
        }
      </div>
    </div>
  )
}

export default Hook;
