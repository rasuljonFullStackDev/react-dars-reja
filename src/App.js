import React from 'react'
import { BrowserRouter as Router, Routes, Route,Link } from "react-router-dom";
import "./App.css"
import List from './13-dars/List';
import Add from './13-dars/Add';
import Edit from './13-dars/Edit';
const App = () => {
    
  
  return (
    <div>
     <Router>
       <Routes>
         <Route path='/' element={<List/>} />
         <Route path='/add' element={<Add/>} />
         <Route path='/edit/:id' element={<Edit/>} />
       </Routes>
     </Router>
    </div>
  )
}

export default App
