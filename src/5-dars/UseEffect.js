import React, { useEffect, useState } from 'react'
const UseEffect = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((res) => res.json())
            .then((json) => {
                setData([...json])
            })
    }, [])
    const [searchs, setSearchs] = useState("")
    const searchFun = (e) => {
        console.log(e.target.value);
        setSearchs(e.target.value.trim())
    }
    return (
        <div >
            <form action="" className='search'>
                <input type="text" placeholder='search' onKeyUp={searchFun} />
            </form>
            <div className='grid'>
                {
                    searchs === "" ?
                        data.map((val) => (
                            <div key={val.id}>
                                <h1>{val.title}</h1>
                                <p>{val.body}</p>
                            </div>
                        ))
                        : <>
                            {data.filter((res) => {
                                return res.title.toLowerCase().indexOf(searchs.toLocaleLowerCase()) !== -1
                            }).length > 0 ? data.filter((res) => {
                                return res.title.toLowerCase().indexOf(searchs.toLocaleLowerCase()) !== -1
                            }).map((val) => (
                                <div key={val.id}>
                                    <h1>{val.title}</h1>
                                    <p>{val.body}</p>
                                </div>
                            )) : "Topilmadi"}
                        </>
                }
            </div>
        </div>
    )
}
export default UseEffect