import React,{useState} from "react";

export const DataContext = React.createContext();

const DataContextProvider = ({children}) =>{
    const [data,setData] = useState({
        name:"Bahrom",
        age:18
    });
    const [dark,setDark] = useState(false);
    return(
        <DataContext.Provider value={{ data,setDark,dark }}>
            {children}
        </DataContext.Provider>
    )
}
export default DataContextProvider;