import React,{useState} from "react";
const Map = () => {
    let data = [
        {
            userId: 1,
            id: 1,
            title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
            img:"./icon/icon1.svg"
        },

        {
            userId: 1,
            id: 2,
            title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
            img:"./icon/icon2.svg"
        },
        {
            userId: 1,
            id: 3,
            title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
            img:"./icon/icon1.svg"
        },
        {
            userId: 1,
            id: 4,
            title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
            img:"./icon/icon2.svg"
        },

    ]
    const [hook,setHook] = useState(false);
    const [tanladi,setTanladi] = useState({});
    const ozgartirFun = () =>{
        setHook(!hook)
    }
    const [modal,setModal] = useState(false)
    const openModal = () => setModal(!modal)
    const tanlaFun = (val) =>{
        console.log(val);
        setTanladi(val)
        openModal()
    }
    return (
        <>
            <div className="cards">
                {
                    data.map((val) => (
                        <div className={val.id===tanladi.id ? "card activ" : "card"}
                        key={val.id} onClick={()=>tanlaFun(val)}>
                            <div>
                                <img src={val.img} alt="" />
                            </div>
                            <h1>{val.title } {val.id}</h1>
                            <p>{val.body}</p>
                        </div>
                    ))
                }
            </div>
           <div>
           {hook ? "ishladi" : "ishlamadi"}
           <button onClick={ozgartirFun}>Click</button>
           </div>
           
           <div className={modal ? "modal activ" : "modal"}>
               <div className="modal_body">
                   <img src={tanladi.img} alt="" />
                   <h1>{tanladi.title}</h1>
                   <p>{tanladi.body}</p>
                   <button className="close" onClick={openModal}>X</button>
               </div>
           </div>
        </>
    )
}
export default Map;