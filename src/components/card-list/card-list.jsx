import React from 'react';
import Card from '../card/card';


function CardList({monsters}) {
    return (
        <div className='card-list'>
            {monsters.map((monster,index) => 
                <Card monster={monster} key={index}/>
            )}
        </div>
    )
}

export default CardList;
