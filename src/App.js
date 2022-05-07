import './App.css';
import { BrowserRouter as Router, Routes, Route,Link } from "react-router-dom";
import Home from "./3-dars/pages/Home";
import Contact from "./3-dars/pages/Contact";
import About from "./3-dars/pages/About";
import Error from './3-dars/pages/Error';
import { useState } from 'react';
import First from './4-dars/First';
function App() {
  const [ul, setUl] = useState(false)
  const menuFun = () => {
    setUl(!ul)
  }
  return (
    <div className="App">
     <Router>
       {/* <nav>
         <div className="logo">LOGO</div>
         <ul className={ul ? "ul activ" : "ul"}>
            <li><Link onClick={menuFun} to="/">Home</Link></li>
            <li><Link onClick={menuFun} to="/about">About</Link></li>
            <li><Link onClick={menuFun} to="/contact">Contact</Link></li>
            <li><Link onClick={menuFun} to="/fist">First</Link></li>
         </ul>
         <div className="menu">
           <button onClick={menuFun} id='menu_btn'>Menu</button>
         </div>
       </nav> */}
       <Routes>
         {/* <Route path='/' element={<Home/>} /> */}
         <Route path='/' element={<First/>} />
         <Route path='/about' element={<About/>} />
         <Route path='/contact' element={<Contact/>} />
         <Route path='/contact/:id' element={<Contact/>} />
         <Route path='*' element={<Error/>} />
       </Routes>
     </Router>
    </div>
  );
}
export default App;
