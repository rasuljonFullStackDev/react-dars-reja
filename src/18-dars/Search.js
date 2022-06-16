import React, { useContext, useState } from 'react'
import { SearchContext } from './Api/SearchContext';

const Search = () => {
    const { data, search, setSearch } = useContext(SearchContext)
    const inputFun = (e) => {
        setSearch(e.target.value);
        console.log(e.target.value);
    }
    const [tab, setTab] = useState(1)
    return (
        <>
            <form >
                <input type="text" placeholder='search' onChange={inputFun} />
                <input type="file" id='img' style={{ display:"none" }} />
                <label htmlFor="img">
                    img
                </label>
            </form>
            <div className='cards'>
                {
                    search === "" ?
                        data.map((val) => (
                            <div className="card" key={val.id}>
                                <h1>{val.name}</h1>
                            </div>
                        )) :
                        <>
                            {data.filter((ser) => {
                                return ser.name.toLowerCase().indexOf(search) !== -1
                            }).length > 0 ? data.filter((ser) => {
                                return ser.name.toLowerCase().indexOf(search) !== -1
                            }).map((val) => (
                                <div className="card" key={val.id}>
                                    <h1>{val.name}</h1>
                                </div>
                            )) :
                                <h1>404</h1>
                            }

                        </>
                }

            </div>
            <button onClick={() => setTab(1)}>1</button>
            <button onClick={() => setTab(2)}>2</button>
            <button onClick={() => setTab(3)}>3</button>
            {
                tab === 1 ? <p>bir</p> : tab === 2 ? <p>ikki</p> : tab === 3 ? <p>uch</p> : ""
            }

        </>
    )
}

export default Search