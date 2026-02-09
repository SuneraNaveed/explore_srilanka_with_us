import {
  FaLeaf,
  FaLandmark,
  FaHeart,
  FaMountain,
  FaCog,
  FaCheck,
} from "react-icons/fa";
import Button from "../components/Button";
import "./TourItineraries.css";

function TourItineraries() {
  const tours = [
    {
      icon: <FaLeaf />,
      title: "Nature & Wildlife Tours",
      type: "nature",
      description:
        "Experience Sri Lanka's rich biodiversity, national parks, and scenic landscapes.",
      highlights: [
        "Udawalawe National Park – Elephant safaris",
        "Yala National Park – Leopards and wildlife",
        "Hill country landscapes in Ella and Nuwara Eliya",
        "Waterfalls, forests, and scenic viewpoints",
      ],
      idealFor: "Nature lovers, photographers, eco-tourists",
    },
    {
      icon: <FaLandmark />,
      title: "Cultural & Heritage Tours",
      type: "culture",
      description:
        "Discover ancient cities, sacred temples, and UNESCO World Heritage Sites.",
      highlights: [
        "Sigiriya Rock Fortress",
        "Kandy and the Temple of the Sacred Tooth Relic",
        "Galle Fort",
        "Cultural villages and traditional experiences",
      ],
      idealFor: "History lovers, cultural explorers",
    },
    {
      icon: <FaHeart />,
      title: "Honeymoon Tours",
      type: "romance",
      description:
        "Romantic journeys combining scenic beauty, privacy, and unforgettable moments.",
      highlights: [
        "Misty hill country views in Ella and Nuwara Eliya",
        "Sunset beaches in Galle, Hikkaduwa, and Mirissa region",
        "Leisure time, scenic walks, and photo spots",
      ],
      idealFor: "Couples, honeymooners",
    },
    {
      icon: <FaMountain />,
      title: "Adventure Tours",
      type: "adventure",
      description: "For travelers seeking excitement and outdoor activities.",
      highlights: [
        "Hiking in Ella and Little Adam's Peak",
        "Surfing in Arugam Bay",
        "Wildlife safaris",
        "Scenic train rides",
      ],
      idealFor: "Adventure seekers, active travelers",
    },
    {
      icon: <FaCog />,
      title: "Custom Tours",
      type: "custom",
      description:
        "Design your own itinerary based on your interests, time, and budget.",
      highlights: [
        "Mix beaches, culture, wildlife, and hills",
        "Flexible travel pace",
        "Personalized route planning",
      ],
      idealFor: "Families, solo travelers, long stays",
    },
  ];

  return (
    <div className="tour-itineraries">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="page-hero-content">
          <h1>Explore Sri Lanka Your Way</h1>
          <p>
            Our itineraries are carefully designed to showcase the best of Sri
            Lanka while allowing flexibility based on your interests, pace, and
            travel dates.
          </p>
        </div>
      </section>

      {/* Tours Section using Premium Shared Classes */}
      <section className="modern-section">
        <div className="container">
          <div className="modern-intro">
            <h2>Select Your Travel Style</h2>
            <p>
              Whether you love nature, history, adventure, or romance, we help
              you experience Sri Lanka authentically.
            </p>
          </div>

          <div className="modern-grid">
            {tours.map((tour, index) => (
              <div key={index} className="premium-card">
                <div className="premium-card-header">
                  <div className="premium-card-icon">{tour.icon}</div>
                  <h3>{tour.title}</h3>
                </div>

                <div className="premium-card-body">
                  <p className="premium-card-desc">{tour.description}</p>

                  <div className="premium-highlights-box">
                    <h4>What's Included</h4>
                    <ul className="premium-highlights-list">
                      {tour.highlights.map((highlight, idx) => (
                        <li key={idx}>
                          <FaCheck className="list-icon" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="premium-card-footer">
                    <span className="premium-badge-text">
                      <strong>Perfect for:</strong> {tour.idealFor}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Bottom CTA */}
      <section className="premium-cta-section">
        <div className="container">
          <div className="premium-cta-container">
            <div className="premium-cta-card">
              <div className="premium-cta-content">
                <h2>Can't find what you're looking for?</h2>
                <p>
                  Every traveler is unique. Let us help you plan a completely
                  custom itinerary that matches your travel dates, budget, and
                  specific interests.
                </p>
                <div className="premium-cta-actions">
                  <Button variant="primary" size="lg" href="/contact">
                    Start Planning Your Trip
                  </Button>
                  <Button variant="outline" size="lg" href="/destinations">
                    Explore Destinations
                  </Button>
                </div>
              </div>
              <div className="premium-cta-visual">
                <FaCog className="premium-cta-icon spin-slow" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TourItineraries;
