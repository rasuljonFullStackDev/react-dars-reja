import React,{useState} from 'react'
import Hook from './7-dars/Hook'
import Api from './8-dars/APi'
import { BrowserRouter as Router, Routes, Route,Link } from "react-router-dom";
import "./App.css"
import ProductDetils from "./8-dars/ProductDetils";
const App = () => {

    const [ul, setUl] = useState(false)
    const menuFun = () => {
      setUl(!ul)
    }
  return (
    <div>
     <Router>
       <nav>
         <div className="logo">LOGO</div>
         <ul className={ul ? "ul activ" : "ul"}>
            <li><Link onClick={menuFun} to="/">Home</Link></li>
         </ul>
         <div className="menu">
           <button onClick={menuFun} id='menu_btn'>Menu</button>
         </div>
       </nav>
       <Routes>
         <Route path='/' element={<Api/>} />
         <Route path='/product/:id' element={<ProductDetils/>} />
       </Routes>
     </Router>
    </div>
  )
}

export default App
