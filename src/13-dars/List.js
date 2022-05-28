import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { DataContext } from '../13-dars/Api/DataContext';
const List = () => {
    const path = useNavigate();
    const { data,deleteProduct } = useContext(DataContext);
    return (
        <div>
            <h1>CRUD</h1>
            <button onClick={() => path("/add")}>ADD</button>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Color</th>
                        <th>activ</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((val,i)=>(
                            <tr key={val.id}>
                                <td>{i + 1}</td>
                                <td>{val.name}</td>
                                <td>{val.price}</td>
                                <td>
                                    <span>color</span>
                                    <div style={{ width:"50px", height:"50px",background:val.color }}></div>
                                </td>
                                <td>
                                    <button onClick={()=>path(`/edit/${val.id}`)}>Edit</button>
                                    <button onClick={()=>deleteProduct(val.id)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

        </div>
    )
}

export default List