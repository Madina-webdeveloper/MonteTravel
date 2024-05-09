import React from "react";
import "./index.css";

import Logo from "../../assets/images/logo.png";
import {lang, language, selectionsLang, setSelectionsLang} from "../../lang/index.jsx";

const index = ({}) => {


    console.log(localStorage.getItem("lang"))
    return (
        <>
            <header>
                <div className="container socials">
                    <div className="right_social">
                        <a href="tel:998903598101" className="mobile socials_c">
                            +998951112333
                        </a>
                        <a
                            href="mailto:monte.traveluzb@gmail.com"
                            className="email_s socials_c"
                        >
                            monte.traveluzb@gmail.com
                        </a>
                    </div>
                    <div className="left_s">
                        <select
                            onChange={(e) => {
                                setSelectionsLang(e?.target?.value);
                            }}
                        >
                            <option>
                                {localStorage.getItem("lang") === lang.english ? lang.english : (localStorage.getItem("lang") === lang.russian ? lang.russian : lang.uzbek)}
                            </option>

                            <option
                                value={localStorage.getItem("lang") !== lang.russian ? lang.russian : (localStorage.getItem("lang") === lang.english ? lang.english : lang.uzbek)}>
                                    {localStorage.getItem("lang") !== lang.russian ? lang.russian : (localStorage.getItem("lang") === lang.english ? lang.english : lang.uzbek)}</option>
                                
                            <option value={localStorage.getItem("lang") !== lang.english ? lang.english : lang.russian}>
                                    {localStorage.getItem("lang") !== lang.english ? lang.english : lang.uzbek}
                                
                            </option>
                        </select>
                    </div>
                </div>
                <hr/>
                <div className="container">
                    <nav className="header">
                        <a href="#">
                            {" "}
                            <img src={Logo} alt="logo" className="logo"/>
                        </a>

                        <div className="btns">
                            <a href="#contact" className="login">
                                {localStorage.getItem("lang") === "Russian" ? language?.russian?.header?.btn : (localStorage.getItem("lang") === "Uzbek" ? language?.uzbek?.header?.btn :language?.english?.header?.btn) }
                            </a>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    );
};

export default index;
