import React from "react";
import "./index.css";

import banner from "../../assets/images/banner.png";
import {language} from "../../lang/index.jsx";

const index = () => {
  return (
    <>
      <section className="banner">
        <div className="container banner_wrap">
          <div className="banner_right">
            <h2 className="banner_title">
              {localStorage.getItem("lang") === "Russian" ? language?.russian?.banner?.title : (localStorage.getItem("lang") === "Uzbek" ? language?.uzbek?.banner?.title :language?.english?.banner?.title)}
            </h2>
            <p className="banner_description">
              {localStorage.getItem("lang") === "Russian" ? language?.russian?.banner?.description : (localStorage.getItem("lang") === "Uzbek" ? language?.uzbek?.banner?.description :language?.english?.banner?.description)}
            </p>

            <a href="tel:998903598101" className="btn_section last">
              {localStorage.getItem("lang") === "Russian" ? language?.russian?.banner?.btn :( localStorage.getItem("lang") === "Uzbek" ? language?.uzbek?.banner?.btn :language?.english?.banner?.btn)}
              <i className="fa-solid right fa-angle-right"></i>
            </a>
          </div>
          <div className="banner_left">
            <img src={banner} alt="banner" />
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
