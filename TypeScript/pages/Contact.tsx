import contact from "../assets/contact.png";
import "./Contact.css";
function Contact(){
  return(
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-form">
          <h2>Let's Connect</h2>
          <p>We'd love to hear from you.Send us a message</p>
          <form>
            <input type="text"placeholder="Your Name"required />
            <input type="email"placeholder="Your Email"required />
            <textarea placeholder="Your Message"rows={5}required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
        <div className="contact-image">
          <img src={contact} alt="Contact Us" />
        </div>
      </div>
    </section>
  );
}
export default Contact;