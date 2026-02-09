import { Link } from "react-router-dom";
import {
  FaWhatsapp,
  FaMapMarkedAlt,
  FaUsers,
  FaHeart,
  FaRoute,
  FaCar,
  FaCheck,
  FaArrowRight,
} from "react-icons/fa";
import Button from "../components/Button";
import "./Home.css";

function Home() {
  const destinations = [
    {
      name: "Colombo",
      description: "Urban culture, food, and city experiences",
      path: "/destinations#colombo",
      image: "src/assets/Images/Colombo.jpg", // Placeholder if images aren't dynamic yet
    },
    {
      name: "Sigiriya",
      description: "Ancient rock fortress and cultural heritage",
      path: "/destinations#sigiriya",
    },
    {
      name: "Kandy",
      description: "Sacred sites and hill country gateway",
      path: "/destinations#kandy",
    },
    {
      name: "Nuwara Eliya",
      description: "Tea plantations and cool-climate landscapes",
      path: "/destinations#nuwara-eliya",
    },
    {
      name: "Ella",
      description: "Scenic views, hiking, and relaxed mountain town",
      path: "/destinations#ella",
    },
    {
      name: "Udawalawe",
      description: "Elephant safaris and wildlife experiences",
      path: "/destinations#udawalawe",
    },
    {
      name: "Yala",
      description: "Leopard safaris and national park exploration",
      path: "/destinations#udawalawe",
    },
    {
      name: "Arugam Bay",
      description: "Surf culture and laid-back beach life",
      path: "/destinations#arugam-bay",
    },
    {
      name: "Hambantota",
      description: "Nature, salt lakes, and southern landscapes",
      path: "/destinations#hambantota",
    },
  ];

  const experiences = [
    {
      title: "Cultural & Heritage",
      icon: <FaMapMarkedAlt />,
      desc: "Explore ancient cities and sacred sites.",
    },
    {
      title: "Scenic Hill Country",
      icon: <FaRoute />,
      desc: "Train rides through tea plantations and misty mountains.",
    },
    {
      title: "Wildlife Safaris",
      icon: <FaHeart />,
      desc: "Witness elephants and leopards in their natural habitat.",
    },
    {
      title: "Beach & Coastal",
      icon: <FaUsers />,
      desc: "Relax on pristine beaches and explore coastal life.",
    },
  ];

  const whyChooseUs = [
    "In-depth local knowledge",
    "Well-structured itineraries",
    "Honest recommendations",
    "Flexible travel plans",
    "Optional local support",
  ];

  const howItWorks = [
    {
      step: 1,
      title: "Share Preferences",
      description: "Tell us your interests and dates.",
    },
    {
      step: 2,
      title: "Get Suggestions",
      description: "Receive personalized travel ideas.",
    },
    {
      step: 3,
      title: "Discuss Options",
      description: "Refine your plan with our help.",
    },
    {
      step: 4,
      title: "Travel Confidently",
      description: "Explore Sri Lanka your way.",
    },
  ];

  return (
    <div className="home">
      {/* Hero Section - Kept similar but ensured it uses global classes where applicable */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title animate-fade-in text-white">
            Discover Sri Lanka with Local Insight
          </h1>
          <p className="hero-subtitle animate-fade-in text-white">
            Carefully planned itineraries covering culture, nature, and
            wildlife.
          </p>
          <div className="hero-buttons animate-fade-in">
            <Button variant="primary" size="lg" href="/contact">
              Plan Your Trip
            </Button>
            <Button
              variant="whatsapp"
              size="lg"
              href="https://wa.me/94710733780"
              icon={<FaWhatsapp />}
            >
              Chat on WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* What We Do - Modernized */}
      <section className="modern-section">
        <div className="container">
          <div className="modern-intro">
            <h2>What We Do</h2>
            <p>Helping you navigate the Pearl of the Indian Ocean with ease.</p>
          </div>
          <div className="what-we-do-content">
            <p>
              Planning a multi-destination trip in Sri Lanka requires careful
              timing and local knowledge. We support your planning by providing
              clear insights, suggested itineraries, and honest guidance,
              allowing you to explore comfortably and independently.
            </p>
          </div>
        </div>
      </section>

      {/* Why Travel with Us - Premium Grid */}
      <section className="modern-section bg-cream">
        <div className="container">
          <div className="modern-intro">
            <h2>Why Travel with Us</h2>
            <p>
              Thoughtful planning, honest guidance, and personalized support.
            </p>
          </div>
          <div
            className="modern-grid"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            }}
          >
            {whyChooseUs.map((feature, index) => (
              <div
                key={index}
                className="premium-card"
                style={{
                  padding: "var(--spacing-xl)",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <div
                  className="premium-card-icon"
                  style={{ marginBottom: "var(--spacing-md)" }}
                >
                  <FaCheck />
                </div>
                <h3 style={{ fontSize: "1.2rem", margin: 0 }}>{feature}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Destinations - Modern Grid */}
      <section className="modern-section">
        <div className="container">
          <div className="modern-intro">
            <h2>Popular Destinations</h2>
            <p>Explore the most rewarding locations in Sri Lanka.</p>
          </div>
          <div className="modern-grid">
            {destinations.map((destination, index) => (
              <Link
                key={index}
                to={destination.path}
                className="premium-card destination-link-card"
              >
                <div
                  className="premium-card-body"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                  }}
                >
                  <h3
                    style={{
                      color: "var(--color-primary)",
                      marginBottom: "var(--spacing-sm)",
                    }}
                  >
                    {destination.name}
                  </h3>
                  <p style={{ color: "var(--color-text-secondary)", flex: 1 }}>
                    {destination.description}
                  </p>
                  <div
                    style={{
                      marginTop: "var(--spacing-md)",
                      color: "var(--color-accent)",
                      fontWeight: 600,
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    Explore <FaArrowRight style={{ fontSize: "0.8rem" }} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div
            className="text-center"
            style={{ marginTop: "var(--spacing-2xl)" }}
          >
            <Button variant="outline" href="/destinations">
              View All Destinations
            </Button>
          </div>
        </div>
      </section>

      {/* Travel Experiences - Premium Cards */}
      <section className="modern-section bg-cream">
        <div className="container">
          <div className="modern-intro">
            <h2>Travel Experiences</h2>
            <p>Curated journeys designed for authentic discovery.</p>
          </div>
          <div className="modern-grid">
            {experiences.map((exp, index) => (
              <div key={index} className="premium-card">
                <div className="premium-card-header">
                  <div className="premium-card-icon">{exp.icon}</div>
                  <h3>{exp.title}</h3>
                </div>
                <div className="premium-card-body">
                  <p style={{ color: "var(--color-text-secondary)" }}>
                    {exp.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div
            className="text-center"
            style={{ marginTop: "var(--spacing-2xl)" }}
          >
            <Button variant="primary" size="lg" href="/tour-itineraries">
              Explore All Itineraries
            </Button>
          </div>
        </div>
      </section>

      {/* Private Driver Service - Premium CTA Style */}
      <section className="premium-cta-section">
        <div className="container">
          <div className="premium-cta-container">
            <div className="premium-cta-card">
              <div className="premium-cta-content">
                <h2>Private Car with Local Driver</h2>
                <p>
                  For travelers who prefer additional comfort, we can arrange a
                  private car with a trusted local driver to support your
                  journey.
                </p>
                <div className="premium-cta-actions">
                  <Button variant="primary" size="lg" href="/driver-service">
                    Learn More
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

      {/* How It Works - Step Cards */}
      <section className="modern-section bg-cream">
        <div className="container">
          <div className="modern-intro">
            <h2>How It Works</h2>
            <p>Our simple process to get you on your way.</p>
          </div>
          <div className="modern-grid">
            {howItWorks.map((item) => (
              <div key={item.step} className="premium-card step-card">
                <div className="step-count">{item.step}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="premium-cta-section">
        <div className="container text-center">
          <div className="modern-intro">
            {" "}
            {/* Reusing modern-intro for centering and sizing */}
            <h2>Start Planning Your Journey</h2>
            <p>
              Whether it's your first time or a return visit, we help you plan a
              meaningful experience.
            </p>
          </div>
          <div className="cta-buttons">
            <Button variant="primary" size="lg" href="/contact">
              Start Planning
            </Button>
            <Button variant="outline" size="lg" href="/about-us">
              About Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
