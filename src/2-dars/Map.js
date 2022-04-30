import React from "react";

const Map = () => {
    let data = [
        {
            id: 0,
            name: "WordPress Site",
            text: `Lorem ipsum dolor sit amet,
            consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut`,
            link: "kun.uz",
            img:"./icon/icon1.svg"
        },
        {
            id: 1,
            name: "WordPress Plugin",
            text: `Lorem ipsum dolor sit amet,
            consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut`,
            link: "kun.uz",
            img:"./icon/icon1.svg"
        },
        {
            id: 2,
            name: "Website Redesign",
            text: `Lorem ipsum dolor sit amet,
            consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut`,
            link: "kun.uz",
            img:"./icon/icon1.svg"
        },
        {
            id: 3,
            name: "Search Engine Optimization",
            text: `Lorem ipsum dolor sit amet,
            consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut`,
            link: "kun.uz",
            img:"./icon/icon1.svg"
        }, {
            id: 4,
            name: "WordPress Site Optimization ",
            text: `Lorem ipsum dolor sit amet,
            consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut`,
            link: "kun.uz",
            img:"./icon/icon1.svg"
        },
        {
            id: 5,
            name: "Cross Platform Mobile App",
            text: `Lorem ipsum dolor sit amet,
            consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut`,
            link: "kun.uz",
            img:"./icon/icon1.svg"
        },
        {
            id: 6,
            name: "Cross Platform Mobile App",
            text: `Lorem ipsum dolor sit amet,
            consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut`,
            link: "kun.uz",
            img:"./icon/icon1.svg"
        }
    ]
    return (
        <div className="cards">
            {
            data.length > 3 ?
            data.map((item) => (
                <div className="card" key={item.id}>
                    <div>
                        <img src={item.img} alt="" />
                    </div>
                    <h1>{item.name}</h1>
                    <p>{item.text}
                    </p>
                    <a href={item.link}>Read More→</a>
                </div>
            )) 
            : <div>Topilmadi</div>
        }
        </div>
    )
}

export default Map;