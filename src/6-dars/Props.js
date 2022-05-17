import React from 'react'

const Props = ({ name, oby }) => {
    return (
        <div>
            <h1>Meni ismi {name}</h1>
            {
                oby ? <>
                    <h2>{oby.name}</h2>
                    <p>{oby.text}</p>
                </> : ""
            }

        </div>
    )
}

export default Props