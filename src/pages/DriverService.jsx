import { FaCar, FaCheckCircle, FaRoute, FaUsers } from "react-icons/fa";
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

      {/* Driver Service Info Grid */}
      <section className="section">
        <div className="container">
          <div className="driver-info-grid">
            {/* Why Choose a Private Driver */}
            <div className="service-card">
              <div className="service-card-header">
                <div className="service-card-icon">
                  <FaCheckCircle />
                </div>
                <h2>Why Choose a Private Driver?</h2>
              </div>
              <ul className="service-list">
                {benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>

            {/* Suitable For */}
            <div className="service-card">
              <div className="service-card-header">
                <div className="service-card-icon">
                  <FaRoute />
                </div>
                <h2>Suitable For</h2>
              </div>
              <ul className="service-list route-list">
                {suitableFor.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="service-note-box">
            <p>
              Note: This service is intended to support independent travel and
              flexibility rather than a strictly guided tour.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container">
        <div className="cta-section">
          <h2>Interested in Our Driver Service?</h2>
          <p>
            Contact us to discuss your travel needs and receive a personalized
            quote for a private car with driver.
          </p>
          <div className="cta-buttons">
            <Button variant="primary" size="lg" href="/contact">
              Request a Quote
            </Button>
            <Button variant="outline" size="lg" href="/tour-itineraries">
              View Tour Itineraries
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DriverService;
