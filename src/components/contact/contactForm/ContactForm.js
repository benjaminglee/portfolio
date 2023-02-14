import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import ContactFormLayout from './ContactForm.layout';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ContactForm = ({ mode }) => {
  const form = useRef();

  function ValidateEmail(input) {
    var validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (input.match(validRegex)) {
      return true;
    } else {
      return false;
    }
  }

  const sendEmail = (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const senderMessage = document.getElementById('senderMessage').value;
    const senderName = document.getElementById('senderName').value;
    if (senderName === '') {
      toast.warn('Please enter a name.', {
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: `${mode ? 'dark' : 'light'}`,
        className: 'toast-position',
      });
      return;
    }
    if (senderMessage === '') {
      toast.warn('Please enter a message.', {
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: `${mode ? 'dark' : 'light'}`,
        className: 'toast-position',
      });
      return;
    }
    if (!ValidateEmail(email)) {
      toast.warn('Please enter a valid email address.', {
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: `${mode ? 'dark' : 'light'}`,
        className: 'toast-position',
      });
      return;
    }
    emailjs
      .sendForm(
        `${process.env.REACT_APP_SERVICE_ID}`,
        `${process.env.REACT_APP_TEMPLATE_ID}`,
        form.current,
        `${process.env.REACT_APP_PUBLIC_KEY}`
      )
      .then(
        (result) => {
          e.target.reset();
          toast.success('Email sent!', {
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: `${mode ? 'dark' : 'light'}`,
            className: 'toast-position',
          });
        },
        (error) => {
          console.log(error.text);
          toast.error('Something went wrong!', {
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: `${mode ? 'dark' : 'light'}`,
            className: 'toast-position',
          });
        }
      );
  };

  return (
    <ContactFormLayout mode={mode}>
      <form ref={form} onSubmit={sendEmail}>
        <input
          id="senderName"
          type="text"
          name="from_name"
          placeholder="Your Name"
        />
        <input
          type="email"
          name="from_email"
          id="email"
          placeholder="Enter Your Email (required)"
        />
        <textarea
          id="senderMessage"
          name="message"
          placeholder="Write message..."
        />
        <input id="emailsub" type="submit" value="Send" />
      </form>
    </ContactFormLayout>
  );
};
