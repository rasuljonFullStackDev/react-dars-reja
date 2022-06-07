import React, { useEffect, useState } from 'react'
const Count = () => {
  
  const [count, setCount] = useState(0);
  const countPlus = () => {
    setCount(count => count + 2)
  }
  const countMinus = () => {
    setCount(count => count > 0 ? count - 2 : 0)
  }
  const [narx,setNarx]= useState(0);
 let s = 0
  const [data, setData] = useState([
    {
      id: 0,
      name: "Telefon",
      price: 10,
      count: 0
    },
    {
      id: 1,
      name: "Iphone x",
      price: 300,
      count: 0
    },
    {
      id: 2,
      name: "samsung s10",
      price: 200,
      count: 0
    }
  ])
  const cardPrice =  data.reduce((a,c)=>a+c.price*c.count,0);
  const productAdd = (id) =>{
    setData(data=>data.map((val)=>{
      return val.id===id ? {...val,count:val.count + 1} : val
    }))
    hisobla()
  }
  const productRemove = (id) =>{
    setData(data=>data.map((val)=>{
      return val.id===id ? {...val,count:val.count>0 ? val.count - 1 : 0} : val
    }))
    hisobla()
  }
  useEffect(()=>{
  },[])
  const hisobla = () =>{
    setNarx(0)
    for(let key  of data){
      setNarx(narx=>narx + (key.count*key.price))
      console.log(narx + (key.count*key.price));
      console.log(key.count);
    }
    console.log(data);
  }
  return (
    <div>
      <button onClick={countPlus}>+</button>
      <button>{count}</button>
      <button onClick={countMinus}>-</button>
      <p>umumiy narxi: <b>{cardPrice}</b></p>
      <div className="cards">
        {
          data.map((val) => (
            <div className="card" key={val.id}>
              <h1>{val.name}</h1>
              <p>{val.price}$</p>
              <p>count: <b>{val.count}</b></p>
              <div>
                <button onClick={()=>productAdd(val.id)}>+</button>
                <button>{val.count}</button>
                <button onClick={()=>productRemove(val.id)}>-</button>
              </div>
              <p>
                productAll: <b>{val.count*val.price}$</b>
              </p>
            </div>
          ))
        }
      </div>

    </div>
  )
}

export default Count