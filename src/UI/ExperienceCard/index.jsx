import React from 'react';
import "./index.css"

const index = (card) => {
    return (
        <>
        <div className='card'>
          <img src={card.photo} alt="experince_photos" />
          <div className="card_box">
            <h3 className="card_title">{card.title}</h3>
            <p className="card_description">{card.description}</p>
          </div>


        </div>
            
        </>
    );
};

export default index;