import { FaCar, FaCheck, FaRoute, FaUserTie } from "react-icons/fa";
import Button from "../components/Button";
import "./DriverService.css";

function DriverService() {
  const benefits = [
    "Comfortable and air-conditioned vehicle",
    "Experienced, English-speaking local driver",
    "Flexible travel schedule",
    "Local insights and route suggestions",
    "Safe and stress-free travel",
  ];

  const suitableFor = [
    "Airport pickups",
    "Multi-city tours",
    "Day trips and sightseeing",
    "Long-distance travel",
  ];

  return (
    <div className="driver-service">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="page-hero-content">
          <h1>Private Driver with Car</h1>
          <p>
            Experience Sri Lanka with comfort and peace of mind. Our reliable
            private car service connects you with the island's best local
            drivers.
          </p>
        </div>
      </section>

      {/* Driver Service Info Grid using Premium Shared Classes */}
      <section className="modern-section">
        <div className="container">
          <div className="modern-intro">
            <h2>Luxury Meets Reliability</h2>
            <p>
              We provide more than just a ride; we offer a local companion to
              make your journey across Sri Lanka seamless and enjoyable.
            </p>
          </div>

          <div className="modern-grid">
            {/* Benefit Card */}
            <div className="premium-card">
              <div className="premium-card-header">
                <div className="premium-card-icon">
                  <FaUserTie />
                </div>
                <h3>Why Choose Our Service?</h3>
              </div>

              <div className="premium-card-body">
                <p className="premium-card-desc">
                  Enjoy the freedom of private travel with drivers who know the
                  island intimately and prioritize your safety.
                </p>

                <div className="premium-highlights-box">
                  <h4>Core Benefits</h4>
                  <ul className="premium-highlights-list">
                    {benefits.map((benefit, index) => (
                      <li key={index}>
                        <FaCheck className="list-icon" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="premium-card-footer">
                  <span className="premium-badge-text">
                    <strong>Perfect for:</strong> Families, Couples, Solo
                    Travelers
                  </span>
                </div>
              </div>
            </div>

            {/* Service Options Card */}
            <div className="premium-card">
              <div className="premium-card-header">
                <div className="premium-card-icon">
                  <FaRoute />
                </div>
                <h3>Flexible Service Options</h3>
              </div>

              <div className="premium-card-body">
                <p className="premium-card-desc">
                  From single transfers to multi-day round trips, we adapt our
                  services to fit your unique travel requirements.
                </p>

                <div className="premium-highlights-box">
                  <h4>What We Offer</h4>
                  <ul className="premium-highlights-list">
                    {suitableFor.map((item, index) => (
                      <li key={index}>
                        <FaCheck className="list-icon" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="premium-card-footer">
                  <span className="premium-badge-text">
                    <strong>Service Area:</strong> Dynamic Routes Nationwide
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="info-box-modern">
            <p>
              <strong>Note:</strong> This service is designed to support
              independent, flexible travel. Your driver acts as a local expert
              to help you navigate the island comfortably and safely at your own
              pace.
            </p>
          </div>
        </div>
      </section>

      {/* Premium Bottom CTA */}
      <section className="premium-cta-section">
        <div className="container">
          <div className="premium-cta-container">
            <div className="premium-cta-card">
              <div className="premium-cta-content">
                <h2>Ready to Book Your Local Driver?</h2>
                <p>
                  Contact us today to discuss your travel needs and receive a
                  personalized quote for a private car with a dedicated driver.
                </p>
                <div className="premium-cta-actions">
                  <Button variant="primary" size="lg" href="/contact">
                    Request a Quote
                  </Button>
                  <Button variant="outline" size="lg" href="/tour-itineraries">
                    View Itineraries
                  </Button>
                </div>
              </div>
              <div className="premium-cta-visual">
                <FaCar className="premium-cta-icon" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DriverService;
