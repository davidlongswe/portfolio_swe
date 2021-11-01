import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_tdx4au8",
        "template_4oe87td",
        formRef.current,
        "user_EkXM6qhxQHDn4MKSaBDch"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Låt oss diskutera ditt projekt idag!</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +46 70 257 23 77
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              davidlongswe@gmail.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
              Korsgatan 2D, Örnsköldsvik 89135, Sverige
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>Har du en idé?</b> Hör av dig! Jag är alltid tillgänglig för
            frilansprojekt!
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Namn"
              name="user_name"
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Ämne"
              name="user_subject"
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Email"
              name="user_email"
            />
            <textarea
              style={{ backgroundColor: darkMode && "#333" }}
              rows="5"
              placeholder="Skriv här..."
              name="message"
            />
            <button>Submit</button>
            {done && "Tack!"}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
