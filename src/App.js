import React,{useState,useContext} from 'react'
import Hook from './7-dars/Hook'
import Api from './8-dars/APi'
import { BrowserRouter as Router, Routes, Route,Link } from "react-router-dom";
import "./App.css"
import ProductDetils from "./8-dars/ProductDetils";
import ContextPage from './11-dars/ContextPage';
import ContextPage2 from './11-dars/ContextPage2';
import { DataContext } from './11-dars/DataContext';
import Input from './12-dars/Input';
const App = () => {
    const [ul, setUl] = useState(false)
    const menuFun = () => {
      setUl(!ul)
    }
    const {dark,setDark} = useContext(DataContext);
    const darkMode = () =>{
      setDark(!dark)
      
    }
  return (
    <div>
     <Router>
       {/* <nav style={dark ? {background:'black'} : {background:"white"}}>
         <div className="logo">
         <Link onClick={menuFun} to="/">LOGO</Link>
           </div>
         <ul className={ul ? "ul activ" : "ul"}>
            <li><Link onClick={menuFun} to="/">Home</Link></li>
            <li><Link onClick={menuFun} to="/page2">Page2</Link></li>
            <button onClick={darkMode}>Dark</button>
         </ul>
         <div className="menu">
           <button onClick={menuFun} id='menu_btn'>Menu</button>
         </div>
       </nav> */}
       <Routes>
         {/* <Route path='/' element={<ContextPage/>} /> */}
         <Route path='/' element={<Input/>} />
         <Route path='/page2' element={<ContextPage2/>} />
         {/* <Route path='/product/:id' element={<ProductDetils/>} /> */}
       </Routes>
     </Router>
    </div>
  )
}

export default App
