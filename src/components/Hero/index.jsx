import React from "react";
import "./index.css";
import HeroPhoto from "../../assets/images/hero_page.png";
import {language} from "../../lang/index.jsx";

const index = ({}) => {

  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero_wrapper">
            <div className="left_wrapper">
              <p className="left_description">
				
        {localStorage.getItem("lang")==="Russian"?language?.russian?.hero?.description : (localStorage.getItem("lang")==="Uzbek"?language?.uzbek?.hero?.description : language?.english?.hero?.description)}

			  </p>

              <h1 className="left_title">
                {localStorage.getItem("lang") === "Russian" ? language?.russian?.hero?.title : (localStorage.getItem("lang") === "Uzbek" ? language?.uzbek?.hero?.title : language?.english?.hero?.title)}

              </h1>

              <p className="left_paragraph">
                {localStorage.getItem("lang") === "Russian" ? language?.russian?.hero?.paragraph : (localStorage.getItem("lang") === "Uzbek" ? language?.uzbek?.hero?.paragraph:language?.english?.hero?.paragraph)}

              </p>
              <div className="hero_btns">
                <a href="#destination" className="btn_section">
                  {localStorage.getItem("lang") === "Russian" ? language?.russian?.hero?.btn : (localStorage.getItem("lang") === "Uzbek" ? language?.uzbek?.hero?.btn :language?.english?.hero?.btn)}
                  <i className="fa-solid right fa-angle-right"></i>
                </a>
              </div>
            </div>
            <div className="right_wrapper">
              <img src={HeroPhoto} alt="hero" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
