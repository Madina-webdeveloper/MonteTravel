import React from "react";
import "./index.css";
import logo_footer from "../../assets/images/logo_black.png";
import { language } from "../../lang/index.jsx";
import click from "../../assets/images/click.png";
import payme from "../../assets/images/payme.png";

const index = () => {
  return (
    <>
      <footer>
        <div className="container footer">
          <div className="footer_first">
            <div className="footer_left">
              <img src={logo_footer} alt="logo" className="logo_f" />
              <p className="footer_description">
                {localStorage.getItem("lang") === "Russian"
                  ? language?.russian?.footer?.description
                  : (localStorage.getItem("lang") === "Uzbek"
                  ? language?.uzbek?.footer?.description
                  :language?.english?.footer?.description)}
              </p>
            </div>
            <div className="footer_right">
              <ul className="footer_ul">
                <li className="footer_ul_li">
                  <a href="https://my.click.uz" target="_blank"  className="footer_ul_li_link">
                    <img className="payments" src={click} alt="click" />
                  </a>
                </li>
                <li className="footer_ul_li">
                  <a href="https://payme.uz"  target="_blank" className="footer_ul_li_link">
                    <img className="payments" src={payme} alt="payme" />
                  </a>
                </li>
              </ul>
              <ul className="footer_ul">
                <h4 className="footer_ul_title">
                  {localStorage.getItem("lang") === "Russian"
                    ? language?.russian?.footer?.descriptions?.address
                    :(localStorage.getItem("lang") === "Uzbek"
                    ? language?.uzbek?.footer?.descriptions?.address
                    : language?.english?.footer?.descriptions?.address)}
                </h4>
                <li className="footer_ul_li">
                  {localStorage.getItem("lang") === "Russian"
                    ? language?.russian?.footer?.descriptions?.cappadocia
                    :( localStorage.getItem("lang") === "Uzbek"
                    ? language?.uzbek?.footer?.descriptions?.cappadocia
                    :language?.english?.footer?.descriptions?.cappadocia)}
                </li>
                <li className="footer_ul_li">
                  {localStorage.getItem("lang") === "Russian"
                    ? language?.russian?.footer?.descriptions?.sossus
                    : (localStorage.getItem("lang") === "Uzbek"
                    ? language?.uzbek?.footer?.descriptions?.sossus
                    : language?.english?.footer?.descriptions?.sossus)}
                </li>
                <li className="footer_ul_li">
                  {localStorage.getItem("lang") === "Russian"
                    ? language?.russian?.footer?.descriptions?.albuq
                    : (localStorage.getItem("lang") === "Uzbek"
                    ? language?.uzbek?.footer?.descriptions?.albuq
                    : language?.english?.footer?.descriptions?.albuq)}
                </li>
                <li className="footer_ul_li">
                  {localStorage.getItem("lang") === "Russian"
                    ? language?.russian?.footer?.descriptions?.antalia
                    : (localStorage.getItem("lang") === "Uzbek"
                    ? language?.uzbek?.footer?.descriptions?.antalia
                    : language?.english?.footer?.descriptions?.antalia)}
                </li>
              </ul>

              <ul className="footer_ul">
                <h4 className="footer_ul_title">
                  {localStorage.getItem("lang") === "Russian"
                    ? language?.russian?.footer?.follow
                    : (localStorage.getItem("lang") === "Uzbek"
                    ? language?.uzbek?.footer?.follow
                    : language?.english?.footer?.follow)}
                </h4>
                <li className="footer_ul_li">
                  <a
                    target="_blank"
                    href="https://www.instagram.com/monte.atelier.tour?igsh=ZTlwcGVwaGQ5Ymlz"
                    className="footer_ul_li_link"
                  >
                    <i className="fa-brands fa-instagram"></i>Instagram
                  </a>
                </li>
                <li className="footer_ul_li">
                  <a
                    target="_blank"
                    href="https://t.me/sunshine_traveluzb"
                    className="footer_ul_li_link"
                  >
                    <i className="fa-brands fa-telegram"></i>Telegram
                  </a>
                </li>
                <li className="footer_ul_li">
                  <a
                    target="_blank"
                    href="mailto:monte.traveluzb@gmail.com"
                    className="footer_ul_li_link"
                  >
                    <i className="fa-regular fa-envelope"></i>Email
                  </a>
                </li>
                <li className="footer_ul_li">
                  <a
                    target="_blank"
                    href="tel:998903598101"
                    className="footer_ul_li_link"
                  >
                    <i className="fa-solid fa-phone"></i>+998951112333
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer_second">
            <p className="footer_p">
              Copyright © Monte  {new Date().getFullYear()}
            </p>
            <div className="footer_last">
              <p className="footer_p">Terms & Conditions</p>
              <p className="footer_p">Privacy Policy</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default index;
