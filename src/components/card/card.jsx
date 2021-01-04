import React from 'react'

function Card({monster}) {
    return (
        <div className='card'>
            {/* <img src={} alt={}/> */}
            <h1>{monster.name}</h1>
            <p>{monster.email}</p>

        </div>
    )
}

export default Card;
