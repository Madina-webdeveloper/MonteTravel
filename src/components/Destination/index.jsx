import React from "react";
import "./index.css";
import Card from "../../UI/Card";
import right from "../../assets/images/right_destination.svg";
import left from "../../assets/images/left.svg";
import dubay from "../../assets/images/dubay.jpg";
import tailand from "../../assets/images/tailand.jpg";
import misr from "../../assets/images/misr.jpg";
import antaliya from "../../assets/images/antaliya.jpg"
import {language} from "../../lang/index.jsx";

const index = () => {
    return (
      <>
        <section id="destination">
          <div className="container destination">
            <div className="destination_left">
              <h2 className="destination_title">
                {localStorage.getItem("lang") === "Russian"
                  ? language?.russian?.destination?.left?.title
                  : (localStorage.getItem("lang") === "Uzbek"
                  ? language?.uzbek?.destination?.left?.title
                  :language?.english?.destination?.left?.title)}
              </h2>
              <p className="destination_description">
                {localStorage.getItem("lang") === "Russian"
                  ? language?.russian?.destination?.left?.description
                  : (localStorage.getItem("lang") === "Uzbek"
                  ? language?.uzbek?.destination?.left?.description
                  : language?.english?.destination?.left?.description)}{" "}
              </p>
              <div className="btns_destination">
                <button className="btn_destination">
                  <img src={left} alt="left" />
                </button>
                <button className="btn_destination">
                  <img src={right} alt="right" />
                </button>
              </div>
            </div>
            <div className="destination_right">
              <Card
                img={dubay}
                title={
                  localStorage.getItem("lang") === "Russian"
                    ? language?.russian?.destination?.right?.cappadocia?.title
                    :( localStorage.getItem("lang") === "Uzbek"
                    ? language?.uzbek?.destination?.right?.cappadocia?.title
                    :language?.english?.destination?.right?.cappadocia?.title)
                }
              
                priceName={
                  localStorage.getItem("lang") === "Russian"
                    ? language?.russian?.destination?.right?.cappadocia?.price
                    : (localStorage.getItem("lang") === "Uzbek"
                    ? language?.uzbek?.destination?.right?.cappadocia?.price
                    :language?.english?.destination?.right?.cappadocia?.price)
                }
                price="450"
                btn={
                  localStorage.getItem("lang") === "Russian"
                    ? language?.russian?.destination?.right?.cappadocia?.btn
                    : (  localStorage.getItem("lang") === "Uzbek"
                    ? language?.uzbek?.destination?.right?.cappadocia?.btn
                    :language?.english?.destination?.right?.cappadocia?.btn)
                }
                person={
                  localStorage.getItem("lang") === "Russian"
                    ? language?.russian?.destination?.right?.cappadocia?.person
                    : ( localStorage.getItem("lang") === "Uzbek"
                    ? language?.uzbek?.destination?.right?.cappadocia?.person
                    :language?.english?.destination?.right?.cappadocia?.person)
                }
              />
              <Card
                img={tailand}
                title={
                  localStorage.getItem("lang") === "Russian"
                    ? language?.russian?.destination?.right?.sossus?.title
                    : (  localStorage.getItem("lang") === "Uzbek"
                    ? language?.uzbek?.destination?.right?.sossus?.title
                    :language?.english?.destination?.right?.sossus?.title)
                }
              
                priceName={
                  localStorage.getItem("lang") === "Russian"
                    ? language?.russian?.destination?.right?.sossus?.price
                    : (  localStorage.getItem("lang") === "Uzbek"
                    ? language?.uzbek?.destination?.right?.sossus?.price
                    : language?.english?.destination?.right?.sossus?.price)
                }
                price="500"
                btn={
                  localStorage.getItem("lang") === "Russian"
                    ? language?.russian?.destination?.right?.sossus?.btn
                    :(    localStorage.getItem("lang") === "Uzbek"
                    ? language?.uzbek?.destination?.right?.sossus?.btn
                    :language?.english?.destination?.right?.sossus?.btn)
                }
                person={
                  localStorage.getItem("lang") === "Russian"
                    ? language?.russian?.destination?.right?.sossus?.person
                    : (  localStorage.getItem("lang") === "Uzbek"
                    ? language?.uzbek?.destination?.right?.sossus?.person
                    :language?.english?.destination?.right?.sossus?.person)
                }
              />
              <Card
                img={misr}
                title={
                  localStorage.getItem("lang") === "Russian"
                    ? language?.russian?.destination?.right?.albuq?.title
                    : (  localStorage.getItem("lang") === "Uzbek"
                    ? language?.uzbek?.destination?.right?.albuq?.title
                    : language?.english?.destination?.right?.albuq?.title)
                }
               
                priceName={
                  localStorage.getItem("lang") === "Russian"
                    ? language?.russian?.destination?.right?.albuq?.price
                    : (   localStorage.getItem("lang") === "Uzbek"
                    ? language?.uzbek?.destination?.right?.albuq?.price
                    :language?.english?.destination?.right?.albuq?.price)
                }
                price="600"
                btn={
                  localStorage.getItem("lang") === "Russian"
                    ? language?.russian?.destination?.right?.albuq?.btn
                    : (    localStorage.getItem("lang") === "Uzbek"
                    ? language?.uzbek?.destination?.right?.albuq?.btn
                    :language?.english?.destination?.right?.albuq?.btn)
                }
                person={
                  localStorage.getItem("lang") === "Russian"
                    ? language?.russian?.destination?.right?.albuq?.person
                    : (  localStorage.getItem("lang") === "Uzbek"
                    ? language?.uzbek?.destination?.right?.albuq?.person
                    : language?.english?.destination?.right?.albuq?.person)
                }
              />
              <Card
                img={antaliya}
                title={
                  localStorage.getItem("lang") === "Russian"
                    ? language?.russian?.destination?.right?.antalia?.title
                    : (   localStorage.getItem("lang") === "Uzbek"
                    ? language?.uzbek?.destination?.right?.antalia?.title
                    : language?.english?.destination?.right?.antalia?.title)
                }
               
                priceName={
                  localStorage.getItem("lang") === "Russian"
                    ? language?.russian?.destination?.right?.antalia?.price
                    :(  localStorage.getItem("lang") === "Uzbek"
                    ? language?.uzbek?.destination?.right?.antalia?.price
                    :language?.english?.destination?.right?.antalia?.price)
                }
                price="750"
                btn={
                  localStorage.getItem("lang") === "Russian"
                    ? language?.russian?.destination?.right?.antalia?.btn
                    : (  localStorage.getItem("lang") === "Uzbek"
                    ? language?.uzbek?.destination?.right?.antalia?.btn
                    :language?.english?.destination?.right?.antalia?.btn)
                }
                person={
                  localStorage.getItem("lang") === "Russian"
                    ? language?.russian?.destination?.right?.antalia?.person
                    : (  localStorage.getItem("lang") === "Uzbek"
                    ? language?.uzbek?.destination?.right?.antalia?.person
                    :language?.english?.destination?.right?.antalia?.person)
                }
              />
            </div>
          </div>
        </section>
      </>
    );
};

export default index;
