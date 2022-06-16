import React, { useState } from 'react'

export const SearchContext = React.createContext()
const SearchContextProvider = ({children}) => {
    const [data, setData] = useState([
        {
            id: 0,
            name: "salom"
        },
        {
            id: 1,
            name: "qale"
        },
        {
            id: 2,
            name: "Humoyun"
        },
        {
            id: 3,
            name: "Bahrom"
        },
        {
            id: 4,
            name: "Shaxboz"
        }
    ])
    const [search, setSearch] = useState('');
    return (
        <SearchContext.Provider value={{ data,search, setSearch }} >
            {children}
        </SearchContext.Provider>
    )
}

export default SearchContextProvider