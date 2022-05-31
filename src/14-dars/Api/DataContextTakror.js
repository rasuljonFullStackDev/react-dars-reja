import React, { useState } from 'react'

export const DataContextTakror = React.createContext()

const DataContextTakrorProvider = ({ children }) => {
    const [data1,setData1] = useState({
        name:"Bahrom"
    })
    return (
        <DataContextTakror.Provider value={{ data1,setData1 }} >
            {children}
        </DataContextTakror.Provider>
    )
}

export default DataContextTakrorProvider