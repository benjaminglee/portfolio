import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import ContactFormLayout from './ContactForm.layout';

export const ContactForm = ({ mode }) => {
  const form = useRef();

  function ValidateEmail(input) {
    var validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (input.match(validRegex)) {
      return true;
    } else {
      alert('Invalid email address!');

      return false;
    }
  }

  const sendEmail = (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    if (!ValidateEmail(email)) return;
    emailjs
      .sendForm(
        `${process.env.REACT_APP_SERVICE_ID}`,
        `${process.env.REACT_APP_TEMPLATE_ID}`,
        form.current,
        `${process.env.REACT_APP_PUBLIC_KEY}`
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <ContactFormLayout mode={mode}>
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="from_name" placeholder="Your Name" />
        <input
          type="email"
          name="from_email"
          id="email"
          placeholder="Enter Your Email (required)"
        />
        <textarea name="message" placeholder="Write message..." />
        <input id="emailsub" type="submit" value="Send" />
      </form>
    </ContactFormLayout>
  );
};
