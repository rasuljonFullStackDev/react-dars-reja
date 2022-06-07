import React from 'react'
import Home from './16-dars/xumoyun/page/Home';
import Blog from './16-dars/xumoyun/page/Blog';
import About from './16-dars/xumoyun/page/About';
import { BrowserRouter as Router, Routes, Route  , Link } from 'react-router-dom';
const App = () => {
  return (
    <div>
    <Router>
      <nav>
        <div className="nav_logo">
          <Link to="/">LOGO</Link>
        </div>
        <ul className='navul'>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
          <Link to="/blog">Blog</Link>
          </li>
          <li>
          <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <Routes>
<Route path='/' exact element={<Home/>} />
<Route path='/blog' element={<Blog/>}/>
<Route path='/about' element={<About/>}/>
      </Routes>
    </Router>

    </div>
  )
}

export default App