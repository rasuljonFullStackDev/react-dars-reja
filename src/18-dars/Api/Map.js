import React, { useState } from 'react'

const Map = () => {
    const plusFun = (val) => {
        setData(data => data.map((value) => value.id === val.id ? { ...val, count: val.count + 1 } : value))
    }
    const minusFun = (val) => {
        if (val.count > 0) {
            setData(data => data.map((value) => value.id === val.id ? { ...val, count: val.count - 1 } : value))
        } else {
        }
    }
    const [data, setData] = useState([
        {
            id: 0,
            name: 'olma',
            count: 0,
            narxi: 4000
        },
        {
            id: 1,
            name: 'pomidor',
            count: 0,
            narxi: 2500
        },
        {
            id: 2,
            name: 'bodiring',
            count: 0,
            narxi: 5999
        },
        {
            id: 3,
            name: 'nok',
            count: 0,
            narxi: 5600
        }
    ])
    const Total = data.reduce((a, b) => a + b.count * b.narxi, 0)
    return (
        <div className='cards'>
            {
                data.map((val) => (
                    <div className='card' key={val.id}>
                        <h1>{val.name}</h1>
                        <p>{val.count}</p>
                        <p>{val.narxi}</p>
                        <p>{val.narxi * val.count}</p>
                        <button onClick={() => plusFun(val)}>+</button>
                        <p>{val.count}</p>
                        <button onClick={() => minusFun(val)}>-</button>
                    </div>
                ))
            }
            {
                /* <div className={modal ? 'modal activ' : 'modal'}>
                    <div className="modal_body">
                        <h1>{show.name}</h1>
                        <h2>{show.age}</h2>
                    </div>
                    <button className='close' onClick={modalFun}>X</button>
                </div> */
            }

            <h1>{Total}</h1>
        </div>
    )
}

export default Map