import React from 'react'
import IndexReducer from './20-dars/Reducer/IndexReducer'
import Reducers from './20-dars/Reducers'
import MapModal from './g-17/MapModal'
import { Navbar } from './g-17/Navbar'


const App = () => {
  return (
    <div>
      <Navbar/>
     <MapModal/>
    </div>
  )
}

export default App