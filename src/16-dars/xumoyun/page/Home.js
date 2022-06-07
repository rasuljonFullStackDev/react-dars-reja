import React, { useEffect, useState } from 'react'

const Home = () => {
  const[modal,setModal] = useState(false);
  const Modal = () =>{
    setModal(!modal)
  }
useEffect(()=>{
  window.addEventListener('click', (e)=>{
    console.log(e.target);
    if(e.target.className.toLowerCase().indexOf("modal_oyna111 activ")!==-1 ){
      setModal(false)
    }
  })
},[])
  return (
    <div>
        <h1>Home</h1>
        <button onClick={Modal}>OpenModal</button>
        <div className={modal ? "modal_oyna111 activ" : "modal_oyna111"}>
          <div className="modal11">
            <h1>SALOM</h1>
            <p>Lorem ipsum dolor sit <br /> amet consectetur adipisicing.</p>
            <button onClick={Modal} className='yopish'>X</button>
          </div>
        </div>
    </div>
  )
}

export default Home