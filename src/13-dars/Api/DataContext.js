import React, { useState } from "react";


export const DataContext = React.createContext();
const DataContextProvider = ({ children }) => {
    let valid = {
        name: "",
        price: "",
        color: "",
        count: 0
    }
    const [value, setValue] = useState({
        id: null,
        name: "",
        price: null,
        color: "",
        validator: {
            name: "",
            price: "",
            color: "",
            count: 0
        }
    });    
    const validator = () => {
        for (let key in value.validator) {
            if (value[key] === "") {
                // // valid = { ...valid, key: `${key} erorr`, count: valid.count + 1 };
                // valid.key = `${key} erorr`;
              let   names = key; 
                setValue({...value,validator:{...validator, names:"errr"} })

            } else {
                valid = { ...valid, key: "", count: valid.count + 1 };
            }
            console.log(value.validator);
        }

    }

    const [data, setData] = useState(JSON.parse(localStorage.getItem('data')) || []);
    const localSave = () => {
        setData(JSON.parse(localStorage.getItem('data')) || [])
    }
    // add
    const sendProduct = (e) => {
        e.preventDefault();
        console.log(value.validator);
        if (value.id !== null) {
            localStorage.setItem('data', JSON.stringify(data.map((val) => {
                return val.id === value.id ? value : val
            })));
            localSave()
            setValue({
                id: null,
                name: "",
                price: null,
                color: ""
            });
            console.log(value);
        } else {
            if (localStorage.getItem('data')) {
                localStorage.setItem('data', JSON.stringify([...data, { ...value, id: new Date().getTime() }]));
                localSave()
            } else {
                localStorage.setItem('data', JSON.stringify([{ ...value, id: new Date().getTime() }]))
                localSave()
            }
            // setValue({
            //     id: null,
            //     name: "",
            //     price: null,
            //     color: ""
            // });
        }

    }
    // delete
    const deleteProduct = (id) => {
        setData(data => data.filter((val) => val.id !== id));
        console.log(id);
        console.log(data);
    }

    return (
        <DataContext.Provider value={{ value, setValue, data, setData, sendProduct, deleteProduct, validator, valid }}>
            {children}
        </DataContext.Provider>
    )
}
export default DataContextProvider;