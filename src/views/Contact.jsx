import { React, useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = ({ apiContact }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_xmx2oh5",
        "template_9gz3vww",
        form.current,
        "B0je7i5ZxwpRmO2cT"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="contactContainer">
      <div className="left">
        {apiContact.length === [] ? null : (
          <img src={apiContact[0]?.img} alt={apiContact[0]?.name} />
        )}
      </div>
      <div className="right">
        <form ref={form} onSubmit={sendEmail}>
          <h1>Got any question? Let’s talk about it.</h1>
          <input name="first-name" type="text" placeholder="First Name" />
          <input name="last-name" type="text" placeholder="Last Name" />
          <input name="email" type="email" placeholder="Email" />
          <textarea
            name="message"
            type="message"
            placeholder="Enter a Message"
          />
          <input type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
