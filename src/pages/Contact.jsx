import {
  FaEnvelope,
  FaWhatsapp,
  FaPhone,
  FaFacebook,
  FaTripadvisor,
} from "react-icons/fa";
import Button from "../components/Button";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="page-hero-content">
          <h1>Contact Us</h1>
          <p>
            We are happy to help you plan your Sri Lanka journey. Reach out to
            us through any of the following methods for assistance with a
            customized travel plan.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section">
        <div className="container">
          <div className="contact-info-wrapper">
            {/* Contact Information */}
            <div className="contact-info-container">
              <h2 className="section-title">Get In Touch</h2>

              <div className="contact-info-grid">
                <div className="contact-card card">
                  <FaEnvelope className="contact-card-icon" />
                  <div>
                    <h4>Email Us</h4>
                    <a href="mailto:withusexploresrilanka@gmail.com">
                      withusexploresrilanka@gmail.com
                    </a>
                  </div>
                </div>

                <div className="contact-card card">
                  <FaWhatsapp className="contact-card-icon whatsapp" />
                  <div>
                    <h4>WhatsApp</h4>
                    <a
                      href="https://wa.me/94710733780"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      +94 71 07 33 780
                    </a>
                    <p className="contact-note">Quick responses via WhatsApp</p>
                  </div>
                </div>

                <div className="contact-card card">
                  <FaPhone className="contact-card-icon" />
                  <div>
                    <h4>Call Us</h4>
                    <a href="tel:+94710733780">+94 71 07 33 780</a>
                  </div>
                </div>
              </div>

              <div className="quick-action">
                <h3>Connect With Us</h3>
                <p>
                  Follow us on social media for more travel inspiration and
                  updates.
                </p>
                <div className="contact-social-links">
                  <a
                    href="https://www.facebook.com/share/1Gsd9iUb82/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-social-button facebook"
                  >
                    <FaFacebook /> <span>Facebook</span>
                  </a>
                  <a
                    href="https://www.tripadvisor.com/Profile/Passenger20233050521"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-social-button tripadvisor"
                  >
                    <FaTripadvisor /> <span>TripAdvisor</span>
                  </a>
                </div>
                <div style={{ marginTop: "20px" }}>
                  <Button
                    variant="whatsapp"
                    size="lg"
                    icon={<FaWhatsapp />}
                    href="https://wa.me/94710733780"
                  >
                    Chat on WhatsApp
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Response Time */}
      <section className="container">
        <div className="response-section">
          <h3>Typical Response: Within 24 Hours</h3>
          <p>
            Our team is dedicated to helping you plan the perfect Sri Lanka
            journey. We'll review your inquiry and get back to you with
            personalized recommendations.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Contact;
