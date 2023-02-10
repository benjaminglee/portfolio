import ContactLayout from './Contact.layout';
import { ContactForm } from './contactForm/ContactForm';
const Contact = () => {
  return (
    <ContactLayout>
      <a class="anchor" id="contactme"></a>
      <div className="contact" id="contact">
        <h2 id="contactHeader">Contact Me!</h2>
        <div className="contact-main">
          <div className="map-wrapper">
            {/* <iframe
              title="google maps showing wicker park in Chicago"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d33997.69821304711!2d-87.70018472935685!3d41.90432088687726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd2c5d9cb201f%3A0x9c95d9bc940da12f!2sWicker%20Park%2C%20Chicago%2C%20IL!5e0!3m2!1sen!2sus!4v1675744685946!5m2!1sen!2sus"
            ></iframe> */}
          </div>
          <div className="contact-text">
            <p>
              I'm currently looking for a full-time role, though I'm open to
              other opportunites. Don't hesitate to reach out with any
              questions.
            </p>
            <ContactForm />
          </div>
        </div>
      </div>
    </ContactLayout>
  );
};

export default Contact;
