import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import { language } from "../../lang/index.jsx";

const index = () => {
  const [firstName, setFirstName] = useState("");
  const [mobile, setMobile] = useState("");
  const [person, setPerson] = useState([]);
  const [email, setEmail] = useState("");

  const contactPerson = () => {
    const check = {
      firstName: firstName.trim().length === 0,
      email: email.trim().length === 0,
      mobile: mobile.trim().length === 0,
    };

    let chat_id = -1002121016456;
    let text = `Name: ${firstName}\nEmail: ${email}\nMobile: +${mobile}`;
    console.log(text);
    let your_token = "7140322661:AAHkzkZk1JJbA9kBxJLjsYVuqfTlakyNLTA";
    let url = `https://api.telegram.org/bot${your_token}/sendMessage?chat_id=${chat_id}&text=${text}/`;
    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();
    if (check.firstName || check.lastName || check.email || check.mobile) {
      toast.error("Iltimos ma'lumotlaringizni kiriting ", {
        position: "top-right",
        autoClose: 500,
      });
    } else {
      const newPerson = {
        firstName: firstName,

        email: email,
        mobile: mobile,
      };
      setPerson([...person, newPerson]);
      setFirstName("");
      setEmail(""), setMobile("");
      toast.success(
        "Ma'lumotlaringiz yuborildi , tez orada adminlarimiz aloqaga chiqishadi",
        {
          position: "top-right",
          autoClose: 1000,
        }
      );
    }
  };

  return (
    <>
      <ToastContainer />
      <section id="contact">
        <div className="container">
          <form
            action="#"
            onSubmit={() => {
              contactPerson();
              console.log(123);
            }}
            className="form"
          >
            <h2 className="form_title">
              {localStorage.getItem("lang") === "Russian"
                ? language?.russian?.header?.btn
                : localStorage.getItem("lang") === "Uzbek"
                ? language?.uzbek?.header?.btn
                : language?.english?.header?.btn}
            </h2>
            <label htmlFor="firstName">
              <input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder={
                  localStorage.getItem("lang") === "Russian"
                    ? language?.russian?.contact?.firstName
                    : localStorage.getItem("lang") === "Uzbek"
                    ? language?.uzbek?.contact?.firstName
                    : language?.english?.contact?.firstName
                }
                type="text"
                id="firstName"
                required
              />
            </label>

            <label htmlFor="mobile">
              <input
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                placeholder={
                  localStorage.getItem("lang") === "Russian"
                    ? language?.russian?.contact?.mobile
                    : localStorage.getItem("lang") === "Uzbek"
                    ? language?.uzbek?.contact?.mobile
                    : language?.english?.contact?.mobile
                }
                type="number"
                id="mobile"
                required
              />
            </label>
            <label htmlFor="email">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={
                  localStorage.getItem("lang") === "Russian"
                    ? language?.russian?.contact?.email
                    : localStorage.getItem("lang") === "Uzbek"
                    ? language?.uzbek?.contact?.email
                    : language?.english?.contact?.email
                }
                type="email"
                id="email"
                required
              />
            </label>

            <button
              type="submit"
              onSubmit={() => {
                
                contactPerson();
              }}
            >
              {localStorage.getItem("lang") === "Russian"
                ? language?.russian?.contact?.button
                : localStorage.getItem("lang") === "Uzbek"
                ? language?.uzbek?.contact?.button
                : language?.english?.contact?.button}
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default index;
