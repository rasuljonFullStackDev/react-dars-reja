import React from 'react'
import { useState } from 'react'

export const Navbar = () => {
    const [menu,setMenu] = useState(false);
    const toggle = () => setMenu(!menu);
  return (
    <nav>
        <div className="nav-menu">
            <div className="nav-logo">
                <a href="#">LOGO</a>
            </div>
            <button className={menu ? "menu activ" : "menu"} onClick={toggle}>
                
            </button>
        </div>
            <ul className={menu ? "nav-item activ" : "nav-item"}>
                <li className="nav-link"><a href="#">Home</a></li>
                <li className="nav-link"><a href="#">Contact</a></li>
                <li className="nav-link"><a href="#">Portfolio</a></li>
            </ul>
    </nav>
  )
}
