import React from "react";
import "./index.css";


const index = (box) => {


  return (
    <>
      <div className="box">
        <img src={box.img} alt="image" className="box_img" />
        <div className="box_wrap">
          <div className="titles">
            <h3 className="box_title">{box.title}</h3>
          
          </div>
          <div className="box_prices">
            <div className="box_right_prices">
              <p className="price">{box?.priceName}</p>
              <p className="person">
                <span  className="person_price">
                  $ {box.price}
                </span>
                {box?.person}
              </p>
            </div>
            <a href="#contact" className="price_btn">{box?.btn}</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
