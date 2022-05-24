import React, { useContext } from 'react'
import { DataContext } from './DataContext'
const ContextPage2 = () => {
    const { dark, setDark } = useContext(DataContext);

    const darkMode = () => {
        setDark(!dark)
    }
    return (
        <div className={dark ? 'dark' : 'dark activ'}>
            <h1>ContextPage2</h1>
            <button onClick={darkMode}>dark</button>

        </div>
    )
}

export default ContextPage2